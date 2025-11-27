import CaseStudy from '@/components/CaseStudy';

export default function LinkedInOutboundCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="LinkedIn Outbound Engine with SLA + Sequencing"
      category="Revenue Engine Building"
      label="Growth"
      myRole="Designed and built the complete outbound infrastructure—from HeyReach webhook integration to intent classification to SLA monitoring dashboards. Implemented the entire system solo over 5 weeks."
      
      // Context
      context="B2B professional services firm (management consulting, 40-80 employees) running LinkedIn-first outbound for their SDR team. Three SDRs managing 500+ active conversations across multiple campaigns targeting VP-level decision makers at mid-market companies."
      
      // Timeline
      timeline={{
        duration: '5 weeks',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo implementation',
        when: 'Q3 2024'
      }}
      
      // Problem
      problem={`The SDR team was drowning in LinkedIn inbox chaos. Messages were scattered across personal accounts, response times varied wildly (some prospects waited 3+ days for a reply), and high-intent replies were getting buried under connection requests and spam. The team had no visibility into which sequences were working and which prospects were actually engaging.`}
      
      breakingPoint="A VP of Operations at a $50M target account replied with 'Yes, let's talk next week' on a Thursday. The SDR didn't see it until the following Tuesday. By then, the prospect had gone dark—they'd already taken a call with a competitor who responded in 2 hours. That was a potential $200K deal lost to inbox neglect."
      
      stakes={[
        '$500K+ annual pipeline at risk from slow response times',
        'SDR burnout from manual inbox monitoring across multiple accounts',
        'No visibility into outbound performance (which messages worked? which sequences converted?)',
        'Scaling impossible—couldn\'t add more SDRs without the chaos multiplying',
        'Competitor win rate increasing due to faster response times'
      ]}
      
      // Solution
      solutionIntro="LinkedIn Outbound Command Center - Centralized system for managing all LinkedIn conversations with SLA enforcement and performance tracking:"
      
      solutionItems={[
        {
          title: 'HeyReach Webhook Integration + Central Inbox',
          description: 'Unified inbox aggregating all SDR conversations from multiple LinkedIn accounts.',
          details: [
            'Real-time ingestion of all LinkedIn messages via HeyReach webhooks',
            'Unified inbox aggregating all SDR conversations in one dashboard',
            'Automatic thread grouping by prospect and campaign',
            'Full conversation history with context from original outreach'
          ]
        },
        {
          title: 'Intent-Based Auto-Tagging + Smart Routing',
          description: 'AI-powered classification to prioritize high-intent prospects and route to the right SDR.',
          details: [
            'AI classification of reply intent (positive, negative, question, objection, meeting request)',
            'Priority scoring based on prospect title, company size, and engagement signals',
            'Auto-routing of high-intent replies to available SDR with fastest response time',
            'Escalation rules for C-level prospects or time-sensitive opportunities'
          ]
        },
        {
          title: 'SLA Monitor + Escalation Alerts',
          description: 'Automated SLA tracking with real-time alerts before breaches occur.',
          details: [
            'Response time SLAs by prospect tier (Tier 1: 1 hour, Tier 2: 4 hours, Tier 3: 24 hours)',
            'Real-time dashboard showing SLA compliance across team',
            'Slack alerts when SLA is at risk (30 min before breach)',
            'Manager escalation for breached SLAs with full context',
            'Daily digest of SLA performance by SDR'
          ]
        },
        {
          title: 'Sequence Performance Analytics',
          description: 'Complete visibility into what\'s working across all outbound campaigns.',
          details: [
            'Reply rate tracking by sequence, message variant, and SDR',
            'Conversion funnel: Connection → Reply → Positive Reply → Meeting Booked',
            'A/B test results with statistical significance indicators',
            'Best-performing message templates surfaced automatically',
            'Weekly performance reports with optimization recommendations'
          ]
        },
        {
          title: 'Meeting Booking Integration',
          description: 'Seamless handoff from positive reply to booked meeting.',
          details: [
            'One-click calendar link insertion for positive replies',
            'Automatic CRM contact creation with full LinkedIn context',
            'Meeting booked triggers sequence exit + success tracking',
            'Handoff notes auto-generated from conversation history'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Central Inbox Dashboard',
          description: 'Unified view of all LinkedIn conversations across 3 SDRs with intent tags and priority scores.',
          alt: 'LinkedIn outbound central inbox dashboard'
        },
        {
          title: 'SLA Compliance Monitor',
          description: 'Real-time SLA tracking showing response times by tier and at-risk conversations.',
          alt: 'SLA monitoring dashboard'
        },
        {
          title: 'Sequence Analytics',
          description: 'Performance breakdown by campaign showing reply rates, conversion rates, and A/B test results.',
          alt: 'Outbound sequence analytics'
        },
        {
          title: 'Intent Classification Flow',
          description: 'How incoming messages are classified and routed based on AI-detected intent.',
          alt: 'Intent classification workflow diagram'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'HeyReach webhooks can fire multiple times for the same message—needed deduplication logic to prevent duplicate notifications',
        'Intent classification had to be fast enough for real-time routing but accurate enough to not mis-route high-value prospects',
        'SLA calculations had to account for business hours only—a Friday 5pm message shouldn\'t breach Monday 9am',
        'Scaling the system to handle 500+ concurrent conversations without performance degradation',
        'Building analytics that showed meaningful patterns without overwhelming SDRs with data'
      ]}
      
      // Stack
      stack={[
        {
          category: 'LinkedIn Automation',
          tools: 'HeyReach for multi-account outbound + webhook events'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for webhook processing, routing logic, and integrations'
        },
        {
          category: 'Database',
          tools: 'PostgreSQL for conversation storage and analytics'
        },
        {
          category: 'Classification',
          tools: 'Claude API for intent classification and priority scoring'
        },
        {
          category: 'Alerting',
          tools: 'Slack API for SLA alerts and daily digests'
        },
        {
          category: 'CRM',
          tools: 'HubSpot for contact creation and pipeline tracking'
        },
        {
          category: 'Calendar',
          tools: 'Calendly integration for meeting booking'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Response Time Improvements',
          metrics: [
            {
              value: '87%',
              label: 'Faster average response time',
              context: '18 hours → 2.3 hours'
            },
            {
              value: '94%',
              label: 'SLA compliance rate',
              context: 'Up from 45%'
            },
            {
              value: '40%',
              label: 'Same-day after-hours responses',
              context: 'Via smart queuing (was 0%)'
            }
          ]
        },
        {
          title: 'Conversion Improvements',
          metrics: [
            {
              value: '+58%',
              label: 'Reply-to-meeting conversion',
              context: '12% → 19%'
            },
            {
              value: '<5%',
              label: 'Lead leakage rate',
              context: 'Down from 35%'
            },
            {
              value: '3x',
              label: 'SDR conversation capacity',
              context: '150 → 450 active conversations per rep'
            }
          ]
        },
        {
          title: 'Pipeline Impact',
          metrics: [
            {
              value: '+78%',
              label: 'Monthly pipeline generated',
              context: '$180K → $320K'
            },
            {
              value: '$890K',
              label: 'Attributed revenue (6 months)',
              context: 'From improved response times'
            },
            {
              value: '-43%',
              label: 'Cost per meeting',
              context: '$125 → $72'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "We went from losing deals to slow response times to being the fastest vendor to respond. The system paid for itself in the first month when we closed a deal that would have gone to a competitor.",
        author: "Marcus Chen",
        role: "VP of Sales Development"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Speed Wins Deals: In B2B outbound, the first vendor to respond wins 35-50% of the time. By getting response times under 2.5 hours, the team stopped losing winnable deals to faster competitors. The $200K deal that sparked this project? They won a similar account 3 weeks later because they responded in 47 minutes.',
        
        'Scalable Outbound: Before this system, adding another SDR meant adding more chaos. Now, the infrastructure handles the complexity—new reps plug into a system that tells them exactly who to respond to and when. The team went from 3 to 5 SDRs without any increase in management overhead.',
        
        'Data-Driven Optimization: For the first time, leadership could see which sequences actually worked. They killed 4 underperforming campaigns and doubled down on 2 that were generating 70% of meetings. That reallocation alone was worth $50K in efficiency gains.',
        
        'This pattern has been deployed for 2 additional B2B services firms with similar results (60-90% improvement in response times, 40-70% improvement in conversion rates).'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Closed-Loop Attribution System',
        href: '/portfolio/attribution-system'
      }}
      nextCase={{
        title: 'Sales Forecasting Rebuild',
        href: '/portfolio/sales-forecasting'
      }}
    />
  );
}