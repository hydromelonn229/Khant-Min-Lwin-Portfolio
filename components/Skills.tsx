import styles from './Skills.module.css'

type Skill = { name: string; level: number }
type SkillGroup = { category: string; skills: Skill[] }

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming & Data',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL (MySQL, PostgreSQL)', level: 88 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 82 },
    ],
  },
  {
    category: 'Data Analysis',
    skills: [
      { name: 'EDA', level: 88 },
      { name: 'Data Cleaning', level: 90 },
      { name: 'Feature Engineering', level: 84 },
      { name: 'Statistical Analysis', level: 80 },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'Predictive Modeling', level: 78 },
      { name: 'NLP', level: 68 },
      { name: 'BERT', level: 62 },
    ],
  },
  {
    category: 'Visualization',
    skills: [
      { name: 'Power BI', level: 86 },
      { name: 'Tableau', level: 74 },
      { name: 'Matplotlib', level: 76 },
      { name: 'Seaborn', level: 76 },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'GitHub', level: 78 },
      { name: 'Web Scraping (BeautifulSoup)', level: 70 },
      { name: 'Excel (PivotTables, XLOOKUP, INDEX-MATCH)', level: 90 },
      { name: 'Power Query / DAX', level: 84 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Burmese', level: 100 },
      { name: 'English', level: 80 },
      { name: 'Japanese (JLPT N3)', level: 60 },
      { name: 'Thai', level: 35 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Toolkit</p>
        <h2 className={styles.title}>Skills</h2>
      </div>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.category} className={styles.groupCard}>
            <p className={styles.groupLabel}>{group.category}</p>
            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span key={skill.name} className={styles.skillChip}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
