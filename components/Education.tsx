import styles from './Education.module.css'

const educationData = [
  {
    years: '2022-2026',
    degree: 'Bachelor of Science (Information Technology)',
    school: 'Assumption University of Thailand',
    description:
      'Major: Data Science and Informatics. GPA: 3.85/4.0.',
  },
  {
    years: '04/2024',
    degree: 'Google Data Analytics Professional Certificate',
    school: 'Certification',
    description:
      'Focused on data cleaning, analysis, visualisation, and practical analytics workflows.',
  },
  {
    years: '01/2026',
    degree: 'DataCamp Data Analyst Associate',
    school: 'Certification',
    description:
      'Validated skills in exploratory analysis, data wrangling, and analytical problem solving.',
  },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Background</p>
        <h2 className={styles.title}>Education</h2>
      </div>
      <div className={styles.list}>
        {educationData.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.year}>{item.years}</div>
            <div>
              <div className={styles.degree}>{item.degree}</div>
              <div className={styles.school}>{item.school}</div>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
