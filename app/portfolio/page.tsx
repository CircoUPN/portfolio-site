import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Portfolio() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-bold text-white mb-6">
          Portfolio
        </h1>
        <p className="text-xl text-slate-300">
          Case studies coming soon in Phase 3.
        </p>
      </Container>
    </Section>
  );
}