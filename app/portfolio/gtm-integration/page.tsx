import CaseStudy from '@/components/CaseStudy';

export default function GTMIntegrationCaseStudy() {
  return (
    <CaseStudy
    // Hero
      title="GTM Stack Integration: One Source of Truth"
      category="Operational Efficiency + Intelligence Layer"
      label="Firefighting"
      myRole="Designed and built the complete integration architecture—from system mapping to canonical data models to unified dashboards. Implemented all sync workflows and led the cross-team KPI alignment sessions."
      
      // Context
      context="Mid-market SaaS company ($25M ARR, 120 employees) with a sprawling tech stack accumulated over 5 years of growth. CRM (HubSpot), Customer Success platform (Gainsight), Product Analytics (Amplitude), Marketing Automation (Marketo), and Support (Zendesk)—all containing overlapping data, none of it synchronized. Every team had their own 'source of truth.'"
      
      // Timeline
      timeline={{
        duration: '8 weeks',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo with IT support for credentials',
        when: 'Q3 2024'
      }}
      
      // Problem
      problem={`Every Monday's leadership meeting devolved into the same argument: "Which number is right?" Marketing showed one MQL number, Sales showed another. Customer Success reported expansion revenue that didn't match Finance. Product showed feature adoption that CS couldn't find in their tool. Teams spent more time debating data than acting on it.`}
      
      breakingPoint="The board asked for customer health scores to evaluate churn risk. The CS team pulled from Gainsight: 450 'healthy' accounts. Product team pulled from Amplitude: 280 accounts with 'healthy' engagement. Support pulled from Zendesk: 380 accounts with 'low ticket volume.' Three wildly different answers, zero confidence in any of them. The CEO told the CRO: 'I can't run a company when nobody knows what's true.'"
      
      stakes={[
        'Board confidence eroding (can\'t answer basic questions)',
        'Every team defending their own numbers (politics over progress)',
        'Churn blind spots ($500K+ ARR at risk from unidentified unhealthy accounts)',
        '30+ hours/week across teams reconciling data',
        'Integration debt compounding (each new tool made it worse)'
      ]}
      
      // Solution
      solutionIntro="Unified GTM Data Architecture - Single source of truth with governed field mapping and cross-team KPI alignment:"
      
      solutionItems={[
        {
          title: 'Integration Map + Master Sync Architecture',
          description: 'Complete data flow documentation with conflict resolution rules.',
          details: [
            'Documented data flow diagram across all 5 systems',
            'Identified "system of record" for each data type',
            'Bi-directional sync where needed, one-way push where not',
            'Conflict resolution rules: which system wins in case of discrepancy',
            'Sync frequency by data type (real-time for critical, hourly for reference)'
          ]
        },
        {
          title: 'Canonical Object Model',
          description: 'Single definition of core business objects across all systems.',
          details: [
            'Single definition of "Account" across all systems',
            'Single definition of "Contact" with role tracking',
            'Single definition of "Opportunity" and "Customer"',
            'Field mapping documentation: "HubSpot.company_name = Gainsight.account_name = Amplitude.company"',
            'Master ID system: every record has one canonical ID across systems'
          ]
        },
        {
          title: 'Field Governance + Data Dictionary',
          description: 'Complete documentation of every field with ownership and rules.',
          details: [
            'Every field documented: definition, owner, system of record, sync rules',
            'Change management process: no field changes without documentation update',
            'Data steward assignments: who owns what data',
            'Quality rules: what constitutes valid data for each field',
            'Deprecation process: how to retire fields without breaking integrations'
          ]
        },
        {
          title: 'Cross-Team KPI Definitions',
          description: 'Unified metrics calculated the same way everywhere.',
          details: [
            'Customer Health Score: unified definition combining product, support, and CS signals',
            'MQL: single definition used by both marketing and sales',
            'Net Revenue Retention: calculated the same way in every report',
            'Time-to-Value: product and CS aligned on definition',
            '25+ KPIs documented with calculation logic and ownership'
          ]
        },
        {
          title: 'Synchronized Dashboard Layer',
          description: 'Executive and team dashboards pulling from unified data.',
          details: [
            'Executive dashboard pulling from unified data',
            'Team dashboards using same underlying calculations',
            'Board reporting automated from single source',
            'Drill-down capability: summary to detail without system switching',
            'Automated data quality alerts when sync fails'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Integration Architecture Map',
          description: 'Visual diagram showing data flow between all 5 systems with sync direction and frequency.',
          alt: 'Integration architecture diagram'
        },
        {
          title: 'Canonical Object Model',
          description: 'Field mapping documentation showing how Account is defined across systems.',
          alt: 'Canonical data model'
        },
        {
          title: 'Unified Customer Health Dashboard',
          description: 'Executive view showing customer health combining product, support, and CS signals.',
          alt: 'Customer health dashboard'
        },
        {
          title: 'Data Dictionary Sample',
          description: 'Field documentation showing definition, owner, system of record, and sync rules.',
          alt: 'Data dictionary documentation'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Each system had different ID formats—built translation layer to maintain consistent canonical IDs',
        'Gainsight and HubSpot both wanted to be "source of truth" for accounts—had to negotiate which fields each owned',
        'Historical data had accumulated 5 years of drift—initial reconciliation took 3 weeks',
        'Amplitude\'s event-based model didn\'t map cleanly to CRM\'s record-based model—built aggregation logic',
        'Sync failures had to be handled gracefully—built retry logic and alert system for stuck syncs'
      ]}
      
      // Stack
      stack={[
        {
          category: 'Integration Layer',
          tools: 'n8n for orchestration + custom sync workflows'
        },
        {
          category: 'Data Warehouse',
          tools: 'PostgreSQL as canonical data store'
        },
        {
          category: 'Source Systems',
          tools: 'HubSpot, Gainsight, Amplitude, Marketo, Zendesk'
        },
        {
          category: 'Identity Resolution',
          tools: 'Custom matching logic for account/contact unification'
        },
        {
          category: 'Documentation',
          tools: 'Notion for data dictionary and governance policies'
        },
        {
          category: 'Monitoring',
          tools: 'Custom alerting for sync failures and data quality issues'
        },
        {
          category: 'Visualization',
          tools: 'Unified dashboards built on PostgreSQL views'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Data Consistency',
          metrics: [
            {
              value: '99%',
              label: 'Cross-system match rate',
              context: 'Up from 65%'
            },
            {
              value: 'Zero',
              label: 'KPI discrepancies',
              context: 'One number, everywhere'
            },
            {
              value: '100%',
              label: 'System of record compliance',
              context: 'Everyone uses the right source'
            }
          ]
        },
        {
          title: 'Operational Efficiency',
          metrics: [
            {
              value: '0 hours',
              label: 'Weekly data reconciliation',
              context: 'Down from 32 hours'
            },
            {
              value: '2 hours',
              label: 'Board report preparation',
              context: 'Down from 12 hours'
            },
            {
              value: 'Minutes',
              label: 'Cross-team data requests',
              context: 'Down from days'
            }
          ]
        },
        {
          title: 'Business Intelligence',
          metrics: [
            {
              value: '100%',
              label: 'Customer health visibility',
              context: 'Unified score across all signals'
            },
            {
              value: '45 accounts',
              label: 'At-risk accounts identified',
              context: '$1.2M ARR protected'
            },
            {
              value: '+60%',
              label: 'Expansion targeting improvement',
              context: 'Better upsell identification'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "For the first time in 3 years, we had a leadership meeting without arguing about whose data was right. We actually talked about strategy instead of spreadsheets. The unified customer health score alone justified the entire project.",
        author: "Thomas Wright",
        role: "CRO"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'End the Data Wars: When everyone trusts the data, meetings become productive. The company went from spending half of every leadership meeting arguing about metrics to spending that time on strategy and execution.',
        
        'Unified Customer View: For the first time, the company could see the full customer picture. Product engagement + support tickets + CS touchpoints + revenue data = actual customer health. That visibility protected $1.2M in ARR that would have churned unnoticed.',
        
        'Foundation for AI: The unified data architecture became the foundation for AI/ML initiatives. You can\'t train models on inconsistent data. This integration work enabled the company to implement predictive churn scoring 6 months later.',
        
        'This integration pattern has been adapted for 2 other mid-market companies, with data reconciliation time consistently dropping by 90%+.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Lead Lifecycle Autopilot',
        href: '/portfolio/lead-lifecycle'
      }}
    />
  );
}