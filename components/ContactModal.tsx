'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './ContactModal.module.css'

interface ContactModalProps {
  onClose: () => void
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'success-demo' | 'error' | null>(null)
  const [isDemoMode, setIsDemoMode] = useState(false)

  useEffect(() => {
    // Check if the environment variable is present
    const hasKey = !!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    setIsDemoMode(!hasKey)
  }, [])

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      // Simulate successful submission for development / local testing
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setIsSubmitting(false)
      setSubmitStatus('success-demo')
      setFormData({ name: '', email: '', subject: '', message: '' })
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Backdrop overlay */}
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={styles.container}>
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
        >
          {/* Close button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {submitStatus === 'success' || submitStatus === 'success-demo' ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className={styles.title}>Message Sent!</h2>
              <p className={styles.subtitle}>
                {submitStatus === 'success-demo'
                  ? 'Thank you for reaching out. (Note: Submissions are in Demo Mode. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your env variables for real emails.)'
                  : 'Thank you for reaching out. I will get back to you as soon as possible.'}
              </p>
              <button className={styles.btnPrimary} onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <>
              <div className={styles.header}>
                <h2 className={styles.title}>Get in Touch</h2>
                <p className={styles.subtitle}>
                  Have a question or want to work together? Drop me a message below.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className={styles.errorBanner}>
                  <p>Failed to send message. Please try again or email directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to discuss..."
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.footerRow}>
                  {isDemoMode && (
                    <span className={styles.demoBadge}>
                      Demo Mode
                    </span>
                  )}
                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.spinnerWrap}>
                        <svg className={styles.spinner} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
