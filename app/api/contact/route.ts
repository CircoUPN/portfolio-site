import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Define the expected request body type
interface ContactFormData {
  name: string
  email: string
  company?: string
  inquiryType: string
  message: string
}

// Validation helper
function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Name validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Valid email is required')
  }

  // Inquiry type validation
  const validInquiryTypes = ['Client Project', 'Job Opportunity', 'General Inquiry']
  if (!data.inquiryType || !validInquiryTypes.includes(data.inquiryType)) {
    errors.push('Valid inquiry type is required')
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters')
  }
  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

// POST handler for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate form data
    const validation = validateContactForm(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      )
    }

    // Create Supabase client
    const supabase = await createClient()

    // Clean the data
    const email = body.email.toLowerCase().trim()
    const name = body.name.trim()
    const company = body.company?.trim() || null
    const message = body.message.trim()

    // Check if lead already exists
    const { data: existingLead } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
      .single()

    let leadId: string

    if (existingLead) {
      // Update existing lead
      leadId = existingLead.id

      await supabase
        .from('leads')
        .update({
          name: name,
          company: company,
          inquiry_type: body.inquiryType,
          has_contact_submission: true,
          last_activity_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('id', leadId)

    } else {
      // Create new lead
      const { data: newLead, error: leadError } = await supabase
        .from('leads')
        .insert({
          email: email,
          name: name,
          company: company,
          inquiry_type: body.inquiryType,
          source: 'contact_form',
          pipeline_stage: 'new',
          has_contact_submission: true,
        })
        .select('id')
        .single()

      if (leadError || !newLead) {
        console.error('Error creating lead:', leadError)
        return NextResponse.json(
          { error: 'Failed to save submission' },
          { status: 500 }
        )
      }

      leadId = newLead.id
    }

    // Create contact submission record
    const { error: submissionError } = await supabase
      .from('contact_submissions')
      .insert({
        lead_id: leadId,
        message: message,
      })

    if (submissionError) {
      console.error('Error creating submission:', submissionError)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    // Create activity record
    await supabase
      .from('activities')
      .insert({
        lead_id: leadId,
        activity_type: 'contact_form_submitted',
        description: `Contact form submitted: ${body.inquiryType}`,
        metadata: {
          inquiry_type: body.inquiryType,
          has_company: !!company,
          message_length: message.length,
        },
        created_by: 'system',
      })

    // Log for debugging (will be replaced by n8n notification later)
    console.log('New contact submission:', {
      leadId,
      name,
      email,
      inquiryType: body.inquiryType,
      isNewLead: !existingLead,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        leadId: leadId,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Disable other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}