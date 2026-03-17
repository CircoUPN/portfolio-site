'use client';

import { useState } from 'react';
import Button from '@/components/Button';

// Types for form data
interface FormData {
  // Step 1: Business Context
  companyName: string;
  industry: string;
  companySize: string;
  role: string;
  revenueModel: string;

  // Step 2: Focus Area & Mode
  focusArea: string;
  mode: string;
  modeDescription: string;

  // Step 3: Goals
  oneYearOutcome: string;
  primaryKpi: string;
  timeline: string;

  // Step 4: Bottleneck Workflow
  workflowName: string;
  workflowType: string;
  currentState: string;
  frequency: string;
  hoursPerWeek: string;
  peopleAndTools: string;
  failureModes: string[];
  biggestFrustration: string;

  // Step 5: Operating System Scan
  clarityScore: number;
  processScore: number;
  toolsScore: number;
  automationScore: number;
  measurementScore: number;

  // Step 6: Constraints
  dataFragmentation: string;
  toolIntegration: string;
  automationComfort: string;
  mustRemainHuman: string;

  // Step 7: Next Steps
  readiness: string;
  name: string;
  email: string;
}

const initialFormData: FormData = {
  companyName: '',
  industry: '',
  companySize: '',
  role: '',
  revenueModel: '',
  focusArea: '',
  mode: '',
  modeDescription: '',
  oneYearOutcome: '',
  primaryKpi: '',
  timeline: '',
  workflowName: '',
  workflowType: '',
  currentState: '',
  frequency: '',
  hoursPerWeek: '',
  peopleAndTools: '',
  failureModes: [],
  biggestFrustration: '',
  clarityScore: 0,
  processScore: 0,
  toolsScore: 0,
  automationScore: 0,
  measurementScore: 0,
  dataFragmentation: '',
  toolIntegration: '',
  automationComfort: '',
  mustRemainHuman: '',
  readiness: '',
  name: '',
  email: '',
};

const TOTAL_STEPS = 7;

const stepTitles = [
  'Business Context',
  'Focus Area',
  'Goals',
  'Bottleneck Workflow',
  'Operating System',
  'Constraints',
  'Next Steps',
];

const inputBase =
  'w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all';

const selectActive = 'bg-white/10 border-zinc-400 text-white';
const selectInactive = 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-600';

export default function EvaluationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resultsPreview, setResultsPreview] = useState<{
    category: string;
    totalScore: number;
    maxScore: number;
    osScores: { clarity: number; process: number; tools: number; automation: number; measurement: number };
    bottlenecks: { area: string; score: number; severity: string }[];
    workflowName: string;
    biggestFrustration: string;
    mode: string;
    focusArea: string;
  } | null>(null);

  const updateField = (field: keyof FormData, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/evaluation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      const data = await response.json();

      if (data.preview) {
        setResultsPreview(data.preview);
      }

      setSubmitStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  // Results view
  if (submitStatus === 'success' && resultsPreview) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">

          {/* Success Header */}
          <div className="p-6 bg-white/5 border border-zinc-700 rounded-lg flex items-start gap-4">
            <svg className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <div>
              <div className="text-white font-semibold text-lg mb-1">Assessment Complete</div>
              <p className="text-zinc-400 text-sm">
                Your personalized 90-day action plan is being generated and will arrive in your inbox within a few minutes.
              </p>
            </div>
          </div>

          {/* Results Preview */}
          <div className="border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Your Operating System Snapshot
            </h3>

            {/* Mode Badge */}
            <div className="flex justify-center mb-6">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                resultsPreview.mode === 'firefighting'
                  ? 'border-zinc-600 text-zinc-300'
                  : 'border-amber-400/30 text-amber-300/80'
              }`}>
                {resultsPreview.mode === 'firefighting' ? 'Firefighting Mode' : 'Growth Mode'}
              </span>
            </div>

            {/* OS Scores */}
            <div className="space-y-4 mb-6">
              {[
                { key: 'clarity', label: 'Clarity & Goals' },
                { key: 'process', label: 'Processes & SOPs' },
                { key: 'tools', label: 'Tools & Data' },
                { key: 'automation', label: 'Automation & AI' },
                { key: 'measurement', label: 'Measurement' },
              ].map((item) => {
                const score = resultsPreview.osScores[item.key as keyof typeof resultsPreview.osScores];
                const percentage = (score / 5) * 100;

                return (
                  <div key={item.key}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-zinc-400">{item.label}</span>
                      <span className="text-zinc-500">{score}/5</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400/60 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Overall Score */}
            <div className="text-center p-4 bg-white/5 rounded-lg mb-6">
              <div className="text-3xl font-bold text-amber-300">
                {resultsPreview.totalScore}/{resultsPreview.maxScore}
              </div>
              <div className="text-sm text-zinc-500 mt-1">Overall Operating System Score</div>
            </div>

            {/* Bottlenecks */}
            {resultsPreview.bottlenecks.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Top Areas to Address</h4>
                <div className="space-y-2">
                  {resultsPreview.bottlenecks.map((bottleneck, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-zinc-800 bg-white/5 flex items-center justify-between"
                    >
                      <span className="text-zinc-300 text-sm font-medium">{bottleneck.area}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        bottleneck.severity === 'critical'
                          ? 'border-zinc-600 text-zinc-400'
                          : 'border-zinc-700 text-zinc-500'
                      }`}>
                        {bottleneck.severity === 'critical' ? 'Critical' : 'Needs attention'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frustration Quote */}
            {resultsPreview.biggestFrustration && (
              <div className="p-4 bg-white/5 rounded-lg border-l-2 border-zinc-500">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Your #1 Priority</div>
                <div className="text-zinc-300 italic text-sm">&quot;{resultsPreview.biggestFrustration}&quot;</div>
              </div>
            )}
          </div>

          {/* What's Next */}
          <div className="text-center space-y-3 py-4">
            <p className="text-zinc-500 text-sm">
              <strong className="text-zinc-300">What happens next:</strong> I am generating a detailed 90-day action plan
              tailored to your specific workflow and constraints. Check your email in the next few minutes.
            </p>
            <p className="text-sm text-zinc-600">
              Want to discuss your results?{' '}
              <a href="/contact" className="text-amber-300 hover:text-amber-200 underline transition-colors">
                Schedule a call
              </a>
            </p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-500">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-zinc-500">
            {stepTitles[currentStep - 1]}
          </span>
        </div>
        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400/70 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="border border-zinc-800 rounded-lg p-6 md:p-8">

        {/* Step 1: Business Context */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Let us start with some context
              </h2>
              <p className="text-zinc-500">
                This helps me tailor the action plan to your specific situation.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                placeholder="Acme Inc"
                className={`${inputBase} border-zinc-800`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => updateField('industry', e.target.value)}
                className={`${inputBase} border-zinc-800`}
              >
                <option value="">Select your industry</option>
                <option value="saas">SaaS / Software</option>
                <option value="services">Professional Services / Agency</option>
                <option value="ecommerce">E-commerce / Retail</option>
                <option value="fintech">Fintech / Financial Services</option>
                <option value="healthcare">Healthcare / Healthtech</option>
                <option value="real-estate">Real Estate / Property</option>
                <option value="manufacturing">Manufacturing / Industrial</option>
                <option value="education">Education / Edtech</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Company Size
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['1-10', '11-50', '51-200', '200+'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => updateField('companySize', size)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.companySize === size ? selectActive : selectInactive
                    }`}
                  >
                    {size} employees
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Your Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => updateField('role', e.target.value)}
                className={`${inputBase} border-zinc-800`}
              >
                <option value="">Select your role</option>
                <option value="founder">Founder / Owner</option>
                <option value="c-level">C-Level Executive</option>
                <option value="vp">VP / Director</option>
                <option value="head">Head of Department</option>
                <option value="manager">Manager / Team Lead</option>
                <option value="ic">Individual Contributor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Primary Revenue Model
              </label>
              <select
                value={formData.revenueModel}
                onChange={(e) => updateField('revenueModel', e.target.value)}
                className={`${inputBase} border-zinc-800`}
              >
                <option value="">Select your revenue model</option>
                <option value="saas">SaaS / Recurring Subscriptions</option>
                <option value="services">Services / Agency / Consulting</option>
                <option value="ecommerce">E-commerce / Retail</option>
                <option value="marketplace">Marketplace / Platform</option>
                <option value="real-estate">Real Estate / Property</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Focus Area & Mode */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Where should we focus?
              </h2>
              <p className="text-zinc-500">
                Tell me which area needs attention and whether you are firefighting or building for growth.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Which area needs attention first?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: 'revenue-ops', label: 'Revenue / Sales / Marketing', desc: 'Revenue Ops' },
                  { value: 'finance-ops', label: 'Finance / Billing / Collections', desc: 'Finance Ops' },
                  { value: 'customer-ops', label: 'Customer Support / Success', desc: 'Customer Ops' },
                  { value: 'compliance', label: 'Compliance / Risk / Legal', desc: 'Compliance & Risk' },
                ].map((area) => (
                  <button
                    key={area.value}
                    type="button"
                    onClick={() => updateField('focusArea', area.value)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      formData.focusArea === area.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{area.label}</div>
                    <div className="text-sm text-zinc-500 mt-0.5">{area.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Which describes your situation right now?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => updateField('mode', 'firefighting')}
                  className={`p-6 rounded-lg border text-left transition-all ${
                    formData.mode === 'firefighting' ? selectActive : selectInactive
                  }`}
                >
                  <svg className="w-6 h-6 text-amber-400/70 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  <div className="font-bold text-white text-lg mb-1">Firefighting Mode</div>
                  <div className="text-sm text-zinc-500">
                    Things are breaking, you need relief ASAP
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => updateField('mode', 'growth')}
                  className={`p-6 rounded-lg border text-left transition-all ${
                    formData.mode === 'growth' ? selectActive : selectInactive
                  }`}
                >
                  <svg className="w-6 h-6 text-amber-400/70 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                  <div className="font-bold text-white text-lg mb-1">Growth Mode</div>
                  <div className="text-sm text-zinc-500">
                    System works, but will not support 2–5x growth
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                In one sentence, what does this feel like for you right now?
              </label>
              <textarea
                value={formData.modeDescription}
                onChange={(e) => updateField('modeDescription', e.target.value)}
                placeholder="E.g., 'We are losing deals because leads sit untouched for days' or 'Our CRM is a mess and nobody trusts the data'"
                rows={3}
                className={`${inputBase} border-zinc-800 resize-none`}
              />
            </div>
          </div>
        )}

        {/* Step 3: Goals */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                What does success look like?
              </h2>
              <p className="text-zinc-500">
                Help me understand what you are trying to achieve so I can make the plan actionable.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                If this area was working perfectly 12 months from now, what would be different?
              </label>
              <textarea
                value={formData.oneYearOutcome}
                onChange={(e) => updateField('oneYearOutcome', e.target.value)}
                placeholder="E.g., 'Every lead gets followed up within 4 hours, we have real-time visibility into pipeline health, and reps spend 80% of their time selling instead of doing admin work'"
                rows={4}
                className={`${inputBase} border-zinc-800 resize-none`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                What is the #1 KPI you care about in this area?
              </label>
              <input
                type="text"
                value={formData.primaryKpi}
                onChange={(e) => updateField('primaryKpi', e.target.value)}
                placeholder="E.g., 'Lead response time', 'MQL to SQL conversion rate', 'Days to close'"
                className={`${inputBase} border-zinc-800`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                When do you need to see real improvement?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: '0-3', label: '0–3 months', desc: 'Urgent' },
                  { value: '3-6', label: '3–6 months', desc: 'Near-term' },
                  { value: '6-12', label: '6–12 months', desc: 'Strategic' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('timeline', option.value)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      formData.timeline === option.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{option.label}</div>
                    <div className="text-sm text-zinc-500 mt-0.5">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Bottleneck Workflow */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Tell me about the workflow that needs fixing
              </h2>
              <p className="text-zinc-500">
                This is the heart of the assessment. The more detail you provide, the more specific and useful your action plan will be.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                What is the single workflow you most need to fix?
              </label>
              <input
                type="text"
                value={formData.workflowName}
                onChange={(e) => updateField('workflowName', e.target.value)}
                placeholder="E.g., 'Lead handoff from marketing to sales', 'Invoice to payment collection', 'Customer onboarding'"
                className={`${inputBase} border-zinc-800`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Which best describes this workflow?
              </label>
              <select
                value={formData.workflowType}
                onChange={(e) => updateField('workflowType', e.target.value)}
                className={`${inputBase} border-zinc-800`}
              >
                <option value="">Select workflow type</option>
                <option value="lead-to-opportunity">Lead to Opportunity</option>
                <option value="opportunity-to-close">Opportunity to Closed Won/Lost</option>
                <option value="invoice-to-cash">Invoice to Cash Collected</option>
                <option value="ticket-to-resolution">Ticket to Resolution</option>
                <option value="onboarding">Onboarding to Active Customer</option>
                <option value="compliance-review">Compliance / Risk Review</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Describe what actually happens today, step by step.{' '}
                <span className="text-zinc-600 font-normal">Messy is fine — include what typically goes wrong.</span>
              </label>
              <textarea
                value={formData.currentState}
                onChange={(e) => updateField('currentState', e.target.value)}
                placeholder="E.g., 'Lead comes in from website form, goes into HubSpot, marketing is supposed to score it and assign to a rep, but half the time it just sits there. When a rep does pick it up, they have to manually check LinkedIn, look up the company, etc. By then, the lead is cold...'"
                rows={5}
                className={`${inputBase} border-zinc-800 resize-none`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                  How often does this workflow run?
                </label>
                <input
                  type="text"
                  value={formData.frequency}
                  onChange={(e) => updateField('frequency', e.target.value)}
                  placeholder="E.g., '50 times per week'"
                  className={`${inputBase} border-zinc-800`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                  Total hours/week spent on this workflow?
                </label>
                <input
                  type="text"
                  value={formData.hoursPerWeek}
                  onChange={(e) => updateField('hoursPerWeek', e.target.value)}
                  placeholder="E.g., '15 hours'"
                  className={`${inputBase} border-zinc-800`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Who is involved and what tools do they use?
              </label>
              <textarea
                value={formData.peopleAndTools}
                onChange={(e) => updateField('peopleAndTools', e.target.value)}
                placeholder="E.g., '2 SDRs + 5 AEs using HubSpot, Outreach, LinkedIn, and a bunch of spreadsheets'"
                rows={2}
                className={`${inputBase} border-zinc-800 resize-none`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                What usually goes wrong?{' '}
                <span className="text-zinc-600 font-normal">Select all that apply.</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: 'slips-through', label: 'Things slip through the cracks' },
                  { value: 'too-slow', label: 'Takes too long' },
                  { value: 'bad-data', label: 'Data is wrong or missing' },
                  { value: 'customer-frustrated', label: 'Customers get frustrated' },
                  { value: 'compliance-risk', label: 'Creates compliance / risk exposure' },
                  { value: 'other', label: 'Other' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      const current = formData.failureModes;
                      if (current.includes(option.value)) {
                        updateField('failureModes', current.filter(v => v !== option.value));
                      } else {
                        updateField('failureModes', [...current, option.value]);
                      }
                    }}
                    className={`p-3 rounded-lg border text-left text-sm transition-all ${
                      formData.failureModes.includes(option.value) ? selectActive : selectInactive
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* The money question */}
            <div className="pt-4 border-t border-zinc-800">
              <label className="block text-sm font-medium text-amber-400/70 mb-1.5">
                If you could fix ONE thing about this workflow in the next 90 days, what would it be?
              </label>
              <textarea
                value={formData.biggestFrustration}
                onChange={(e) => updateField('biggestFrustration', e.target.value)}
                placeholder="This is the most important question. Be specific about what is driving you crazy and what 'fixed' would look like."
                rows={4}
                className={`${inputBase} border-zinc-700 focus:ring-zinc-400 resize-none`}
              />
            </div>
          </div>
        )}

        {/* Step 5: Operating System Scan */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Quick operating system scan
              </h2>
              <p className="text-zinc-500">
                Rate each area from 1–5 to help me understand the broader context. This shapes the action plan priorities.
              </p>
            </div>

            {[
              {
                field: 'clarityScore' as keyof FormData,
                label: 'Clarity & Goals',
                question: 'How clear are goals and responsibilities in this area?',
                low: 'Nobody knows who owns what',
                high: 'Crystal clear ownership and goals',
              },
              {
                field: 'processScore' as keyof FormData,
                label: 'Processes & SOPs',
                question: 'How documented and consistent are your processes?',
                low: 'Tribal knowledge only',
                high: 'Well-documented, everyone follows them',
              },
              {
                field: 'toolsScore' as keyof FormData,
                label: 'Tools & Data',
                question: 'How well do your tools and data talk to each other?',
                low: 'Siloed, lots of copy-paste',
                high: 'Fully integrated, single source of truth',
              },
              {
                field: 'automationScore' as keyof FormData,
                label: 'Automation & AI',
                question: 'How much repetitive work is automated or AI-assisted?',
                low: 'Everything is manual',
                high: 'High automation, humans for judgment calls',
              },
              {
                field: 'measurementScore' as keyof FormData,
                label: 'Measurement & Feedback',
                question: 'How do you monitor and improve performance?',
                low: 'No metrics, flying blind',
                high: 'Real-time dashboards, regular reviews',
              },
            ].map((item) => (
              <div key={item.field} className="p-4 border border-zinc-800 rounded-lg">
                <div className="mb-3">
                  <div className="font-medium text-white">{item.label}</div>
                  <div className="text-sm text-zinc-500">{item.question}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-600 w-20 leading-tight">{item.low}</span>
                  <div className="flex-1 flex justify-between gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => updateField(item.field, score)}
                        className={`flex-1 h-10 rounded-lg font-bold text-sm transition-all ${
                          formData[item.field] === score
                            ? 'bg-white text-zinc-950'
                            : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-800'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-600 w-20 text-right leading-tight">{item.high}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 6: Constraints */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                What constraints should I know about?
              </h2>
              <p className="text-zinc-500">
                This ensures the action plan is realistic for your situation.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                How fragmented is your data for this workflow?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'centralized', label: 'Mostly in one place' },
                  { value: 'few-systems', label: 'In a few systems' },
                  { value: 'scattered', label: 'Scattered everywhere' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('dataFragmentation', option.value)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      formData.dataFragmentation === option.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                How integrated are your tools for this workflow?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'none', label: 'Almost no integrations' },
                  { value: 'some', label: 'Some, still copy-paste' },
                  { value: 'mostly', label: 'Mostly integrated' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('toolIntegration', option.value)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      formData.toolIntegration === option.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                What is your comfort level with automation in this area?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'suggestions-only', label: 'Suggestions only — humans do all actions' },
                  { value: 'approve-changes', label: 'Okay with automation if I approve changes' },
                  { value: 'full-auto', label: 'Full automation for low-risk, repetitive steps' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('automationComfort', option.value)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      formData.automationComfort === option.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Are there steps that must remain human-only?{' '}
                <span className="text-zinc-600 font-normal">(legal, sensitive, brand-critical)</span>
              </label>
              <textarea
                value={formData.mustRemainHuman}
                onChange={(e) => updateField('mustRemainHuman', e.target.value)}
                placeholder="E.g., 'Final contract review must be done by legal', 'Customer escalations need a human response'"
                rows={3}
                className={`${inputBase} border-zinc-800 resize-none`}
              />
            </div>
          </div>
        )}

        {/* Step 7: Next Steps */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Almost done — where should I send your action plan?
              </h2>
              <p className="text-zinc-500">
                I will generate a personalized 90-day plan based on everything you have shared and send it to your email.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                Where are you mentally with this right now?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'exploring', label: 'Just exploring', desc: 'Curious what is possible' },
                  { value: 'considering', label: 'Seriously considering changes', desc: 'Evaluating options' },
                  { value: 'ready', label: 'Ready to fix this now', desc: 'Let us move forward' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('readiness', option.value)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      formData.readiness === option.value ? selectActive : selectInactive
                    }`}
                  >
                    <div className="font-medium text-white">{option.label}</div>
                    <div className="text-sm text-zinc-500 mt-0.5">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="John Doe"
                  className={`${inputBase} border-zinc-800`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@company.com"
                  className={`${inputBase} border-zinc-800`}
                />
              </div>
            </div>

            <p className="text-sm text-zinc-600">
              Your information is used only to generate and deliver your personalized action plan.
              I do not share or sell your data.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-zinc-800">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 text-zinc-500 hover:text-zinc-200 transition-colors text-sm"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < TOTAL_STEPS ? (
            <Button variant="primary" size="medium" onClick={nextStep}>
              Continue
            </Button>
          ) : (
            <Button
              variant="primary"
              size="large"
              onClick={handleSubmit}
              className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating Your Plan...
                </span>
              ) : (
                'Get My 90-Day Action Plan'
              )}
            </Button>
          )}
        </div>

        {/* Error */}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-white/5 border border-zinc-700 rounded-lg flex items-start gap-3">
            <svg className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <div className="text-white font-semibold text-sm mb-1">Something went wrong</div>
              <p className="text-zinc-500 text-sm">
                Please try again, or email me directly at{' '}
                <a href="mailto:divackvega@gmail.com" className="text-amber-300 hover:text-amber-200 underline transition-colors">
                  divackvega@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}