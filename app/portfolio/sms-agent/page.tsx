import CaseStudy from '@/components/CaseStudy';

export default function SMSAgentCaseStudy() {
  return (
    <CaseStudy
      // Hero
      title="AI-Powered SMS Leasing Agent + Tour Scheduling Automation"
      category="Operational Efficiency + Intelligence Layer"
      label="Firefighting"
      myRole="Designed and built the complete AI conversation system—from natural language processing to calendar integration to lead scoring. Implemented for my own rental property business to prove ROI before offering as a service."
      
      // Context
      context="3-property rental portfolio in Texas (Hacienda Heights, The Flats, Norton Place) - own property business running alongside consulting work. Each property generates 40-60 inbound SMS inquiries per month from prospecting tenants."
      
      // Timeline
      timeline={{
        duration: '4 weeks',
        role: 'Solo Implementation',
        teamSize: 'Solo (own business)',
        when: 'Q3 2024'
      }}
      
      // Problem
      problem={`Manual texting and qualification was eating 15-20 hours per week of staff time. Properties were managed remotely (from Mexico), so every SMS response required coordination. Leads were cooling off during response delays. Staff was spending time answering the same questions repeatedly (pet policy, pricing, availability, application process).

The VA could not handle evening/weekend inquiries, which is when most prospects were active.`}
      
      breakingPoint="Paying a VA $2K/month just to text prospects back, and still losing 30-40% of leads to slow response times."
      
      stakes={[
        '$24K/year in VA costs just for texting',
        '30-40% lead loss due to slow response (estimated $15K-20K in lost annual rent)',
        'Staff burnout from "always on" SMS management',
        'Inconsistent information given to prospects (different answers about pet policies, pricing)'
      ]}
      
      // Solution
      solutionIntro="AI SMS Leasing Agent System - Intelligent conversational automation handling entire lead lifecycle:"
      
      solutionItems={[
        {
          title: 'Natural Language Conversation Engine',
          description: 'AI-powered conversational interface that handles prospect inquiries 24/7 with human-like responses.',
          details: [
            'AI-powered responses to common questions (pricing, availability, pet policy, amenities)',
            'Context-aware conversations that adapt to prospect intent',
            'Handles objections and follow-up questions naturally',
            'Escalates complex questions to human only when necessary'
          ]
        },
        {
          title: 'Automated Qualification & Scoring',
          description: 'Intelligent lead scoring that prioritizes high-intent prospects and identifies disqualifiers early.',
          details: [
            'Extracts key info: move-in date, budget, household size, pets',
            'Scores lead quality based on fit with property criteria',
            'Prioritizes high-intent prospects for tour scheduling',
            'Flags disqualifying factors early (budget mismatch, banned dog breeds)'
          ]
        },
        {
          title: 'Seamless Tour Scheduling Integration',
          description: 'Automated tour booking directly integrated with calendar systems for instant confirmations.',
          details: [
            'Direct integration with Google Calendar for property showings',
            'Real-time availability checking across multiple properties',
            'Automated booking with instant confirmation SMS',
            'Reminder sequences (24hr before, 2hr before tour)',
            'One-click rescheduling if prospect needs to change time'
          ]
        },
        {
          title: 'Intelligent Escalation & Handoff',
          description: 'Smart routing of qualified leads to property managers with full conversation context.',
          details: [
            'Routes high-intent qualified leads to human for closing',
            'Provides full conversation context to property manager',
            'Telegram notifications for VIP prospects or urgent situations',
            'Human can seamlessly take over conversation at any point'
          ]
        },
        {
          title: 'Multi-Property Logic & Context Switching',
          description: 'Single system intelligently handles multiple properties with different policies and pricing.',
          details: [
            'Single system handles all 3 properties with different pricing/policies',
            'Automatically references correct property based on inbound number',
            'Cross-promotes similar units if preferred one is unavailable'
          ]
        }
      ]}
      
      // Visual Proof
      images={[
        {
          title: 'AI Conversation Example',
          description: 'Real SMS conversation showing natural language responses to prospect questions about pricing, pet policy, and tour scheduling.',
          alt: 'SMS conversation between AI agent and prospect'
        },
        {
          title: 'Lead Qualification Dashboard',
          description: 'Dashboard showing lead scoring in action - prospects automatically categorized by intent level and qualification status.',
          alt: 'Lead qualification scoring dashboard'
        },
        {
          title: 'Calendar Integration',
          description: 'Google Calendar integration showing automated tour bookings across multiple properties with confirmation workflows.',
          alt: 'Calendar view with automated tour bookings'
        },
        {
          title: 'ROI Before/After',
          description: 'Cost comparison showing $24K/year VA costs vs $1.2K/year AI system costs, plus lead recovery metrics.',
          alt: 'Cost savings and lead recovery metrics'
        }
      ]}
      
      // Technical Challenges
      challenges={[
        'Building natural language prompts that sound human without being too casual or too formal for rental market',
        'Handling edge cases like service animals (legally required) vs emotional support animals (not required) in pet policy',
        'Calendar conflict resolution when multiple prospects try to book the same time slot simultaneously',
        'Training AI to recognize and escalate urgent situations (plumbing emergency vs tour request)',
        'Multi-property context switching without confusing pricing or policies between properties'
      ]}
      
      // Stack
      stack={[
        {
          category: 'Conversation AI',
          tools: 'Custom LLM implementation with property-specific prompts'
        },
        {
          category: 'SMS Gateway',
          tools: 'Twilio for inbound/outbound messaging'
        },
        {
          category: 'Orchestration',
          tools: 'n8n for workflow logic and routing'
        },
        {
          category: 'Calendar',
          tools: 'Google Calendar API for tour scheduling'
        },
        {
          category: 'Database',
          tools: 'Supabase (PostgreSQL) for lead tracking and conversation history'
        },
        {
          category: 'Alerts',
          tools: 'Telegram bot for property manager notifications'
        }
      ]}
      
      // Outcomes
      outcomeSections={[
        {
          title: 'Operational Efficiency',
          metrics: [
            {
              value: '80%',
              label: 'Reduction in manual work',
              context: 'From 15-20 hours/week to 3-4 hours/week'
            },
            {
              value: '95%',
              label: 'Engagement rate',
              context: 'Prospects receive instant response 24/7'
            },
            {
              value: '3x faster',
              label: 'Qualification speed',
              context: 'Minutes vs. hours for back-and-forth texting'
            },
            {
              value: 'Zero',
              label: 'Missed inquiries',
              context: 'Evenings, weekends, holidays fully covered'
            }
          ]
        },
        {
          title: 'Business Impact',
          metrics: [
            {
              value: '$24K/year',
              label: 'VA cost eliminated',
              context: 'Replaced with ~$100/month in AI/SMS costs'
            },
            {
              value: '30-40%',
              label: 'Lead recovery',
              context: 'Faster response = more tours booked'
            },
            {
              value: '$15K-20K',
              label: 'Additional annual rent',
              context: 'Estimated from previously lost leads'
            },
            {
              value: '20:1',
              label: 'ROI multiple',
              context: 'Before counting revenue impact'
            }
          ]
        }
      ]}
      
      // Testimonial
      testimonial={{
        quote: "The AI agent responds instantly at any hour with accurate information. We went from missing 30-40% of leads to zero missed inquiries. Our prospects get better service, and we spend a fraction of the time managing it.",
        author: "Divack Vega",
        role: "Property Owner (own business case study)"
      }}
      
      // Why It Mattered
      whyItMattered={[
        'Cost Arbitrage: Replaced $24K/year in VA costs with $1,200/year in technology costs—a 20:1 ROI before even counting the revenue impact from faster response times.',
        
        'Revenue Recovery: In competitive rental markets, response speed is everything. The difference between a 2-minute response and a 2-hour response is often the difference between a signed lease and a lost prospect. The AI agent responds in seconds, 24/7.',
        
        'Scalability: The same system can handle 3 properties or 30 properties with minimal additional cost. It is infrastructure that scales with the business without linear cost increases.',
        
        'Proof of Concept: This was not built for a client—it was built for own business, proving the ROI before ever selling it as a service. Real money saved, real revenue recovered, real business impact.'
      ]}
      
      // Navigation
      prevCase={{
        title: 'Watch Tower: Revenue Operations Monitoring',
        href: '/portfolio/watch-tower'
      }}
      nextCase={{
        title: 'Closed-Loop Attribution System',
        href: '/portfolio/attribution-system'
      }}
    />
  );
}