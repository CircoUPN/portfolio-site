import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Blog() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-bold text-white mb-6">
          Blog
        </h1>
        <p className="text-xl text-slate-300">
          Blog posts coming soon in Phase 6.
        </p>
      </Container>
    </Section>
  );
}