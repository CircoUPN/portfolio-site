import Container from './Container';
import Section from './Section';
import Button from './Button';

interface Metric {
  label: string;
  value: string;
  context?: string;
}

interface SolutionItem {
  title: string;
  description: string;
  details: string[];
}

interface CaseStudyProps {
  // Hero
  title: string;
  category: 'Revenue Engine Building' | 'Operational Efficiency + Intelligence Layer';
  label: 'Firefighting' | 'Growth';
  myRole?: string;
  
  // Context
  context: string;
  
  // Timeline & Scope (NEW)
  timeline?: {
    duration: string;
    role: string;
    teamSize: string;
    when: string;
  };
  
  // Problem
  problem: string;
  breakingPoint?: string;
  stakes: string[];
  
  // Solution
  solutionIntro: string;
  solutionItems: SolutionItem[];
  
  // Visual Proof (NEW)
  images?: {
    title: string;
    description: string;
    alt: string;
  }[];
  
  // Technical Challenges (NEW)
  challenges?: string[];
  
  // Stack
  stack: {
    category: string;
    tools: string;
  }[];
  
  // Outcomes
  outcomeSections: {
    title: string;
    metrics: Metric[];
  }[];
  
  // Testimonial (NEW)
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  
  // Why It Mattered
  whyItMattered: string[];
  
  // Navigation
  prevCase?: { title: string; href: string };
  nextCase?: { title: string; href: string };
}

export default function CaseStudy({
  title,
  category,
  label,
  myRole,
  context,
  timeline,
  problem,
  breakingPoint,
  stakes,
  solutionIntro,
  solutionItems,
  images,
  challenges,
  stack,
  outcomeSections,
  testimonial,
  whyItMattered,
  prevCase,
  nextCase,
}: CaseStudyProps) {
  // Badge color based on label
  const badgeColor = label === 'Firefighting' 
    ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
    : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400';

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-12">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <a 
              href="/portfolio" 
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              ← Back to Portfolio
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6">
            {title}
          </h1>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {/* Label Badge */}
            <div className={`px-4 py-2 rounded-full border-2 ${badgeColor} font-medium text-sm flex items-center gap-2`}>
              <span>{label === 'Firefighting' ? '🔥' : '📈'}</span>
              <span>{label} Mode</span>
            </div>

            {/* Category Badge */}
            <div className="px-4 py-2 rounded-full border-2 border-slate-600 bg-slate-800 text-slate-300 font-medium text-sm">
              {category}
            </div>
          </div>

          {/* My Role (if provided) */}
          {myRole && (
            <div className="p-4 rounded-lg border-2 border-cyan-500/30 bg-cyan-500/5 max-w-2xl">
              <p className="text-sm text-cyan-300">
                <span className="font-bold">My Role:</span> {myRole}
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Context Section */}
      <Section background="alternate" className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            Client / Context
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {context}
          </p>

          {/* Timeline & Scope (if provided) */}
          {timeline && (
            <div className="mt-8 p-6 rounded-lg border-2 border-violet-500/30 bg-violet-500/5">
              <h3 className="text-lg font-bold text-violet-400 mb-4">Project Timeline & Scope</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-400">Duration</p>
                  <p className="text-slate-200 font-medium">{timeline.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Your Role</p>
                  <p className="text-slate-200 font-medium">{timeline.role}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Team Size</p>
                  <p className="text-slate-200 font-medium">{timeline.teamSize}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">When</p>
                  <p className="text-slate-200 font-medium">{timeline.when}</p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Problem Section */}
      <Section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            The Problem
          </h2>
          
          <div className="space-y-6">
            {/* Problem Description */}
            <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
              {problem}
            </p>

            {/* Breaking Point (if provided) */}
            {breakingPoint && (
              <div className="p-6 rounded-lg border-2 border-red-500/30 bg-red-500/5">
                <p className="text-lg text-red-300 leading-relaxed font-medium">
                  <span className="font-bold">The breaking point:</span> {breakingPoint}
                </p>
              </div>
            )}

            {/* Stakes Callout */}
            <div className="p-6 rounded-lg border-2 border-slate-700 bg-slate-800/50">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Stakes:</h3>
              <ul className="space-y-3">
                {stakes.map((stake, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">⚠️</span>
                    <span className="text-slate-300">{stake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section background="alternate" className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            Solution
          </h2>
          
          {/* Solution Intro */}
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {solutionIntro}
          </p>

          {/* Solution Items */}
          <div className="space-y-8">
            {solutionItems.map((item, index) => (
              <div key={index} className="p-6 rounded-lg border-2 border-slate-700 bg-slate-800/50">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-slate-300 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-slate-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Visual Proof Section (if provided) */}
      {images && images.length > 0 && (
        <Section className="py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
              Visual Proof
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div key={index} className="border-2 border-slate-700 rounded-lg overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="aspect-video bg-slate-800 flex items-center justify-center border-b-2 border-slate-700">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-slate-400 text-sm">
                        [Image Placeholder: {image.title}]
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-800/50">
                    <h3 className="text-lg font-bold text-slate-200 mb-2">{image.title}</h3>
                    <p className="text-slate-400 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Technical Challenges Section (if provided) */}
      {challenges && challenges.length > 0 && (
        <Section background="alternate" className="py-12">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
              Technical Challenges
            </h2>
            <div className="p-6 rounded-lg border-2 border-amber-500/30 bg-amber-500/5">
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">⚡</span>
                    <span className="text-slate-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      )}

      {/* Stack Section */}
      <Section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {stack.map((item, index) => (
              <div key={index} className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
                <h3 className="text-sm font-bold text-violet-400 mb-2">
                  {item.category}
                </h3>
                <p className="text-slate-300 text-sm">
                  {item.tools}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes Section */}
      <Section background="alternate" className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            Outcomes
          </h2>
          
          <div className="space-y-12">
            {outcomeSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-bold text-cyan-400 mb-6">
                  {section.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.metrics.map((metric, metricIndex) => (
                    <div 
                      key={metricIndex}
                      className="p-6 rounded-lg border-2 border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-slate-300 font-medium mb-2">
                        {metric.label}
                      </div>
                      {metric.context && (
                        <div className="text-slate-400 text-sm">
                          {metric.context}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial Section (if provided) */}
      {testimonial && (
        <Section className="py-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-lg border-2 border-green-500/30 bg-green-500/5">
                <div className="text-4xl text-green-400 mb-4">"</div>
                <p className="text-xl text-slate-200 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <p className="text-slate-200 font-bold">{testimonial.author}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Why It Mattered Section */}
      <Section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6">
            Why It Mattered
          </h2>
          
          <div className="space-y-6">
            {whyItMattered.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="alternate" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
              Want to See If This Applies to Your Situation?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Take the 3-minute assessment to discover your biggest infrastructure bottleneck and get personalized insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="large" href="/evaluation">
                Find Your Biggest Bottleneck
              </Button>
              <a 
                href="/contact" 
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm underline"
              >
                Or schedule a direct call
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Free • 3 minutes • Instant results
            </p>
          </div>
        </Container>
      </Section>

      {/* Navigation Section */}
      {(prevCase || nextCase) && (
        <Section className="py-12">
          <Container>
            <div className="flex flex-col sm:flex-row justify-between gap-6 border-t border-slate-700 pt-8">
              {/* Previous Case */}
              <div className="flex-1">
                {prevCase ? (
                  <a 
                    href={prevCase.href}
                    className="block group"
                  >
                    <div className="text-sm text-slate-500 mb-2">← Previous Case Study</div>
                    <div className="text-lg text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {prevCase.title}
                    </div>
                  </a>
                ) : (
                  <div className="text-sm text-slate-600">No previous case study</div>
                )}
              </div>

              {/* Back to Portfolio */}
              <div className="flex items-center justify-center">
                <a 
                  href="/portfolio"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium px-4 py-2 border border-slate-700 rounded-lg hover:border-cyan-500/50"
                >
                  View All Case Studies
                </a>
              </div>

              {/* Next Case */}
              <div className="flex-1 text-right">
                {nextCase ? (
                  <a 
                    href={nextCase.href}
                    className="block group"
                  >
                    <div className="text-sm text-slate-500 mb-2">Next Case Study →</div>
                    <div className="text-lg text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {nextCase.title}
                    </div>
                  </a>
                ) : (
                  <div className="text-sm text-slate-600">No next case study</div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}