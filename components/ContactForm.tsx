'use client'

import { useState } from 'react'
import Button from './Button'

interface FormData {
  name: string
  email: string
  company: string
  inquiryType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  inquiryType?: string
  message?: string
}

const inputBase =
  'w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to submit form')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl">

      {/* Success */}
      {submitStatus === 'success' && (
        <div className="mb-8 p-5 bg-white/5 border border-zinc-700 rounded-lg flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">Message sent</h3>
            <p className="text-zinc-400 text-sm">Thanks for reaching out. I&apos;ll respond within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Error */}
      {submitStatus === 'error' && (
        <div className="mb-8 p-5 bg-white/5 border border-zinc-700 rounded-lg flex items-start gap-3">
          <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">Something went wrong</h3>
            <p className="text-zinc-400 text-sm">
              Please try again or email me at{' '}
              <a href="mailto:divackvega@gmail.com" className="text-amber-300 hover:text-amber-200 underline">
                divackvega@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">
            Name <span className="text-zinc-600">*</span>
          </label>
          <input
            type="text" id="name" name="name"
            value={formData.name} onChange={handleChange}
            className={`${inputBase} ${errors.name ? 'border-red-500/60' : 'border-zinc-800'}`}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
            Email <span className="text-zinc-600">*</span>
          </label>
          <input
            type="email" id="email" name="email"
            value={formData.email} onChange={handleChange}
            className={`${inputBase} ${errors.email ? 'border-red-500/60' : 'border-zinc-800'}`}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-1.5">
            Company <span className="text-zinc-700 text-xs">(Optional)</span>
          </label>
          <input
            type="text" id="company" name="company"
            value={formData.company} onChange={handleChange}
            className={`${inputBase} border-zinc-800`}
            placeholder="Your company name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-zinc-400 mb-1.5">
            What are you looking for? <span className="text-zinc-600">*</span>
          </label>
          <select
            id="inquiryType" name="inquiryType"
            value={formData.inquiryType} onChange={handleChange}
            className={`${inputBase} ${errors.inquiryType ? 'border-red-500/60' : 'border-zinc-800'}`}
            disabled={isSubmitting}
          >
            <option value="">Select an option...</option>
            <option value="Client Project">Client Project — Contract / Fractional Work</option>
            <option value="Job Opportunity">Job Opportunity — Full-Time Role</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.inquiryType && <p className="mt-1.5 text-xs text-red-400">{errors.inquiryType}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1.5">
            Message <span className="text-zinc-600">*</span>
          </label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            rows={6}
            className={`${inputBase} ${errors.message ? 'border-red-500/60' : 'border-zinc-800'} resize-y`}
            placeholder="Tell me about your project, role, or question..."
            disabled={isSubmitting}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          <p className="mt-1.5 text-xs text-zinc-700">{formData.message.length} / 2000</p>
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" size="large" className="w-full sm:w-auto">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
          <p className="mt-3 text-xs text-zinc-600">I typically respond within 24 hours.</p>
        </div>

      </form>
    </div>
  )
}