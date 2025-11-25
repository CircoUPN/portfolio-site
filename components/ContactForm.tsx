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

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Inquiry type validation
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type'
    }

    // Message validation
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

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit to API route (will be replaced with n8n webhook later)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Success!
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: '',
      })

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-8 p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✅</div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-300 mb-2">
                Thanks for reaching out. I'll respond within 24 hours.
              </p>
              <p className="text-sm text-slate-400">
                Check your email for a confirmation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-8 p-6 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">
                Something Went Wrong
              </h3>
              <p className="text-slate-300 mb-2">
                Please try again or email me directly at:
              </p>
              <a 
                href="mailto:divackvega@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                divackvega@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-800 border ${
              errors.name ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-800 border ${
              errors.email ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Company Field (Optional) */}
        <div>
          <label 
            htmlFor="company" 
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Company <span className="text-slate-500 text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Your company name"
            disabled={isSubmitting}
          />
        </div>

        {/* Inquiry Type Dropdown */}
        <div>
          <label 
            htmlFor="inquiryType" 
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            What are you looking for? <span className="text-red-400">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-800 border ${
              errors.inquiryType ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            disabled={isSubmitting}
          >
            <option value="">Select an option...</option>
            <option value="Client Project">Client Project - Contract/Fractional Work</option>
            <option value="Job Opportunity">Job Opportunity - Full-Time Role</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.inquiryType && (
            <p className="mt-2 text-sm text-red-400">{errors.inquiryType}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-slate-800 border ${
              errors.message ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y`}
            placeholder="Tell me about your project, role, or question..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400">{errors.message}</p>
          )}
          <p className="mt-2 text-sm text-slate-500">
            {formData.message.length} / 2000 characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>

          <p className="mt-4 text-sm text-slate-400">
            I typically respond within 24 hours.
          </p>
        </div>
      </form>
    </div>
  )
}