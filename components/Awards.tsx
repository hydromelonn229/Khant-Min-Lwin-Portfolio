'use client'

import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import styles from './Awards.module.css'

const awards = [
  {
    title: 'Academic Merit Scholarship',
    school: 'Assumption University of Thailand',
    description:
      'Full scholarship awarded for maintaining GPA >= 3.85. Received: Semester 2/2024, Semester 1/2025, Semester 2/2025.',
  },
  {
    title: 'Rector\'s Certificate of Honours',
    school: 'Assumption University of Thailand',
    description:
      'Awarded for achieving GPA > 3.50 in an academic year. Received: Year 2, Year 3 and Year 4.',
  },
  {
    title: 'Outstanding Senior Project Award',
    school: 'Assumption University of Thailand',
    description:
      'Awarded to top 6 teams out of 56. Project: AUREX Exam Paper Automation System.',
  },
]

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <AnimatedSection>
        <div className={styles.header}>
          <p className={styles.label}>Recognition</p>
          <h2 className={styles.title}>Awards</h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className={styles.list} staggerDelay={0.12}>
        {awards.map((award) => (
          <StaggerItem key={award.title}>
            <article className={styles.card}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                  <path d="M12 2L14.09 8.26L20.18 8.27L15.18 12.14L17.27 18.4L12 14.53L6.73 18.4L8.82 12.14L3.82 8.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={styles.body}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <div className={styles.school}>{award.school}</div>
                <p className={styles.desc}>{award.description}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}