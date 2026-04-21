'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
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
      </ul>
    </nav>
  )
}
