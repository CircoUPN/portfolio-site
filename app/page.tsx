import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section>
        <Container>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            I build revenue systems that scale.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl">
            Growth Architect + RevOps Strategist + Market Analyst who combines 
            strategic thinking with hands-on implementation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="large">
              See My Work
            </Button>
            <Button variant="outline" size="large">
              Let's Talk
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testing Cards Section */}
      <Section background="alternate">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8">
            Component Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Watch Tower System"
              description="Revenue operations monitoring with automated recovery. Reduced automation failures by 85%."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="#"
            />
            <Card
              title="AI SMS Leasing Agent"
              description="Intelligent conversational automation handling entire lead lifecycle. $24K/year cost savings."
              badge="🔥 Firefighting Mode"
              badgeColor="amber"
              href="#"
            />
            <Card
              title="Attribution System"
              description="Closed-loop pipeline recovery with multi-touch attribution. 48% MQL→SQL conversion lift."
              badge="📈 Growth Mode"
              badgeColor="green"
              href="#"
            />
          </div>
        </Container>
      </Section>

      {/* Button Variants Section */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8">
            Button Styles
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="primary" size="small">Small</Button>
            <Button variant="primary" size="medium">Medium</Button>
            <Button variant="primary" size="large">Large</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}