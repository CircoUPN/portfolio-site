import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Scoring logic for operating system scan
function calculateScores(formData: Record<string, unknown>) {
  const osScores = {
    clarity: (formData.clarityScore as number) || 0,
    process: (formData.processScore as number) || 0,
    tools: (formData.toolsScore as number) || 0,
    automation: (formData.automationScore as number) || 0,
    measurement: (formData.measurementScore as number) || 0,
  };

  // Total possible = 25 (5 questions x 5 max each)
  const totalScore = Object.values(osScores).reduce((sum: number, val: number) => sum + val, 0);
  const maxPossible = 25;

  // Determine category based on mode and scores
  // Lower scores = more problems = firefighting
  // Higher scores = better shape = growth mode makes sense
  let category = formData.mode as string; // Start with user's self-assessment

  // If they said growth but scores are terrible, they're actually firefighting
  if (formData.mode === 'growth' && totalScore < 10) {
    category = 'firefighting';
  }
  // If they said firefighting but scores are decent, they might be in better shape
  if (formData.mode === 'firefighting' && totalScore >= 18) {
    category = 'growth';
  }

  // Identify bottlenecks (scores of 1 or 2 are problems)
  const bottlenecks: { area: string; score: number; severity: string }[] = [];
  if (osScores.clarity <= 2) bottlenecks.push({ area: 'Clarity & Goals', score: osScores.clarity, severity: osScores.clarity === 1 ? 'critical' : 'warning' });
  if (osScores.process <= 2) bottlenecks.push({ area: 'Processes & SOPs', score: osScores.process, severity: osScores.process === 1 ? 'critical' : 'warning' });
  if (osScores.tools <= 2) bottlenecks.push({ area: 'Tools & Data', score: osScores.tools, severity: osScores.tools === 1 ? 'critical' : 'warning' });
  if (osScores.automation <= 2) bottlenecks.push({ area: 'Automation & AI', score: osScores.automation, severity: osScores.automation === 1 ? 'critical' : 'warning' });
  if (osScores.measurement <= 2) bottlenecks.push({ area: 'Measurement', score: osScores.measurement, severity: osScores.measurement === 1 ? 'critical' : 'warning' });

  // Sort by severity (lowest scores first)
  bottlenecks.sort((a, b) => a.score - b.score);

  return {
    osScores,
    totalScore,
    maxPossible,
    category,
    bottlenecks: bottlenecks.slice(0, 3), // Top 3 bottlenecks
  };
}

// Estimate value based on workflow data
function estimateValue(formData: Record<string, unknown>): string {
  const hoursStr = (formData.hoursPerWeek as string) || '';
  const hoursMatch = hoursStr.match(/(\d+)/);
  const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;

  if (hours >= 15) {
    return `${hours}+ hrs/week of manual work`;
  } else if (hours >= 5) {
    return `${hours} hrs/week optimization opportunity`;
  }

  // Default based on mode
  if (formData.mode === 'firefighting') {
    return 'Significant reliability improvements';
  }
  return 'Scalability improvements';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Calculate scores and analysis
    const analysis = calculateScores(body);
    const estimatedValue = estimateValue(body);

    // Check if lead already exists
    const { data: existingLead } = await supabase
      .from('leads')
      .select('id, has_contact_submission, has_evaluation')
      .eq('email', body.email.toLowerCase())
      .single();

    let leadId: string;

    if (existingLead) {
      // Update existing lead
      const { error: updateError } = await supabase
        .from('leads')
        .update({
          name: body.name,
          company: body.companyName || null,
          has_evaluation: true,
          score: analysis.totalScore,
          category: analysis.category,
          estimated_value: estimatedValue,
          last_activity_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingLead.id);

      if (updateError) {
        console.error('Error updating lead:', updateError);
        throw updateError;
      }

      leadId = existingLead.id;
    } else {
      // Create new lead
      const { data: newLead, error: insertError } = await supabase
        .from('leads')
        .insert({
          email: body.email.toLowerCase(),
          name: body.name,
          company: body.companyName || null,
          inquiry_type: 'Client Project', // Evaluation implies client interest
          source: 'evaluation',
          pipeline_stage: 'new',
          has_evaluation: true,
          score: analysis.totalScore,
          category: analysis.category,
          estimated_value: estimatedValue,
        })
        .select('id')
        .single();

      if (insertError) {
        console.error('Error creating lead:', insertError);
        throw insertError;
      }

      leadId = newLead.id;
    }

    // Create evaluation record with all the data
    const evaluationData = {
      lead_id: leadId,
      answers: {
        // Business Context
        company_name: body.companyName,
        industry: body.industry,
        company_size: body.companySize,
        role: body.role,
        revenue_model: body.revenueModel,
        // Focus Area & Mode
        focus_area: body.focusArea,
        mode: body.mode,
        mode_description: body.modeDescription,
        // Goals
        one_year_outcome: body.oneYearOutcome,
        primary_kpi: body.primaryKpi,
        timeline: body.timeline,
        // Bottleneck Workflow
        workflow_name: body.workflowName,
        workflow_type: body.workflowType,
        current_state: body.currentState,
        frequency: body.frequency,
        hours_per_week: body.hoursPerWeek,
        people_and_tools: body.peopleAndTools,
        failure_modes: body.failureModes,
        biggest_frustration: body.biggestFrustration,
        // Constraints
        data_fragmentation: body.dataFragmentation,
        tool_integration: body.toolIntegration,
        automation_comfort: body.automationComfort,
        must_remain_human: body.mustRemainHuman,
        // Next Steps
        readiness: body.readiness,
      },
      scores: analysis.osScores,
      total_score: analysis.totalScore,
      max_possible_score: analysis.maxPossible,
      category: analysis.category,
      bottlenecks: analysis.bottlenecks,
      is_complete: true,
      completed_at: new Date().toISOString(),
    };

    const { data: evaluation, error: evalError } = await supabase
      .from('evaluations')
      .insert(evaluationData)
      .select('id')
      .single();

    if (evalError) {
      console.error('Error creating evaluation:', evalError);
      throw evalError;
    }

    // Create activity record
    await supabase.from('activities').insert({
      lead_id: leadId,
      activity_type: 'evaluation_completed',
      description: `Completed evaluation: ${body.workflowName || 'Workflow assessment'}`,
      metadata: {
        evaluation_id: evaluation.id,
        score: analysis.totalScore,
        category: analysis.category,
        focus_area: body.focusArea,
        mode: body.mode,
        workflow_name: body.workflowName,
        readiness: body.readiness,
      },
      created_by: 'system',
    });

    // TODO: Trigger n8n webhook for AI generation and email
    // This will be added once n8n workflow is set up
    // await fetch(process.env.N8N_EVALUATION_WEBHOOK!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     leadId,
    //     evaluationId: evaluation.id,
    //     formData: body,
    //     analysis,
    //   }),
    // });

    return NextResponse.json({
      success: true,
      message: 'Evaluation submitted successfully',
      leadId,
      evaluationId: evaluation.id,
      // Return preview data for immediate display
      preview: {
        category: analysis.category,
        totalScore: analysis.totalScore,
        maxScore: analysis.maxPossible,
        osScores: analysis.osScores,
        bottlenecks: analysis.bottlenecks,
        workflowName: body.workflowName,
        biggestFrustration: body.biggestFrustration,
        mode: body.mode,
        focusArea: body.focusArea,
      },
    });
  } catch (error) {
    console.error('Evaluation submission error:', error);
    return NextResponse.json(
      { error: 'Failed to save evaluation' },
      { status: 500 }
    );
  }
}