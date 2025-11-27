import CaseStudy from '@/components/CaseStudy';

export default function LeadLifecycleCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Lead Lifecycle Autopilot + SOP Standardization"
      category="Operational Efficiency + Intelligence Layer"
      label="Growth"
      myRole="Designed the complete lifecycle framework—from stage definitions to CRM enforcement to SOP documentation. Led implementation and trained the team on the new processes."
      
      // Context
      context="Growing B2B SaaS company (75 employees, scaling to 150) with sales and marketing teams that had organically grown without formal processes. Three different 'lead lifecycle' definitions existed depending on who you asked. New hires took 6+ weeks to ramp because nothing was documented. Every rep had their own way of doing things."
      
      // Timeline
      timeline={{
        duration: '6 weeks',
        role: 'Lead Architect & Process Design',
        teamSize: 'Solo with RevOps support',
        when: 'Q4 2023'
      }}
      
      // Problem
      problem={`The company was hiring fast but couldn't onboard effectively. New SDRs would ask "what's an MQL?" and get different answers from different people. Marketing would send leads to sales who would complain "these aren't qualified." Sales would mark leads as "Closed Lost" without logging why. There was no standard process—just tribal knowledge that walked out the door every time someone left.`}
      
      breakingPoint="Two senior reps left in the same month, taking their process knowledge with them. Pipeline dropped 40% the following quarter because the new reps had no playbook to follow. The VP of Sales realized they had a bus factor of 2—if two more people left, the company might not recover."
      
      stakes={[
        '40% pipeline drop when key reps left (knowledge walked out the door)',
        '6+ week ramp time for new hires (should be 2-3 weeks)',
        'Sales-marketing finger-pointing (no agreed definitions)',
        'Inconsistent customer experience (every rep did it differently)',
        'Scaling impossible (couldn\'t hire fast enough to hit targets)'
      ]}
      
      // Solution
      solutionIntro="Standardized Lead Lifecycle + Automated Process Enforcement:"
      
      solutionItems={[
        {
          title: 'Unified Lifecycle Definition',
          description: 'Single, company-wide lifecycle eliminating ambiguity between teams.',
          details: [
            'Single, company-wide lifecycle: Lead → MQL → SAL → SQL → Opportunity → Customer',
            'Clear, measurable criteria for each stage transition',
            'Documented in accessible playbook (not buried in wiki)',
            'Visual lifecycle map showing stages, owners, and SLAs',
            'Approved by sales, marketing, and leadership (no more debates)'
          ]
        },
        {
          title: 'CRM Stage-Gate Enforcement',
          description: 'Automated validation ensuring process compliance.',
          details: [
            'Required fields for each stage transition',
            'Validation rules preventing skipped stages',
            'Automated alerts when leads stuck too long in a stage',
            'Manager approval gates for certain transitions',
            'Audit logging of all stage changes with reasons'
          ]
        },
        {
          title: 'SOP Library + Embedded Checklists',
          description: 'Step-by-step playbooks accessible right where work happens.',
          details: [
            'Step-by-step playbooks for every rep activity',
            'Discovery call checklist embedded in CRM opportunity record',
            'Demo prep checklist auto-triggered before scheduled demos',
            'Proposal process with approval workflow',
            'Objection handling guides linked from CRM',
            'Video walkthroughs for complex processes'
          ]
        },
        {
          title: 'Automated Workflow Triggers',
          description: 'System-driven handoffs eliminating manual coordination.',
          details: [
            'MQL notification to SDR within 5 minutes of qualification',
            'SAL auto-creation when SDR schedules meeting',
            'Opportunity auto-creation from qualified SAL',
            'Task auto-assignment based on lifecycle stage',
            'Nurture enrollment for leads not ready to progress'
          ]
        },
        {
          title: 'Onboarding Acceleration System',
          description: 'Structured ramp program getting new hires productive faster.',
          details: [
            'Week-by-week onboarding curriculum',
            'Certification quizzes for each lifecycle stage',
            'Shadowing schedule auto-generated',
            'Ramp metrics tracked: time to first meeting, first opportunity, first close',
            'Manager visibility into new hire progress'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Lifecycle Map',
          description: 'Visual diagram showing stages, criteria, owners, and SLAs.',
          alt: 'Lead lifecycle map'
        },
        {
          title: 'SOP Playbook',
          description: 'Sample SOP page showing step-by-step process with embedded video.',
          alt: 'SOP playbook interface'
        },
        {
          title: 'Stage-Gate Validation',
          description: 'CRM validation error showing required fields for stage progression.',
          alt: 'Stage gate validation'
        },
        {
          title: 'Onboarding Dashboard',
          description: 'New hire ramp tracking showing certification progress and milestones.',
          alt: 'Onboarding tracking dashboard'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Getting buy-in from tenured reps who had "their way" of doing things—had to show benefits, not just mandate change',
        'Lifecycle stages needed to be simple enough to follow but detailed enough to be meaningful',
        'CRM validation couldn\'t be so strict it slowed down deal velocity—balanced enforcement with flexibility',
        'SOPs had to be living documents—built update workflow so they didn\'t become stale',
        'Onboarding system had to work for different roles (SDR vs. AE vs. CSM) with shared foundation'
      ]}
      
      // Stack
      stack={[
        {
          category: 'CRM',
          tools: 'Salesforce with custom validation rules and flows'
        },
        {
          category: 'Process Documentation',
          tools: 'Notion with embedded Loom videos'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for cross-system automation'
        },
        {
          category: 'Training',
          tools: 'Loom videos embedded in Notion playbooks'
        },
        {
          category: 'Tracking',
          tools: 'Custom Salesforce reports for process compliance'
        },
        {
          category: 'Communication',
          tools: 'Slack for stage-change notifications'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Process Compliance',
          metrics: [
            {
              value: '98%',
              label: 'Following the process',
              context: 'Stage skip violations down from 45% to 2%'
            },
            {
              value: '98%',
              label: 'Required field completion',
              context: 'Up from 60%'
            },
            {
              value: '100%',
              label: 'Closed-Lost reason capture',
              context: 'Up from 30%'
            }
          ]
        },
        {
          title: 'Onboarding Improvements',
          metrics: [
            {
              value: '58%',
              label: 'Faster new rep ramp',
              context: '6 weeks → 2.5 weeks'
            },
            {
              value: '8 days',
              label: 'Time to first qualified meeting',
              context: 'Down from 18 days'
            },
            {
              value: '72%',
              label: '90-day new hire quota attainment',
              context: 'Up from 45%'
            }
          ]
        },
        {
          title: 'Operational Efficiency',
          metrics: [
            {
              value: 'Zero',
              label: 'Sales-marketing handoff disputes',
              context: 'Clear definitions ended finger-pointing'
            },
            {
              value: '94%',
              label: 'Stage-based SLA compliance',
              context: 'Up from 78%'
            },
            {
              value: '-70%',
              label: 'Process-related escalations',
              context: 'Managers handle fewer disputes'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "We used to dread when reps left because we'd lose months rebuilding. Now the knowledge lives in the system, not in people's heads. Our last 3 hires hit quota in their first full quarter.",
        author: "Amanda Foster",
        role: "VP of Sales"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Institutional Knowledge: The company\'s processes now live in systems, not people\'s heads. When someone leaves, the knowledge stays. When someone joins, they can get up to speed in weeks instead of months.',
        
        'Scalable Hiring: The ability to onboard reps quickly and effectively is a competitive advantage. Companies that can ramp reps faster can grow faster. This system turned hiring from a bottleneck into a growth lever.',
        
        'Cross-Functional Alignment: Marketing and sales stopped fighting because there was no longer ambiguity to fight about. Everyone knew what an MQL was, when it became an SQL, and who was responsible for what. That alignment showed up in the numbers.',
        
        'This lifecycle framework has been deployed at 3 scaling SaaS companies, consistently reducing onboarding time by 40-60%.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Database Validation & Audit',
        href: '/portfolio/database-validation'
      }}
      nextCase={{
        title: 'GTM Stack Integration',
        href: '/portfolio/gtm-integration'
      }}
    />
  );
}