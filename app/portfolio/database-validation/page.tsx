import CaseStudy from '@/components/CaseStudy';

export default function DatabaseValidationCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Database Validation & Audit Guardrails"
      category="Operational Efficiency + Intelligence Layer"
      label="Firefighting"
      myRole="Designed and built the complete data quality infrastructure—from validation rules to deduplication algorithms to audit logging. Implemented the entire system solo and led the initial data cleanup effort."
      
      // Context
      context="B2B SaaS company ($12M ARR, 80 employees) with a CRM that had become a data swamp. Five years of lead imports, integrations, and manual entry had created a mess: duplicate contacts, inconsistent formatting, missing required fields, and orphaned records. The sales and marketing teams had lost trust in the data."
      
      // Timeline
      timeline={{
        duration: '5 weeks',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo implementation',
        when: 'Q1 2024'
      }}
      
      // Problem
      problem={`Bad data was causing real business problems. Leads got routed to the wrong reps because territory fields were inconsistent. Marketing sent duplicate emails because the same person existed 3 times with different email variations. Reporting was unreliable because "MQL" meant different things depending on when the lead was created. The ops team spent 15+ hours/week on manual data cleanup that never seemed to end.`}
      
      breakingPoint="A major account (potential $150K deal) received the same outreach email from 3 different SDRs in the same week—because the contact existed in the CRM 3 times with slightly different company name spellings. The prospect's angry reply went viral internally: 'Get your act together before reaching out again.' The CRO demanded a permanent fix."
      
      stakes={[
        '$150K deal at risk (and reputation with a key target account)',
        '15+ hours/week of manual data cleanup (never-ending)',
        'Sales routing broken—wrong reps working wrong accounts',
        'Marketing deliverability declining (duplicates triggering spam filters)',
        'Compliance risk—GDPR deletion requests couldn\'t be fulfilled reliably',
        'Reporting useless—nobody trusted the numbers'
      ]}
      
      // Solution
      solutionIntro="Data Quality Infrastructure - Automated validation, deduplication, and audit system:"
      
      solutionItems={[
        {
          title: 'Ingest Validation Rules',
          description: 'Real-time validation catching errors at the point of entry.',
          details: [
            'Real-time validation on all data entry points (forms, imports, API, manual)',
            'Format standardization: phone numbers, addresses, company names',
            'Required field enforcement: no record created without minimum data',
            'Email validation: syntax check + deliverability verification',
            'Domain enrichment: auto-populate company data from domain'
          ]
        },
        {
          title: 'Automated Deduplication Engine',
          description: 'Intelligent matching algorithm that catches variations human eyes miss.',
          details: [
            'Fuzzy matching algorithm: catches "Acme Inc" vs "ACME, Inc." vs "Acme"',
            'Confidence scoring: high-confidence auto-merge, low-confidence human review',
            'Merge rules: which record wins for each field',
            'Activity preservation: all history maintained on surviving record',
            'Scheduled scans: weekly full-database duplicate check'
          ]
        },
        {
          title: 'Referential Integrity Enforcement',
          description: 'Ensuring relationships between records stay valid.',
          details: [
            'Contact-to-Company relationships validated',
            'Orphan record detection and resolution',
            'Cascade rules: what happens when parent record deleted',
            'Cross-object consistency: opportunity amounts match line items',
            'Territory assignment validation: every lead has valid territory'
          ]
        },
        {
          title: 'Audit Trail + Change Tracking',
          description: 'Complete history of every change for compliance and debugging.',
          details: [
            'Every field change logged with timestamp, user, old/new value',
            'Bulk operation tracking: who imported what, when',
            'Integration attribution: which system created/modified record',
            'Compliance-ready: full history for GDPR/CCPA requests',
            'Rollback capability: undo problematic bulk changes'
          ]
        },
        {
          title: 'Data Quality Dashboard + Error Queues',
          description: 'Visibility into data health with actionable error resolution.',
          details: [
            'Real-time data quality score (0-100)',
            'Error queue: records failing validation awaiting human review',
            'Trend tracking: is data quality improving or degrading?',
            'Source quality: which integrations/users create the most errors?',
            'SLA monitoring: error queue resolution times'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Data Quality Dashboard',
          description: 'Real-time quality score with breakdown by error type and source.',
          alt: 'Data quality dashboard'
        },
        {
          title: 'Deduplication Review Queue',
          description: 'Interface for reviewing low-confidence duplicate matches with merge preview.',
          alt: 'Duplicate review interface'
        },
        {
          title: 'Audit Trail View',
          description: 'Complete change history for a record showing all modifications.',
          alt: 'Audit trail interface'
        },
        {
          title: 'Validation Rule Configuration',
          description: 'Sample validation rules showing format requirements and error messages.',
          alt: 'Validation rule configuration'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Fuzzy matching is computationally expensive—had to optimize algorithm to handle 50K+ records without timeout',
        'Determining merge "winner" for conflicting fields required business rules that varied by field type',
        'Audit logging couldn\'t slow down normal operations—implemented async logging with queue',
        'Legacy data had so many edge cases—spent 2 weeks just handling historical data variations',
        'Validation rules had to be strict enough to catch errors but flexible enough not to block legitimate records'
      ]}
      
      // Stack
      stack={[
        {
          category: 'CRM',
          tools: 'HubSpot (existing)'
        },
        {
          category: 'Validation Layer',
          tools: 'n8n workflows with custom validation logic'
        },
        {
          category: 'Deduplication',
          tools: 'Custom matching algorithm in PostgreSQL'
        },
        {
          category: 'Enrichment',
          tools: 'Clearbit API for company data, NeverBounce for email validation'
        },
        {
          category: 'Audit Storage',
          tools: 'PostgreSQL for change logs'
        },
        {
          category: 'Dashboard',
          tools: 'Custom React dashboard for data quality monitoring'
        },
        {
          category: 'Alerting',
          tools: 'Slack for critical errors, email digests for quality reports'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Data Quality Improvements',
          metrics: [
            {
              value: '91%',
              label: 'Duplicate reduction',
              context: '23% → 2% duplicate rate'
            },
            {
              value: '83%',
              label: 'Invalid email reduction',
              context: '18% → 3%'
            },
            {
              value: '<1%',
              label: 'Missing required fields',
              context: 'Down from 35%'
            },
            {
              value: '94',
              label: 'Data quality score',
              context: 'Up from 52 (out of 100)'
            }
          ]
        },
        {
          title: 'Operational Efficiency',
          metrics: [
            {
              value: '87%',
              label: 'Reduction in manual cleanup time',
              context: '15 hrs/week → 2 hrs/week'
            },
            {
              value: '<24 hrs',
              label: 'Error queue resolution SLA',
              context: 'Previously took weeks'
            },
            {
              value: 'Minutes',
              label: 'Import processing time',
              context: 'Vs. hours of post-import cleanup'
            }
          ]
        },
        {
          title: 'Business Impact',
          metrics: [
            {
              value: '100%',
              label: 'Lead routing accuracy',
              context: 'Correct rep gets correct lead'
            },
            {
              value: '96%',
              label: 'Email deliverability',
              context: 'Up from 82%'
            },
            {
              value: '$200K+',
              label: 'Estimated revenue protected',
              context: 'From routing and duplicate fixes'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "We recovered the $150K deal after sending a personalized apology showing we'd fixed the problem. More importantly, we stopped embarrassing ourselves. Our reps now trust the data they're working with.",
        author: "Rachel Kim",
        role: "CRO"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Trust in Data: When sales, marketing, and leadership all trust the CRM data, everything works better. Meetings stop being about "which number is right" and start being about "what do we do about this."',
        
        'Compliance Foundation: GDPR and CCPA require knowing where personal data lives and being able to delete it on request. Without clean data, compliance is impossible. The audit trail made the company actually compliant rather than hoping for the best.',
        
        'Scalable Foundation: Every automation, every integration, every report depends on data quality. Fixing the foundation meant everything built on top of it actually worked. The company could finally trust their automations because they could trust their data.',
        
        'This data quality framework has been implemented at 4 companies, with duplicate reduction ranging from 80-95% depending on initial data state.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'KPI Command Center',
        href: '/portfolio/kpi-command-center'
      }}
      nextCase={{
        title: 'Lead Lifecycle Autopilot',
        href: '/portfolio/lead-lifecycle'
      }}
    />
  );
}