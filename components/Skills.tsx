'use client'

import AnimatedSection from './AnimatedSection'
import styles from './Skills.module.css'

type SkillGroup = { category: string; skills: string[] }

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming & Data',
    skills: ['Python', 'SQL (MySQL, PostgreSQL)', 'Pandas', 'NumPy', 'Nextjs', 'Nodejs', 'Reactjs', 'API Integration (REST APIs)'],
  },
  {
    category: 'Data Analysis',
    skills: ['EDA', 'Data Cleaning', 'Feature Engineering', 'Statistical Analysis', 'Data Storytelling', 'Hypothesis Testing', 'A/B Testing'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn', 'Predictive Modeling', 'Regression Analysis', 'Classification Models', 'Clustering', 'Model Evaluation'],
  },
  {
    category: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Chart.js', 'Excel', 'Plotly', 'Streamlit', 'Dashboard Development'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['GitHub', 'Claude Code', 'Excel (PivotTables, XLOOKUP)', 'Antigravity', 'Google Colab', 'Jupyter Notebook'],
  },
  {
    category: 'Languages',
    skills: ['Burmese', 'English', 'Japanese (JLPT N3)', 'Thai'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <AnimatedSection>
        <div className={styles.header}>
          <p className={styles.label}>Toolkit</p>
          <h2 className={styles.title}>Skills</h2>
        </div>
      </AnimatedSection>

      <div className={styles.grid}>
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.category} delay={gi * 0.06} className={styles.groupCard}>
            <p className={styles.groupLabel}>{group.category}</p>
            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
