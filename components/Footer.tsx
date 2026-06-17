'use client'

import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.brand}>Khant Min Lwin (Desmond)</span>
        <span className={styles.copy}>© {new Date().getFullYear()}</span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/khant-min-lwin-57ba90303/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/hydromelonn229" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>GitHub</span>
          </a>
          <button onClick={onContactClick} aria-label="Email" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M22 7L12 13L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Email</span>
          </button>
        </div>

        <button
          className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Top</span>
        </button>
      </div>
    </footer>
  )
}
