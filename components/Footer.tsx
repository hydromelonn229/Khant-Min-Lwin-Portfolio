import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Khant Min Lwin (Desmond)</span>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/khant-min-lwin-57ba90303/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/hydromelonn229" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:khantminlwin1@gmail.com">Email</a>
      </div>
    </footer>
  )
}
