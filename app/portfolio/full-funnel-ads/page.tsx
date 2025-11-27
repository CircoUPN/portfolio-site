import CaseStudy from '@/components/CaseStudy';

export default function FullFunnelAdsCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="Full-Funnel Ads → CRM → Sales Enablement System"
      category="Revenue Engine Building"
      label="Growth"
      myRole="Built the complete investor acquisition system end-to-end—paid media setup, landing pages, CRM automation, lifecycle management, and retargeting integration. Managed ongoing optimization for 6 months post-launch."
      
      // Context
      context="Real estate investment group expanding from 2 markets to 5 markets simultaneously. Running paid acquisition (Google Ads, Meta) to generate investor leads for syndication deals. Team of 3 handling investor relations, with no dedicated marketing ops person."
      
      // Timeline
      timeline={{
        duration: '8 weeks',
        role: 'Lead Architect & Ongoing Optimization',
        teamSize: 'Solo implementation',
        when: 'Q2-Q3 2024'
      }}
      
      // Problem
      problem={`Ads were generating leads, but everything after the click was broken. Leads came in through landing pages, sat in a spreadsheet, got manually copied to the CRM (sometimes), and maybe got a follow-up call (if someone remembered). There was no visibility into which campaigns drove actual investors vs. tire-kickers. The expansion into 3 new markets meant 3x the lead volume with the same broken process.`}
      
      breakingPoint="A $250K investor submitted interest through a Facebook ad on a Thursday. The form submission sat in a spreadsheet. Nobody called until the following Wednesday. By then, the investor had committed capital to a competing syndication. Post-mortem revealed this wasn't isolated—they were losing 30-40% of high-intent leads to slow follow-up."
      
      stakes={[
        '$2M+ potential investment capital at risk from lead leakage',
        'New market expansion dependent on scalable lead handling',
        'Zero attribution visibility (which campaigns actually produced investors?)',
        'Team capacity maxed out with manual processes',
        'Competitors with better systems winning the same leads'
      ]}
      
      // Solution
      solutionIntro="Integrated Investor Acquisition System - End-to-end pipeline from ad click to investment commitment:"
      
      solutionItems={[
        {
          title: 'Paid Media Architecture + Conversion Tracking',
          description: 'Structured campaigns with full-funnel tracking from click to closed investment.',
          details: [
            'Google Ads campaigns by market and investment type',
            'Meta campaigns with lookalike audiences from existing investors',
            'Proper conversion tracking: form submit, call scheduled, investment committed',
            'UTM structure enabling full-funnel attribution',
            'Budget pacing alerts to prevent over/under-spend'
          ]
        },
        {
          title: 'Landing Page + Lead Magnet System',
          description: 'Market-specific landing pages optimized for investor conversion.',
          details: [
            'Market-specific landing pages with localized proof points',
            'Lead magnets: Investment guides, market reports, deal teasers',
            'Progressive profiling: capture more data over multiple touchpoints',
            'Mobile-optimized forms with 3-field initial capture',
            'A/B testing infrastructure for headline and CTA optimization'
          ]
        },
        {
          title: 'CRM Automation + Lead Routing',
          description: 'Instant lead capture with intelligent routing and SLA assignment.',
          details: [
            'Instant lead creation in CRM (no spreadsheet middleman)',
            'Lead scoring based on: accreditation status, investment capacity, timeline',
            'Auto-routing to appropriate IR team member by market/deal type',
            'SLA assignment: Hot leads get called within 1 hour',
            'Nurture sequence enrollment for leads not ready to talk'
          ]
        },
        {
          title: 'Lifecycle Stage Management',
          description: 'Clear investor journey from first touch to committed capital.',
          details: [
            'Clear stages: New → Qualified → Discovery Call → Due Diligence → Committed',
            'Automated stage progression based on activities',
            'Stage-appropriate content delivery (deck, financials, legal docs)',
            'Reminder sequences for stalled opportunities',
            'Re-engagement campaigns for cold leads'
          ]
        },
        {
          title: 'Retargeting + Nurture Integration',
          description: 'Lifecycle-aware retargeting and email nurture sequences.',
          details: [
            'CRM lifecycle stage synced to ad platforms',
            'Stage-specific retargeting (awareness for new, social proof for consideration, urgency for decision)',
            'Email nurture sequences by investor persona',
            'Webinar invitation automation for education stage',
            'Investment opportunity alerts for qualified investors'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'Campaign Attribution Dashboard',
          description: 'Full-funnel view showing ad spend to committed capital by campaign and market.',
          alt: 'Campaign attribution dashboard'
        },
        {
          title: 'Investor Lifecycle Funnel',
          description: 'Conversion rates at each stage with bottleneck identification.',
          alt: 'Investor lifecycle funnel'
        },
        {
          title: 'Landing Page A/B Results',
          description: 'Test results showing winning variants and conversion improvements.',
          alt: 'Landing page A/B test results'
        },
        {
          title: 'Lead Routing Workflow',
          description: 'Automated routing logic showing how leads flow to the right IR team member.',
          alt: 'Lead routing automation workflow'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Meta Conversions API implementation was tricky—needed server-side tracking for accurate attribution post-iOS14',
        'Lead scoring had to balance investment capacity (want high) with timeline (want soon)—built weighted model',
        'Landing pages needed to load fast for paid traffic but also look premium for high-net-worth investors',
        'CRM automation couldn\'t feel robotic to sophisticated investors—personalization was critical',
        'Retargeting frequency caps required careful tuning to avoid annoying prospects while staying top-of-mind'
      ]}
      
      // Stack
      stack={[
        {
          category: 'Paid Media',
          tools: 'Google Ads, Meta Ads Manager'
        },
        {
          category: 'Landing Pages',
          tools: 'Next.js (custom-built for fast load times)'
        },
        {
          category: 'CRM',
          tools: 'HubSpot (marketing automation capabilities)'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for lead routing and cross-platform sync'
        },
        {
          category: 'Email',
          tools: 'HubSpot email with custom templates'
        },
        {
          category: 'Tracking',
          tools: 'GA4, HubSpot tracking, custom UTM parsing'
        },
        {
          category: 'Retargeting',
          tools: 'Meta Pixel, Google Ads remarketing'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Advertising Efficiency',
          metrics: [
            {
              value: '4.8x',
              label: 'ROAS across all campaigns',
              context: 'Up from 2.1x'
            },
            {
              value: '-66%',
              label: 'Cost per qualified lead',
              context: '$185 → $62'
            },
            {
              value: '+75%',
              label: 'Landing page conversion',
              context: '8% → 14% from A/B testing'
            }
          ]
        },
        {
          title: 'Lead Management',
          metrics: [
            {
              value: '47 min',
              label: 'Average lead response time',
              context: 'Down from 4.2 days'
            },
            {
              value: '<3%',
              label: 'Lead leakage rate',
              context: 'Down from 35%'
            },
            {
              value: '11%',
              label: 'Nurture-to-qualified conversion',
              context: 'Up from 4%'
            }
          ]
        },
        {
          title: 'Pipeline Results',
          metrics: [
            {
              value: '4x',
              label: 'Monthly qualified leads',
              context: '45 → 180 from same budget'
            },
            {
              value: '58/month',
              label: 'Discovery calls scheduled',
              context: 'Up from 12/month'
            },
            {
              value: '$3.8M/month',
              label: 'Investment commitments',
              context: 'Up from $1.2M (digital channels)'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "We went from losing investors to spreadsheet chaos to having a system that works while we sleep. The 3-market expansion would have been impossible with our old process. Now we're looking at 2 more markets next year.",
        author: "David Park",
        role: "Managing Partner"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Scalable Expansion: The system handled the 3-market expansion without breaking. What would have been chaos with spreadsheets became a smooth process where leads flowed automatically to the right people with the right follow-up.',
        
        'Capital Efficiency: With clear attribution, the team could see that Google Ads were generating 3x the committed capital per dollar compared to Meta for certain deal types. That insight shifted $30K/month in budget to higher-performing channels.',
        
        'Competitive Advantage: In real estate syndication, the sponsor who responds first often wins the investor. Speed-to-lead became a differentiator—investors commented that the response time and professionalism exceeded competitors.',
        
        'This full-funnel system generated $8.2M in attributed investment commitments in the first 12 months of operation.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Sales Forecasting Rebuild',
        href: '/portfolio/sales-forecasting'
      }}
      nextCase={{
        title: 'KPI Command Center',
        href: '/portfolio/kpi-command-center'
      }}
    />
  );
}