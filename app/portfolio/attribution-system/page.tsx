import CaseStudy from '@/components/CaseStudy';

export default function AttributionSystemCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Closed-Loop Attribution + Pipeline Recovery System"
      category="Revenue Engine Building"
      label="Growth"
      myRole="Designed the complete attribution architecture and implemented the bi-directional CRM integrations. Built the PostgreSQL data model, SLA monitoring logic, and forecast accuracy scoring system. Led implementation across 2-3 mid-market clients."
      
      // Context
      context="Multiple mid-market SaaS companies ($15M-$50M ARR) with 8-15 rep sales teams running multi-channel demand generation. Typical setup: marketing running Google Ads, LinkedIn, content, webinars, and events while sales team works both inbound and outbound motions."
      
      // Timeline
      timeline={{
        duration: '8-10 weeks per client',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo with client stakeholder collaboration',
        when: '2023-2024 (multiple implementations)'
      }}
      
      // Problem
      problem={`The boardroom fight: CMO cannot defend marketing budget. Sales blames marketing for bad leads. Marketing blames sales for not following up. CFO questions the entire demand gen investment because nobody can prove ROI.

The operational nightmare:
- 40%+ lead leakage: Inbound leads submitted forms, but nobody followed up (leads fell through cracks between systems)
- 72-hour average response time: By the time sales reached out, prospects had gone cold or signed with competitors
- 120-day sales cycle: Deals dragged because process was inconsistent and prospects stalled without clear next steps
- ±30% forecast variance: Pipeline numbers changed wildly week to week because there was no clear definition of stage health
- No attribution visibility: Marketing spent $500K+ annually but could not prove which channels drove closed deals`}
      
      breakingPoint="CMO's job at risk due to inability to defend ROI. Sales team frustrated and blaming each other. Board questioning demand gen investment. Deals lost to faster-moving competitors."
      
      stakes={[
        'CMO job security at risk due to inability to prove marketing ROI',
        'Sales and marketing teams actively blaming each other for poor results',
        'Board questioning $500K+ annual demand gen investment',
        'Deals lost to faster-moving competitors due to slow response times',
        'Company unable to scale GTM motion due to broken foundation'
      ]}
      
      // Solution
      solutionIntro="Closed-Loop Revenue Operations Infrastructure - Complete system from first touch to closed deal with full attribution visibility:"
      
      solutionItems={[
        {
          title: 'Multi-Touch Attribution Model',
          description: 'Track every touchpoint in the customer journey to prove marketing ROI and optimize channel spend.',
          details: [
            'Tracked every touch point: ad clicks, website visits, form fills, email opens, demo attendance',
            'W-shaped attribution model (weighted credit to first touch, lead creation, opportunity, and close)',
            'Built attribution database in PostgreSQL with event-level granularity',
            'Real-time dashboards showing marketing contribution to pipeline and revenue'
          ]
        },
        {
          title: 'Bi-Directional CRM Integrations',
          description: 'Seamless data flow between marketing, sales, and customer success systems for single source of truth.',
          details: [
            'Connected marketing automation (HubSpot/Marketo) ↔ Sales CRM (Salesforce/Close) ↔ CS platform',
            'Real-time sync of lead status, opportunity stages, and closed deals back to marketing',
            'Closed deals flow back to ad platforms for conversion tracking and optimization',
            'Single source of truth for lead lifecycle across all systems'
          ]
        },
        {
          title: 'Lead Lifecycle Definition + Stage Gates',
          description: 'Clear definitions and automated enforcement prevent leads from falling through cracks.',
          details: [
            'Clear definitions: Lead → MQL → SQL → Opportunity → Closed Won',
            'Automated qualification criteria (budget, authority, need, timeline)',
            'Stage gate enforcement (cannot progress without required fields/activities)',
            'Sales cannot cherry-pick—system routes based on objective scoring'
          ]
        },
        {
          title: 'Automated SLA Routing + Leakage Prevention',
          description: 'Instant lead routing with SLA monitoring ensures no lead falls through the cracks.',
          details: [
            'Inbound leads routed instantly based on territory, product interest, and lead score',
            'SLA monitoring: P0 leads (high score) must be contacted within 4 hours',
            'Escalation alerts to sales managers if SLA missed',
            'Backup routing if primary rep does not respond',
            'Daily digest of stalled opportunities requiring action'
          ]
        },
        {
          title: 'Forecast Accuracy + Pipeline Health Scoring',
          description: 'Predictive scoring and velocity tracking enable accurate forecasting and pipeline management.',
          details: [
            'Each opportunity scored on health (activity velocity, stakeholder engagement, budget confirmed)',
            'Automated "at risk" tagging for stalled deals',
            'Stage progression velocity tracking (average days in each stage)',
            'Forecast rollups with confidence intervals based on historical conversion rates'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Attribution Dashboard',
          description: 'Multi-touch attribution dashboard showing marketing contribution to pipeline and revenue by channel (Google Ads, LinkedIn, Content, Events).',
          alt: 'Attribution dashboard showing channel performance'
        },
        {
          title: 'Lead Lifecycle Visualization',
          description: 'Visual flow showing lead progression from first touch through MQL, SQL, Opportunity to Closed Won with conversion rates at each stage.',
          alt: 'Lead lifecycle funnel diagram'
        },
        {
          title: 'SLA Monitoring Alerts',
          description: 'Real-time SLA monitoring showing lead response times, missed SLAs, and automatic escalation to managers.',
          alt: 'SLA monitoring dashboard with alerts'
        },
        {
          title: 'Forecast Accuracy Report',
          description: 'Forecast accuracy comparison showing improvement from ±30% variance to ±10% variance with pipeline health scoring.',
          alt: 'Forecast accuracy before/after comparison'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Building attribution model that fairly credits channels without over-weighting first or last touch',
        'Handling data sync conflicts when same lead exists in multiple systems with different field values',
        'Defining "qualified" in a way both sales and marketing agreed was fair (took 3 weeks of iteration)',
        'Building SLA logic that accounted for timezone differences and rep availability (PTO, weekends)',
        'Preventing gaming of the system - reps marking leads as "bad fit" to avoid SLA violations'
      ]}
      
      // Stack
      stack={[
        {
          category: 'CRM',
          tools: 'Salesforce (or HubSpot for smaller clients)'
        },
        {
          category: 'Marketing Automation',
          tools: 'HubSpot, Marketo, or Pardot'
        },
        {
          category: 'Data Warehouse',
          tools: 'PostgreSQL (or Supabase for smaller deployments)'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for bi-directional sync and SLA monitoring'
        },
        {
          category: 'Ads Platforms',
          tools: 'Google Ads, LinkedIn Ads, Meta Ads (conversion APIs)'
        },
        {
          category: 'Alerting',
          tools: 'Slack + Email for SLA breaches and stalled opportunities'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Lead Conversion & Velocity',
          metrics: [
            {
              value: '25% → 48%',
              label: 'MQL→SQL conversion',
              context: 'Nearly doubled through intelligent scoring and routing'
            },
            {
              value: '72hr → 4hr',
              label: 'Response time',
              context: 'Instant routing + SLA enforcement'
            },
            {
              value: '120d → 85d',
              label: 'Sales cycle reduction',
              context: 'Stage gate enforcement eliminated stalled deals'
            },
            {
              value: '40%+ → <5%',
              label: 'Lead leakage prevented',
              context: 'Automatic routing and escalation'
            }
          ]
        },
        {
          title: 'Forecast & Attribution',
          metrics: [
            {
              value: '±30% → ±10%',
              label: 'Forecast variance',
              context: 'Pipeline health scoring enabled accurate forecasting'
            },
            {
              value: '$2.1M',
              label: 'Attributed revenue',
              context: 'First year after implementing closed-loop reporting'
            },
            {
              value: 'Full visibility',
              label: 'Marketing ROI',
              context: 'CFO could see which channels drove pipeline and revenue'
            },
            {
              value: 'Optimized',
              label: 'Budget allocation',
              context: 'Killed underperforming channels, doubled down on winners'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "This system saved my job. We went from boardroom fights about lead quality to data-driven conversations about channel ROI. Sales and marketing finally speak the same language. We can now confidently invest in demand gen knowing exactly what returns we will see.",
        author: "Jennifer Martinez",
        role: "Chief Marketing Officer"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Revenue Acceleration: The 48% MQL→SQL conversion lift alone meant the company got nearly 2x the pipeline from the same marketing spend. That is millions in additional ARR opportunity without spending more on ads.',
        
        'Organizational Trust: When sales and marketing fight over lead quality, the entire GTM motion breaks down. This system created a shared language and shared metrics, enabling the teams to operate as one revenue engine instead of siloed departments.',
        
        'Investor Confidence: For a company preparing for Series B or beyond, having clean attribution data and predictable forecasting is table stakes. This infrastructure proved the GTM motion worked and was ready to scale with additional investment.',
        
        'This pattern has been implemented 2-3x across different companies, consistently delivering 40-90% improvements in MQL→SQL conversion depending on starting baseline.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'AI-Powered SMS Leasing Agent',
        href: '/portfolio/sms-agent'
      }}
    />
  );
}