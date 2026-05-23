'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Hero.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <div className={styles.inner}>

        {/* Text side */}
        <motion.div
          className={styles.text}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span className={styles.tag} variants={fadeUp} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            Data Analyst · Fresh Graduate
          </motion.span>

          <motion.h1 className={styles.name} variants={fadeUp} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <span className={styles.nameText}>Khant Min Lwin</span>
            <br />
            <em>Desmond</em>
          </motion.h1>

          <motion.p className={styles.tagline} variants={fadeUp} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            Turning raw data into clear, actionable stories.
          </motion.p>

          <motion.p className={styles.summary} variants={fadeUp} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            A passionate and curious data analyst with a strong foundation in analytics,
            statistics, and data visualisation. Eager to bring fresh perspectives and a
            rigorous analytical mindset to any team.
          </motion.p>

          <motion.div className={styles.cta} variants={fadeUp} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="/cv.pdf" className={styles.btnOutline} download>Download CV</a>
          </motion.div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.photoFrame}>
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
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  )
}
