import styles from './Awards.module.css'

const awards = [
  {
    title: 'Academic Merit Scholarship',
    school: 'Assumption University of Thailand',
    description:
      'Full scholarship awarded for maintaining GPA >= 3.85. Received: Semester 2/2024, Semester 1/2025, Semester 2/2025.',
  },
  {
    title: 'President\'s Certificate of Honours',
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
      <div className={styles.header}>
        <p className={styles.label}>Recognition</p>
        <h2 className={styles.title}>Awards</h2>
      </div>

      <div className={styles.list}>
        {awards.map((award) => (
          <article key={award.title} className={styles.card}>
            <div className={styles.body}>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <div className={styles.school}>{award.school}</div>
              <p className={styles.desc}>{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}