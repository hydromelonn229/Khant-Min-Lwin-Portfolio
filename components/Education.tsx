'use client'

import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import styles from './Education.module.css'

type EducationItem = {
  years: string
  degree: string
  school: string
  description: string
  credentialUrl: string
}

const educationData: EducationItem[] = [
  {
    years: '2022-2026',
    degree: 'Bachelor of Science (Information Technology)',
    school: 'Assumption University of Thailand',
    description:
      'Major: Data Science and Informatics. GPA: 3.85/4.0.',
    credentialUrl: 'https://drive.google.com/file/d/12AoeNgHDTQ4_pgXGtNhyuIgPcqaAR50L/view?usp=sharing',
  },
  {
    years: '04/2024',
    degree: 'Google Data Analytics Professional Certificate',
    school: 'Certification',
    description:
      'Focused on data cleaning, analysis, visualisation, and practical analytics workflows.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/DUC46F5NMW54',
  },
  {
    years: '01/2026',
    degree: 'DataCamp Data Analyst Associate',
    school: 'Certification',
    description:
      'Validated skills in exploratory analysis, data wrangling, and analytical problem solving.',
    credentialUrl: 'https://www.datacamp.com/certificate/DAA0013881767573',
  },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <AnimatedSection>
        <div className={styles.header}>
          <p className={styles.label}>Background</p>
          <h2 className={styles.title}>Education</h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className={styles.list} staggerDelay={0.12}>
        {educationData.map((item, i) => (
          <StaggerItem key={i}>
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`Open credential for ${item.degree}`}
            >
              <div className={styles.card}>
                <div className={styles.year}>{item.years}</div>
                <div>
                  <div className={styles.degree}>{item.degree}</div>
                  <div className={styles.school}>{item.school}</div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
