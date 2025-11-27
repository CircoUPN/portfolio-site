import CaseStudy from '@/components/CaseStudy';

export default function SalesForecastingCaseStudy() {
  return (
    <CaseStudy
    // Hero
      title="Sales Forecasting Rebuild + Stage-Health Scoring"
      category="Revenue Engine Building"
      label="Growth"
      myRole="Architected the complete forecasting overhaul—from stage definitions and exit criteria to the deal health scoring algorithm to variance tracking dashboards. Led the implementation with support from Salesforce admin for complex validation rules."
      
      // Context
      context="B2B SaaS company ($8M ARR, 60 employees) selling to mid-market companies with 90-120 day sales cycles. Sales team of 8 AEs plus 2 managers, using Salesforce as their CRM. Preparing for Series B and needed predictable revenue metrics for investor conversations."
      
      // Timeline
      timeline={{
        duration: '6 weeks',
        role: 'Lead Architect',
        teamSize: 'Solo with Salesforce admin support',
        when: 'Q1 2024'
      }}
      
      // Problem
      problem={`The sales forecast was a fiction. Every Monday, the VP of Sales would pull together a number that was more wishful thinking than data. Deals sat in "Negotiation" for 6 months. Reps committed to deals that had gone dark weeks ago. The board meeting forecast was consistently off by 25-40%, making it impossible to plan hiring, marketing spend, or product roadmap.`}
      
      breakingPoint="Q3 forecast predicted $1.2M in new ARR. Actual closed: $740K. The 38% miss wasn't just embarrassing—it meant the company had over-hired based on expected revenue, burning runway faster than planned. The CEO told the VP of Sales: 'Fix forecasting or we're going to miss our Series B window.'"
      
      stakes={[
        'Series B at risk—investors don\'t fund companies that can\'t predict revenue',
        '$400K+ quarterly variance making financial planning impossible',
        'Pipeline bloated with "zombie deals" that would never close',
        'Sales managers couldn\'t coach effectively without visibility into deal health',
        'Board confidence eroding with every missed forecast'
      ]}
      
      // Solution
      solutionIntro="Predictive Forecasting System - Data-driven pipeline management with automated deal health scoring and forecast accuracy tracking:"
      
      solutionItems={[
        {
          title: 'Stage Exit Criteria + Automated Enforcement',
          description: 'Clear, measurable criteria preventing deals from advancing without validation.',
          details: [
            'Clear, measurable criteria for each pipeline stage (not just "verbal commit")',
            'Required fields that must be populated before stage advancement',
            'Automatic validation preventing invalid stage changes',
            'Time-in-stage limits with alerts for stalled deals',
            'Manager approval gates for deals above $50K'
          ]
        },
        {
          title: 'Deal Health Score Algorithm',
          description: 'Multi-factor scoring system that objectively measures deal quality.',
          details: [
            'Multi-factor scoring: engagement recency, stakeholder access, competitive intel, timeline clarity',
            'Velocity tracking: is this deal moving faster or slower than average for its size?',
            'Activity signals: email opens, meeting frequency, document views',
            'Champion strength: have we identified and validated the internal champion?',
            'Risk flags: budget not confirmed, decision-maker not engaged, timeline slipping'
          ]
        },
        {
          title: 'Pipeline Hygiene Automation',
          description: 'Automated systems to identify and resolve stalled or zombie deals.',
          details: [
            'Weekly automated review of all deals in pipeline >60 days',
            '"Zombie deal" identification: no activity in 21+ days while in active stage',
            'Automatic stage regression for deals failing health criteria',
            'Required "deal review" notes for any deal pushed from one quarter to next',
            'Monthly pipeline cleanup reminders with suggested actions'
          ]
        },
        {
          title: 'Forecast Rollup + Variance Tracking',
          description: 'Weighted forecasting with historical accuracy analysis.',
          details: [
            'Weighted pipeline based on stage AND deal health score',
            'Three forecast views: Best Case, Commit, Worst Case',
            'Historical accuracy tracking by rep, segment, and deal size',
            'Variance analysis: which deals missed and why?',
            'Trend lines showing forecast evolution over quarter'
          ]
        },
        {
          title: 'Manager Coaching Dashboard',
          description: 'Tools for sales managers to identify coaching opportunities.',
          details: [
            'Rep-level forecast accuracy scores',
            'Deal risk alerts surfaced for 1:1 conversations',
            'Win/loss pattern analysis by rep',
            'Suggested coaching actions based on pipeline gaps',
            'Competitive win rate tracking with battlecard recommendations'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Deal Health Score Dashboard',
          description: 'Pipeline view showing health scores, velocity indicators, and risk flags for each deal.',
          alt: 'Deal health scoring dashboard'
        },
        {
          title: 'Forecast Accuracy Tracking',
          description: 'Historical view of forecast vs. actual by quarter, showing improvement trend.',
          alt: 'Forecast accuracy trend chart'
        },
        {
          title: 'Stage Exit Criteria',
          description: 'Documentation of required criteria for each pipeline stage with validation rules.',
          alt: 'Stage exit criteria documentation'
        },
        {
          title: 'Manager Coaching View',
          description: 'Dashboard showing rep performance, deal risks, and suggested coaching actions.',
          alt: 'Sales manager coaching dashboard'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Getting buy-in from reps who saw stage criteria as "more admin work"—had to show how it helped them, not just management',
        'Deal health algorithm needed tuning—initial version flagged too many false positives, causing alert fatigue',
        'Historical data was messy—had to backfill and normalize 2 years of pipeline data for accurate benchmarks',
        'Balancing automation with sales judgment—system suggests, but shouldn\'t override rep\'s deal knowledge',
        'Forecast weighting required iterative calibration based on actual close rates by stage and score'
      ]}
      
      // Stack
      stack={[
        {
          category: 'CRM',
          tools: 'Salesforce with custom objects and validation rules'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for data processing and alert workflows'
        },
        {
          category: 'Scoring Engine',
          tools: 'Custom algorithm running in PostgreSQL'
        },
        {
          category: 'Activity Tracking',
          tools: 'Salesforce Activity + Outreach email integration'
        },
        {
          category: 'Alerting',
          tools: 'Slack for deal alerts and weekly digests'
        },
        {
          category: 'Reporting',
          tools: 'Salesforce dashboards + custom executive views'
        },
        {
          category: 'Documentation',
          tools: 'Notion for stage definitions and playbooks'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Forecast Accuracy',
          metrics: [
            {
              value: '±9%',
              label: 'Quarterly forecast variance',
              context: 'Improved from ±32%'
            },
            {
              value: '88%',
              label: 'Commit accuracy',
              context: 'Deals in "Commit" actually close (was 55%)'
            },
            {
              value: '52%',
              label: 'Best Case realization',
              context: 'Up from 25%'
            }
          ]
        },
        {
          title: 'Pipeline Health',
          metrics: [
            {
              value: '47 deals',
              label: 'Zombie deals resolved',
              context: '$2.1M in false pipeline removed'
            },
            {
              value: '-38%',
              label: 'Average time in stage',
              context: '34 days → 21 days'
            },
            {
              value: '3.4x',
              label: 'Pipeline coverage ratio',
              context: 'Up from 2.1x (healthier pipeline)'
            }
          ]
        },
        {
          title: 'Sales Efficiency',
          metrics: [
            {
              value: '24%',
              label: 'Win rate',
              context: 'Up from 18%'
            },
            {
              value: '89 days',
              label: 'Average deal cycle',
              context: 'Down from 118 days (25% faster)'
            },
            {
              value: '15%',
              label: 'Rep forecast variance',
              context: 'Down from 40%'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "We went from dreading board meetings to walking in confident. When we showed investors our forecast accuracy trend during Series B diligence, it was a major differentiator. They said most companies at our stage can't predict revenue this well.",
        author: "Jennifer Walsh",
        role: "VP of Sales"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Investor Confidence: The Series B process requires showing you understand your business. When the company could present forecast accuracy trends, deal velocity metrics, and pipeline health scores, investors saw a data-driven sales organization. The round closed at a higher valuation than initially targeted.',
        
        'Operational Clarity: When you can trust your forecast, you can plan everything else. Marketing knows how much pipeline to generate. Finance knows when to expect cash. HR knows when to hire. The forecasting system became the foundation for company-wide planning.',
        
        'Sales Culture Shift: Reps stopped sandbagging and stopped being overly optimistic. With objective deal health scores, the conversation changed from "I feel good about this deal" to "here\'s the data on why this deal is or isn\'t going to close." That objectivity made coaching more effective and forecasts more accurate.',
        
        'This forecasting framework has been adapted for 3 other B2B SaaS companies, with forecast accuracy improvements ranging from 50-70% depending on starting baseline.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'LinkedIn Outbound Engine',
        href: '/portfolio/linkedin-outbound'
      }}
      nextCase={{
        title: 'Full-Funnel Ads System',
        href: '/portfolio/full-funnel-ads'
      }}
    />
  );
}