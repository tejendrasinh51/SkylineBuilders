'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { cn } from '@/lib/cn'

interface EnquiryFormProps {
  defaultProject?: string
  compact?: boolean
  className?: string
}

const budgetOptions = [
  'Under ₹50 Lac',
  '₹50 Lac – ₹1 Cr',
  '₹1 Cr – ₹2 Cr',
  '₹2 Cr – ₹3 Cr',
  'Above ₹3 Cr',
]

const timelineOptions = ['Immediately', 'Within 3 months', 'Within 6 months', 'Within 1 year', 'Just exploring']

export default function EnquiryForm({ defaultProject = '', compact = false, className }: EnquiryFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: defaultProject,
    budget: '',
    timeline: '',
    bhk: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10)))
      next.phone = 'Enter a valid 10-digit Indian mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email'
    if (!compact && !form.project) next.project = 'Please select a project'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className={cn('rounded-lg border border-success/30 bg-success/10 p-8 text-center', className)}>
        <h3 className="font-display text-2xl text-success">Thank You!</h3>
        <p className="mt-2 font-body text-sm text-text-secondary">
          Our team will contact you within 24 hours to assist with your enquiry.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-border bg-surface-2 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none'

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div>
        <input
          type="text"
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
      </div>
      <select
        value={form.project}
        onChange={(e) => setForm({ ...form, project: e.target.value })}
        className={inputClass}
      >
        <option value="">Interested In *</option>
        {projects.map((p) => (
          <option key={p.slug} value={p.name}>
            {p.name}
          </option>
        ))}
        <option value="General Enquiry">General Enquiry</option>
      </select>
      {errors.project && <p className="text-xs text-error">{errors.project}</p>}
      {compact && (
        <input
          type="text"
          placeholder="BHK Preference"
          value={form.bhk}
          onChange={(e) => setForm({ ...form, bhk: e.target.value })}
          className={inputClass}
        />
      )}
      {!compact && (
        <>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className={inputClass}
          >
            <option value="">Budget Range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <select
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className={inputClass}
          >
            <option value="">Timeline</option>
            {timelineOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </>
      )}
      <textarea
        placeholder="Your Message"
        rows={compact ? 3 : 4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass}
      />
      <Button type="submit" className="w-full" loading={loading}>
        Send Enquiry
      </Button>
    </form>
  )
}
