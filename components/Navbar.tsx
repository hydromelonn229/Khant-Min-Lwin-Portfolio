'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 2V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 19V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M2 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19 12H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 14.5C19.35 14.74 18.65 14.87 17.92 14.87C14.61 14.87 11.93 12.19 11.93 8.88C11.93 6.95 12.84 5.23 14.27 4.13C13.56 3.92 12.82 3.8 12.05 3.8C7.65 3.8 4.08 7.36 4.08 11.77C4.08 16.17 7.65 19.74 12.05 19.74C15.65 19.74 18.7 17.35 19.7 14.06C19.8 14.21 19.9 14.36 20 14.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : prefersDark
        ? 'dark'
        : 'light'

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  return (
    <nav className={styles.nav}>
      <Link href="#hero" className={styles.logo}>Desmond</Link>
      <ul className={styles.links}>
        <li><Link href="#education">Education</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li>
          <a href="mailto:your@email.com" className={styles.contactBtn}>
            Contact
          </a>
        </li>
        <li>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
      </ul>
    </nav>
  )
}
