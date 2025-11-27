import CaseStudy from '@/components/CaseStudy';

export default function KPICommandCenterCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Real-Time KPI Command Center for Multi-CRM Ops"
      category="Operational Efficiency + Intelligence Layer"
      label="Firefighting"
      myRole="Designed and built the complete data infrastructure—from ETL pipelines to KPI definitions to executive dashboards. Implemented the entire system solo, including anomaly detection algorithms and alerting logic."
      
      // Context
      context="Investment and property management group operating across multiple business lines: residential rentals, commercial properties, and investor relations. Each division used different systems—residential on AppFolio, commercial on custom spreadsheets, IR on HubSpot. Leadership had no unified view of business health."
      
      // Timeline
      timeline={{
        duration: '7 weeks',
        role: 'Lead Architect & Implementation',
        teamSize: 'Solo implementation',
        when: 'Q2 2024'
      }}
      
      // Problem
      problem={`Every Monday, the operations team spent 4+ hours pulling data from 5 different systems to create a weekly report for leadership. Numbers never matched because each system had different definitions. "Occupancy" meant something different in residential vs. commercial. "Pipeline" was calculated differently in each CRM. The CEO was making decisions based on week-old data that was already stale.`}
      
      breakingPoint="The CFO presented board numbers showing 94% occupancy. The VP of Property Management said it was 87%. Both were 'correct' based on their definitions—but the 7-point discrepancy represented $180K in annual revenue difference. The board lost confidence in all reported metrics, and the CEO mandated: 'Give me one source of truth or we're going to make expensive mistakes.'"
      
      stakes={[
        'Board confidence eroding due to inconsistent reporting',
        '$500K+ in potential bad decisions from wrong data',
        '20+ hours/week of manual reporting across team',
        'No early warning system for problems (issues discovered too late)',
        'Each division optimizing for their metrics, not company metrics'
      ]}
      
      // Solution
      solutionIntro="Unified KPI Command Center - Real-time business intelligence platform aggregating all operational data:"
      
      solutionItems={[
        {
          title: 'Central Data Warehouse',
          description: 'Single source of truth aggregating data from all business systems.',
          details: [
            'PostgreSQL database as single source of truth',
            'ETL pipelines from all source systems (AppFolio, HubSpot, spreadsheets, bank feeds)',
            'Standardized data models with consistent definitions',
            'Historical data backfill for trend analysis',
            'Automated data quality checks on every sync'
          ]
        },
        {
          title: 'KPI Definition Layer',
          description: 'Company-wide metric definitions eliminating ambiguity.',
          details: [
            'Company-wide metric definitions documented and enforced',
            'Occupancy: standardized calculation across all property types',
            'Pipeline: unified stages and conversion definitions',
            'CAC/LTV: consistent attribution across channels',
            'Revenue: recognized vs. collected vs. projected',
            '40+ KPIs with clear ownership and calculation logic'
          ]
        },
        {
          title: 'Real-Time Dashboard System',
          description: 'Role-based dashboards with live data refreshing every 15 minutes.',
          details: [
            'Executive dashboard: company health at a glance',
            'Division dashboards: residential, commercial, IR-specific views',
            'Role-based access: each user sees relevant metrics',
            'Mobile-friendly: CEO checks metrics from phone',
            'Refresh frequency: every 15 minutes for critical metrics'
          ]
        },
        {
          title: 'Automated Anomaly Detection + Alerts',
          description: 'Proactive alerting when metrics deviate from expected ranges.',
          details: [
            'Threshold alerts: occupancy drops below 90%, pipeline falls below $X',
            'Trend alerts: week-over-week changes exceeding normal variance',
            'Correlation alerts: leading indicators predicting problems',
            'Slack notifications for urgent issues',
            'Daily digest emails with key metrics and changes'
          ]
        },
        {
          title: 'Self-Service Reporting',
          description: 'Empowering teams to answer their own data questions.',
          details: [
            'Pre-built report templates for common questions',
            'Ad-hoc query capability for analysts',
            'Scheduled report delivery (weekly board pack automated)',
            'Export functionality for external sharing',
            'Drill-down from summary to detail'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Executive Dashboard',
          description: 'Company-wide health metrics with drill-down capability and trend indicators.',
          alt: 'Executive KPI dashboard'
        },
        {
          title: 'Anomaly Detection Alerts',
          description: 'Slack notification showing detected anomaly with context and suggested action.',
          alt: 'Anomaly alert notification'
        },
        {
          title: 'Data Architecture Diagram',
          description: 'ETL flow from source systems through warehouse to dashboards.',
          alt: 'Data architecture diagram'
        },
        {
          title: 'KPI Definition Documentation',
          description: 'Sample KPI definition showing calculation logic, ownership, and data sources.',
          alt: 'KPI definition documentation'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'AppFolio API rate limits required careful batching—couldn\'t just pull all data at once',
        'Normalizing "occupancy" across residential (unit-based) and commercial (sq ft-based) required weighted calculations',
        'Historical data had gaps—needed interpolation logic for trend analysis to work correctly',
        'Anomaly detection thresholds had to be tuned per metric—what\'s alarming for occupancy isn\'t alarming for pipeline',
        'Dashboard had to be fast despite pulling from multiple data sources—aggressive caching strategy required'
      ]}
      
      // Stack
      stack={[
        {
          category: 'Data Warehouse',
          tools: 'PostgreSQL (hosted on Supabase)'
        },
        {
          category: 'ETL/Orchestration',
          tools: 'n8n for all data pipelines'
        },
        {
          category: 'Source Systems',
          tools: 'AppFolio API, HubSpot API, Google Sheets, Plaid (banking)'
        },
        {
          category: 'Visualization',
          tools: 'Custom dashboards built with React + Recharts'
        },
        {
          category: 'Alerting',
          tools: 'Slack API + email via Resend'
        },
        {
          category: 'AI Layer',
          tools: 'Claude API for anomaly explanation and insight generation'
        },
        {
          category: 'Documentation',
          tools: 'Notion for KPI definitions and data dictionary'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Reporting Efficiency',
          metrics: [
            {
              value: '91%',
              label: 'Reduction in weekly reporting time',
              context: '22 hours → 2 hours'
            },
            {
              value: '15 min',
              label: 'Data freshness',
              context: 'Down from 7 days'
            },
            {
              value: 'Zero',
              label: 'Metric discrepancies',
              context: 'One definition, one number'
            }
          ]
        },
        {
          title: 'Decision Quality',
          metrics: [
            {
              value: 'Hours',
              label: 'Issue detection time',
              context: 'Down from weeks'
            },
            {
              value: '1 hour',
              label: 'Board prep time',
              context: 'Down from 8 hours (automated)'
            },
            {
              value: 'Minutes',
              label: 'Ad-hoc question resolution',
              context: 'Down from days'
            }
          ]
        },
        {
          title: 'Operational Improvements',
          metrics: [
            {
              value: '+2.3%',
              label: 'Occupancy optimization',
              context: 'Early warning on vacancies'
            },
            {
              value: '100%',
              label: 'Pipeline visibility',
              context: 'Up from 60% tracked'
            },
            {
              value: '±5%',
              label: 'Cash flow forecast variance',
              context: 'Down from ±15%'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "For the first time, I can answer board questions in real-time instead of saying 'let me get back to you.' The anomaly alerts caught a tenant payment issue 3 weeks before we would have found it in monthly reporting.",
        author: "Michael Torres",
        role: "CEO"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Single Source of Truth: When the CEO asks "how are we doing?" there\'s now one answer, not five. That clarity changed how the company operates—meetings became shorter, decisions became faster, and finger-pointing between divisions stopped.',
        
        'Proactive vs. Reactive: The anomaly detection system caught a commercial tenant payment issue 3 weeks before it would have been discovered in monthly reporting. That early warning allowed renegotiation instead of eviction, preserving a $40K/year lease.',
        
        'Scalable Operations: As the company grows (they\'ve since added 2 more properties), the dashboard automatically incorporates new data. The reporting infrastructure scales without adding headcount.',
        
        'This command center architecture has become the template for operational visibility across all client engagements.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Full-Funnel Ads System',
        href: '/portfolio/full-funnel-ads'
      }}
      nextCase={{
        title: 'Database Validation & Audit',
        href: '/portfolio/database-validation'
      }}
    />
  );
}