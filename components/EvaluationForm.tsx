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

  // Update form data helper
  const updateField = (field: keyof FormData, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Navigation
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

  // Form submission
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
      
      // Store preview data for display
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

  // Progress bar
  const progress = (currentStep / TOTAL_STEPS) * 100;

  // If we have results, show the results view instead of the form
  if (submitStatus === 'success' && resultsPreview) {
    return (
      <div className="max-w-3xl mx-auto">
        {/* Results Preview */}
        <div className="space-y-6">
          {/* Success Header */}
          <div className="p-6 bg-emerald-500/20 border border-emerald-500 rounded-lg text-center">
            <div className="text-emerald-400 font-semibold text-xl mb-2">Assessment Complete!</div>
            <p className="text-slate-300">
              Your personalized 90-day action plan is being generated and will arrive in your inbox within a few minutes.
            </p>
          </div>

          {/* Results Preview */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">
              Your Operating System Snapshot
            </h3>

            {/* Mode Badge */}
            <div className="flex justify-center mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                resultsPreview.mode === 'firefighting' 
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50' 
                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
              }`}>
                {resultsPreview.mode === 'firefighting' ? 'Firefighting Mode' : 'Growth Mode'}
              </span>
            </div>

            {/* OS Scores Visual */}
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
                let barColor = 'bg-red-500';
                if (score >= 4) barColor = 'bg-emerald-500';
                else if (score >= 3) barColor = 'bg-yellow-500';
                else if (score >= 2) barColor = 'bg-amber-500';

                return (
                  <div key={item.key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-slate-400">{score}/5</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${barColor} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Overall Score */}
            <div className="text-center p-4 bg-slate-900/50 rounded-lg mb-6">
              <div className="text-3xl font-bold text-slate-50">
                {resultsPreview.totalScore}/{resultsPreview.maxScore}
              </div>
              <div className="text-sm text-slate-400">Overall Operating System Score</div>
            </div>

            {/* Bottlenecks */}
            {resultsPreview.bottlenecks.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-400 mb-3">Top Areas to Address:</h4>
                <div className="space-y-2">
                  {resultsPreview.bottlenecks.map((bottleneck, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-lg border ${
                        bottleneck.severity === 'critical' 
                          ? 'bg-red-500/10 border-red-500/30 text-red-300'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                      }`}
                    >
                      <span className="font-medium">{bottleneck.area}</span>
                      <span className="text-sm opacity-75 ml-2">
                        ({bottleneck.severity === 'critical' ? 'Critical' : 'Needs attention'})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Their Frustration Quote */}
            {resultsPreview.biggestFrustration && (
              <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-cyan-500">
                <div className="text-sm text-slate-400 mb-1">Your #1 Priority:</div>
                <div className="text-slate-200 italic">&quot;{resultsPreview.biggestFrustration}&quot;</div>
              </div>
            )}
          </div>

          {/* What's Next */}
          <div className="text-center space-y-4 p-6">
            <p className="text-slate-400">
              <strong className="text-slate-200">What happens next:</strong> I am generating a detailed 90-day action plan 
              tailored to your specific workflow and constraints. Check your email in the next few minutes.
            </p>
            <p className="text-sm text-slate-500">
              Want to discuss your results? <a href="/contact" className="text-cyan-400 underline hover:text-cyan-300">Schedule a call</a>
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
          <span className="text-sm text-slate-400">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-slate-400">
            {stepTitles[currentStep - 1]}
          </span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8">
        
        {/* Step 1: Business Context */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Let us start with some context
              </h2>
              <p className="text-slate-400">
                This helps me tailor the action plan to your specific situation.
              </p>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                placeholder="Acme Inc"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => updateField('industry', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
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

            {/* Company Size */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company Size
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['1-10', '11-50', '51-200', '200+'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => updateField('companySize', size)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.companySize === size
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                        : 'bg-slate-900 border-slate-600 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {size} employees
                  </button>
                ))}
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Your Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => updateField('role', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
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

            {/* Revenue Model */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Primary Revenue Model
              </label>
              <select
                value={formData.revenueModel}
                onChange={(e) => updateField('revenueModel', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
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
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Where should we focus?
              </h2>
              <p className="text-slate-400">
                Tell me which area needs attention and whether you are firefighting or building for growth.
              </p>
            </div>

            {/* Focus Area */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
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
                      formData.focusArea === area.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{area.label}</div>
                    <div className="text-sm text-slate-400">{area.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mode */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Which describes your situation right now?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => updateField('mode', 'firefighting')}
                  className={`p-6 rounded-lg border text-left transition-all ${
                    formData.mode === 'firefighting'
                      ? 'bg-amber-500/20 border-amber-500'
                      : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="font-bold text-slate-50 text-lg mb-1">Firefighting Mode</div>
                  <div className="text-sm text-slate-400">
                    Things are breaking, you need relief ASAP
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => updateField('mode', 'growth')}
                  className={`p-6 rounded-lg border text-left transition-all ${
                    formData.mode === 'growth'
                      ? 'bg-cyan-500/20 border-cyan-500'
                      : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-bold text-slate-50 text-lg mb-1">Growth Mode</div>
                  <div className="text-sm text-slate-400">
                    System works, but will not support 2-5x growth
                  </div>
                </button>
              </div>
            </div>

            {/* Mode Description */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                In one sentence, what does this feel like for you right now?
              </label>
              <textarea
                value={formData.modeDescription}
                onChange={(e) => updateField('modeDescription', e.target.value)}
                placeholder="E.g., 'We are losing deals because leads sit untouched for days' or 'Our CRM is a mess and nobody trusts the data'"
                rows={3}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 3: Goals */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                What does success look like?
              </h2>
              <p className="text-slate-400">
                Help me understand what you are trying to achieve so I can make the plan actionable.
              </p>
            </div>

            {/* One Year Outcome */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                If this area was working perfectly 12 months from now, what would be different?
              </label>
              <textarea
                value={formData.oneYearOutcome}
                onChange={(e) => updateField('oneYearOutcome', e.target.value)}
                placeholder="E.g., 'Every lead gets followed up within 4 hours, we have real-time visibility into pipeline health, and reps spend 80% of their time selling instead of doing admin work'"
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {/* Primary KPI */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What is the #1 KPI you care about in this area?
              </label>
              <input
                type="text"
                value={formData.primaryKpi}
                onChange={(e) => updateField('primaryKpi', e.target.value)}
                placeholder="E.g., 'Lead response time', 'MQL to SQL conversion rate', 'Days to close'"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                When do you need to see real improvement?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: '0-3', label: '0-3 months', desc: 'Urgent' },
                  { value: '3-6', label: '3-6 months', desc: 'Near-term' },
                  { value: '6-12', label: '6-12 months', desc: 'Strategic' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('timeline', option.value)}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      formData.timeline === option.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.desc}</div>
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
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Tell me about the workflow that needs fixing
              </h2>
              <p className="text-slate-400">
                This is the heart of the assessment. The more detail you provide, the more specific and useful your action plan will be.
              </p>
            </div>

            {/* Workflow Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What is the single workflow you most need to fix?
              </label>
              <input
                type="text"
                value={formData.workflowName}
                onChange={(e) => updateField('workflowName', e.target.value)}
                placeholder="E.g., 'Lead handoff from marketing to sales', 'Invoice to payment collection', 'Customer onboarding'"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Workflow Type */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Which best describes this workflow?
              </label>
              <select
                value={formData.workflowType}
                onChange={(e) => updateField('workflowType', e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
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

            {/* Current State */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Describe what actually happens today, step by step.
                <span className="text-slate-500 font-normal"> Messy is fine - include what typically goes wrong.</span>
              </label>
              <textarea
                value={formData.currentState}
                onChange={(e) => updateField('currentState', e.target.value)}
                placeholder="E.g., 'Lead comes in from website form, goes into HubSpot, marketing is supposed to score it and assign to a rep, but half the time it just sits there. When a rep does pick it up, they have to manually check LinkedIn, look up the company, etc. By then, the lead is cold...'"
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {/* Volume and Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  How often does this workflow run?
                </label>
                <input
                  type="text"
                  value={formData.frequency}
                  onChange={(e) => updateField('frequency', e.target.value)}
                  placeholder="E.g., '50 times per week'"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Total hours/week spent on this workflow?
                </label>
                <input
                  type="text"
                  value={formData.hoursPerWeek}
                  onChange={(e) => updateField('hoursPerWeek', e.target.value)}
                  placeholder="E.g., '15 hours'"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* People and Tools */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Who is involved and what tools do they use?
              </label>
              <textarea
                value={formData.peopleAndTools}
                onChange={(e) => updateField('peopleAndTools', e.target.value)}
                placeholder="E.g., '2 SDRs + 5 AEs using HubSpot, Outreach, LinkedIn, and a bunch of spreadsheets'"
                rows={2}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {/* Failure Modes */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What usually goes wrong?
                <span className="text-slate-500 font-normal"> Select all that apply.</span>
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
                      formData.failureModes.includes(option.value)
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                        : 'bg-slate-900 border-slate-600 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Biggest Frustration - THE MONEY QUESTION */}
            <div className="pt-4 border-t border-slate-700">
              <label className="block text-sm font-medium text-cyan-400 mb-2">
                If you could fix ONE thing about this workflow in the next 90 days, what would it be?
              </label>
              <textarea
                value={formData.biggestFrustration}
                onChange={(e) => updateField('biggestFrustration', e.target.value)}
                placeholder="This is the most important question. Be specific about what is driving you crazy and what 'fixed' would look like."
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-cyan-500/50 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 5: Operating System Scan */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Quick operating system scan
              </h2>
              <p className="text-slate-400">
                Rate each area from 1-5 to help me understand the broader context. This shapes the action plan priorities.
              </p>
            </div>

            {/* Score Components */}
            {[
              { 
                field: 'clarityScore' as keyof FormData, 
                label: 'Clarity & Goals', 
                question: 'How clear are goals and responsibilities in this area?',
                low: 'Nobody knows who owns what',
                high: 'Crystal clear ownership and goals'
              },
              { 
                field: 'processScore' as keyof FormData, 
                label: 'Processes & SOPs', 
                question: 'How documented and consistent are your processes?',
                low: 'Tribal knowledge only',
                high: 'Well-documented, everyone follows them'
              },
              { 
                field: 'toolsScore' as keyof FormData, 
                label: 'Tools & Data', 
                question: 'How well do your tools and data talk to each other?',
                low: 'Siloed, lots of copy-paste',
                high: 'Fully integrated, single source of truth'
              },
              { 
                field: 'automationScore' as keyof FormData, 
                label: 'Automation & AI', 
                question: 'How much repetitive work is automated or AI-assisted?',
                low: 'Everything is manual',
                high: 'High automation, humans for judgment calls'
              },
              { 
                field: 'measurementScore' as keyof FormData, 
                label: 'Measurement & Feedback', 
                question: 'How do you monitor and improve performance?',
                low: 'No metrics, flying blind',
                high: 'Real-time dashboards, regular reviews'
              },
            ].map((item) => (
              <div key={item.field} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="mb-3">
                  <div className="font-medium text-slate-50">{item.label}</div>
                  <div className="text-sm text-slate-400">{item.question}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-20">{item.low}</span>
                  <div className="flex-1 flex justify-between">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => updateField(item.field, score)}
                        className={`w-10 h-10 rounded-lg font-bold transition-all ${
                          formData[item.field] === score
                            ? 'bg-cyan-500 text-slate-900'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 w-20 text-right">{item.high}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 6: Constraints */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                What constraints should I know about?
              </h2>
              <p className="text-slate-400">
                This ensures the action plan is realistic for your situation.
              </p>
            </div>

            {/* Data Fragmentation */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
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
                      formData.dataFragmentation === option.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tool Integration */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
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
                      formData.toolIntegration === option.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Comfort */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What is your comfort level with automation in this area?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'suggestions-only', label: 'Suggestions only - humans do all actions' },
                  { value: 'approve-changes', label: 'Okay with automation if I approve changes' },
                  { value: 'full-auto', label: 'Full automation for low-risk, repetitive steps' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('automationComfort', option.value)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      formData.automationComfort === option.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Must Remain Human */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Are there steps that must remain human-only?
                <span className="text-slate-500 font-normal"> (legal, sensitive, brand-critical)</span>
              </label>
              <textarea
                value={formData.mustRemainHuman}
                onChange={(e) => updateField('mustRemainHuman', e.target.value)}
                placeholder="E.g., 'Final contract review must be done by legal', 'Customer escalations need a human response'"
                rows={3}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 7: Next Steps */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Almost done - where should I send your action plan?
              </h2>
              <p className="text-slate-400">
                I will generate a personalized 90-day plan based on everything you have shared and send it to your email.
              </p>
            </div>

            {/* Readiness */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
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
                      formData.readiness === option.value
                        ? 'bg-cyan-500/20 border-cyan-500'
                        : 'bg-slate-900 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="font-medium text-slate-50">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-slate-500">
              Your information is used only to generate and deliver your personalized action plan. 
              I do not share or sell your data.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-700">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 text-slate-400 hover:text-slate-200 transition-colors"
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
              {isSubmitting ? 'Generating Your Plan...' : 'Get My 90-Day Action Plan'}
            </Button>
          )}
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
            <div className="text-red-400 font-semibold mb-1">Something went wrong</div>
            <p className="text-slate-300 text-sm">
              Please try again, or email me directly at{' '}
              <a href="mailto:divackvega@gmail.com" className="text-cyan-400 underline">
                divackvega@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}