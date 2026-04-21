import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>

        {/* Text side */}
        <div className={styles.text}>
          <span className={`${styles.tag} fade-up`}>Data Analyst · Fresh Graduate</span>

          <h1 className={`${styles.name} fade-up delay-1`}>
            Khant Min Lwin<br />
            <em>Desmond</em>
          </h1>

          <p className={`${styles.tagline} fade-up delay-2`}>
            Turning raw data into clear, actionable stories.
          </p>

          <p className={`${styles.summary} fade-up delay-3`}>
            A passionate and curious data analyst with a strong foundation in analytics,
            statistics, and data visualisation. Eager to bring fresh perspectives and a
            rigorous analytical mindset to any team.
          </p>

          <div className={`${styles.cta} fade-up delay-4`}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="/cv.pdf" className={styles.btnOutline} download>Download CV</a>
          </div>
        </div>

        {/* Photo side */}
        <div className={`${styles.photoWrap} fade-up delay-5`}>
          <div className={styles.photoFrame}>
            {/* Replace src with your actual photo path e.g. "/photo.jpg" */}
            <Image
              src="/photo.jpg"
              alt="Khant Min Lwin"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.decoLine} />
          <p className={styles.photoLabel}>Khant Min Lwin (Desmond)</p>
        </div>

      </div>
    </section>
  )
}
