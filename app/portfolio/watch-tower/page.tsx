import CaseStudy from '@/components/CaseStudy';

export default function WatchTowerCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Watch Tower: Revenue Operations Monitoring & Auto-Recovery"
      category="Operational Efficiency + Intelligence Layer"
      label="Firefighting"
      myRole="Architected and implemented the complete monitoring infrastructure—from health check workflows to alert routing logic to executive dashboards. Built the entire system solo over 6 weeks with engineering support for integrations."
      
      // Context
      context="AI/ML technology company running 50+ go-to-market automations daily across sales, marketing, and customer success teams. Fast-growth environment where a single broken workflow could cost thousands in lost pipeline."
      
      // Timeline
      timeline={{
        duration: '6 weeks',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo with engineering support for integrations',
        when: 'Q2 2024'
      }}
      
      // Problem
      problem={`Automations were failing silently. A broken Zapier webhook meant leads were not getting routed. A failed n8n workflow meant customer onboarding emails did not send. The team would discover these failures days later—after deals were lost, after customers complained, after revenue had already leaked out.

The VP of Revenue Operations was spending 10+ hours per week troubleshooting. Engineering was constantly pulled into "urgent automation fires." The team could not scale because nobody trusted the systems to actually work.`}
      
      breakingPoint="A $15K deal was lost because the lead notification workflow broke on a Friday afternoon and nobody knew until Monday morning. By then, the prospect had gone with a competitor who responded in 2 hours."
      
      stakes={[
        'Revenue loss from broken workflows (estimated $50K+ annually)',
        'Engineering time wasted on firefighting (10-15 hours/week)',
        'Team velocity killed by lack of trust in automation',
        'Customer experience damaged by system failures'
      ]}
      
      // Solution
      solutionIntro="Watch Tower Monitoring System - Comprehensive infrastructure monitoring across the entire revenue operations stack:"
      
      solutionItems={[
        {
          title: 'Hourly Health Checks',
          description: 'Proactive monitoring of every critical workflow to catch failures before they impact revenue.',
          details: [
            'Automated tests of every critical workflow (sales, marketing, CS)',
            'Synthetic transactions to verify end-to-end functionality',
            'Database checks for data integrity and sync status',
            'API connection validation for all integrated systems'
          ]
        },
        {
          title: 'Intelligent Error Detection & Root Cause Analysis',
          description: 'Real-time error detection with automatic categorization and historical pattern analysis.',
          details: [
            'Real-time error logging with contextual data capture',
            'Automatic categorization by severity and affected system',
            'Root cause identification (API timeout vs. logic error vs. data issue)',
            'Historical pattern analysis to predict potential failures'
          ]
        },
        {
          title: 'Severity-Based Alert Routing',
          description: 'Smart alerting system that routes notifications based on urgency and impact.',
          details: [
            'P0 (revenue-critical): Slack + SMS + PagerDuty to on-call engineer',
            'P1 (customer-facing): Slack to ops team, escalation if not acknowledged',
            'P2 (internal workflows): Daily digest with action items',
            'P3 (monitoring/logging): Weekly report for proactive maintenance'
          ]
        },
        {
          title: 'Automated Recovery Workflows',
          description: 'Self-healing systems that automatically recover from common failure patterns.',
          details: [
            'Auto-retry with exponential backoff for transient failures',
            'Fallback routing (primary CRM down → route to backup system)',
            'Data queue and replay for failed transactions',
            'Automatic ticket creation with full diagnostic context'
          ]
        },
        {
          title: 'Executive Dashboard for System Reliability',
          description: 'Real-time visibility into system health for leadership and ops teams.',
          details: [
            'Real-time view of all workflow health across 50+ automations',
            'Uptime metrics per workflow and per business function',
            'MTTR (Mean Time To Recovery) tracking',
            'Trend analysis showing improvement over time',
            'Business impact estimation (revenue protected, time saved)'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Executive Dashboard',
          description: 'Real-time monitoring dashboard showing workflow health across all 50+ automations with uptime metrics and business impact.',
          alt: 'Watch Tower executive dashboard showing system health'
        },
        {
          title: 'Alert Routing System',
          description: 'Severity-based alert routing in action - showing how P0 alerts trigger immediate Slack/SMS notifications while P2 alerts go to daily digest.',
          alt: 'Alert routing configuration showing severity levels'
        },
        {
          title: 'Automated Recovery',
          description: 'Example of automated recovery workflow with exponential backoff and fallback routing when primary system fails.',
          alt: 'Recovery workflow diagram'
        },
        {
          title: 'System Architecture',
          description: 'Complete architecture diagram showing how Watch Tower monitors workflows, detects errors, routes alerts, and triggers recovery.',
          alt: 'Watch Tower system architecture diagram'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Had to build retry logic that would not cause cascade failures - if one system is down, auto-retries can overwhelm it when it comes back up',
        'Alert fatigue risk - needed intelligent severity routing so ops team trusts the alerts instead of ignoring them',
        'Dashboard had to work for both technical ops (need raw data) and executives (need business impact metrics)',
        'Balancing monitoring frequency vs. API rate limits across 10+ integrated platforms',
        'Building recovery workflows that could handle edge cases without requiring manual intervention'
      ]}
      
      // Stack
      stack={[
        {
          category: 'Monitoring',
          tools: 'n8n orchestration + custom health check workflows'
        },
        {
          category: 'Data Layer',
          tools: 'PostgreSQL for error logging and metrics storage'
        },
        {
          category: 'Alerting',
          tools: 'Slack API + custom alert routing logic'
        },
        {
          category: 'Integrations',
          tools: 'Zapier, n8n, GoHighLevel, HubSpot, Close CRM APIs'
        },
        {
          category: 'Dashboard',
          tools: 'PostgreSQL → n8n ETL → real-time dashboard'
        },
        {
          category: 'Recovery',
          tools: 'n8n error handling + retry logic + fallback workflows'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'System Reliability',
          metrics: [
            {
              value: '85%',
              label: 'Reduction in automation failures',
              context: 'From ~15% failure rate to ~2%'
            },
            {
              value: '98%',
              label: 'Successful workflow completion rate',
              context: 'Up from 75%'
            },
            {
              value: 'Days → Minutes',
              label: 'Mean time to detection',
              context: 'Via proactive alerts'
            },
            {
              value: '90%',
              label: 'Reduction in troubleshooting time',
              context: 'From hours per incident to minutes'
            }
          ]
        },
        {
          title: 'Business Impact',
          metrics: [
            {
              value: '$50K+',
              label: 'Revenue loss prevented',
              context: 'Estimated annual savings from broken workflow prevention'
            },
            {
              value: '10+ hours/week',
              label: 'Engineering time reclaimed',
              context: 'Previously spent firefighting'
            },
            {
              value: 'Near-zero',
              label: 'Customer impact from failures',
              context: 'Reduced customer complaints and churn risk'
            },
            {
              value: '20 → 50+',
              label: 'Workflow scaling capacity',
              context: 'Without adding headcount'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "Watch Tower gave us confidence to scale. We went from checking systems manually every morning to just checking the dashboard when an alert fires. We can ship new automations knowing Watch Tower will tell us if they break.",
        author: "Sarah Chen",
        role: "VP of Revenue Operations"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Revenue Protection: When you are running a revenue operation at scale, every hour of downtime is money lost. A single broken lead routing workflow can cost $10K-50K in pipeline leakage before anyone notices. Watch Tower turns "hope it is working" into "know it is working."',
        
        'Operational Leverage: The monitoring system allowed the ops team to scale from managing 20 workflows to 50+ without adding headcount. Instead of spending time checking if things work, they spend time building new capabilities.',
        
        'Risk Mitigation: In regulated industries or enterprise sales, system reliability is not optional—it is contractual. Watch Tower provides the audit trail and uptime guarantees needed for enterprise customers.',
        
        'This system is now the template deployed for every client with complex revenue operations.'
      ]}
      
      // Navigation
      nextCase={{
        title: 'AI-Powered SMS Leasing Agent',
        href: '/portfolio/sms-agent'
      }}
    />
  );
}