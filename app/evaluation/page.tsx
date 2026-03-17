import Container from '@/components/Container';
import Section from '@/components/Section';
import EvaluationForm from '@/components/EvaluationForm';

export const metadata = {
  title: 'Operations Assessment | Divack Vega',
  description: 'Get a personalized 90-day action plan to fix your most painful workflow. Free assessment, takes about 15 minutes.',
};

export default function EvaluationPage() {
  return (
    <Section className="min-h-screen pt-32 pb-16">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400/70 mb-4">
            Free Assessment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Personalized Action Plan
          </h1>
          <p className="text-lg text-zinc-500">
            Tell me about the workflow that is driving you crazy. I will send you a detailed
            90-day plan showing exactly how I would fix it — specific steps, tools, and expected outcomes.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5 text-sm text-zinc-600">
            <span>~15 minutes</span>
            <span className="w-px h-4 bg-zinc-800" />
            <span>Plan delivered via email</span>
            <span className="w-px h-4 bg-zinc-800" />
            <span>Your data stays private</span>
          </div>
        </div>

        {/* The Form */}
        <EvaluationForm />
      </Container>
    </Section>
  );
}