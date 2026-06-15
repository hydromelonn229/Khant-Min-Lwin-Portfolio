'use client'

import Image from 'next/image'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import styles from './Projects.module.css'

type Project = {
  type: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  googleColabUrl?: string
  image?: string
  icon: React.ReactNode
}

const BarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="16" width="6" height="16" stroke="currentColor" strokeWidth="1.2" />
    <rect x="15" y="10" width="6" height="22" stroke="currentColor" strokeWidth="1.2" />
    <rect x="26" y="4" width="6" height="28" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const PieIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.2" />
    <path d="M18 5 L18 18 L28 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LineIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <polyline points="4,28 12,16 20,22 28,8 32,12" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GridIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="4" width="12" height="12" stroke="currentColor" strokeWidth="1.2" rx="1" />
    <rect x="20" y="4" width="12" height="12" stroke="currentColor" strokeWidth="1.2" rx="1" />
    <rect x="4" y="20" width="12" height="12" stroke="currentColor" strokeWidth="1.2" rx="1" />
    <rect x="20" y="20" width="12" height="12" stroke="currentColor" strokeWidth="1.2" rx="1" />
  </svg>
)

const ScanIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="6" width="20" height="26" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <line x1="8" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="8" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="8" y1="23" x2="15" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="22" y="20" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M25 25 L27 27 L31 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const projectsData: Project[] = [
  {
    type: 'Retention Strategy',
    title: 'Bank Customer Churn Analysis',
    description:
      'Processed and analysed a multi-sheet dataset of 10,000+ records, identifying a 20% churn rate through EDA. Highlighted 700+ high-value customers for retention campaigns with a projected 36% conversion potential.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Streamlit'],
    githubUrl: 'https://github.com/hydromelonn229/Bank-Churn-Customer-Analysis',
    image: '/Churn Analysis.png',
    icon: <PieIcon />,
  },
  {
    type: 'Workforce Analytics',
    title: 'Understanding Attrition Drivers',
    description:
      'Developed a 4-page Power BI dashboard analysing workforce composition, salary equity, performance distribution, and attrition drivers across a 2M-record HR dataset. Translated raw HR data into actionable workforce insights by department and job level.',
    tags: ['Python', 'Power BI'],
    githubUrl: 'https://github.com/hydromelonn229/HR_data_analysis',
    image: '/Retention Analysis.png',
    icon: <LineIcon />,
  },
  {
    type: 'Predictive Modelling',
    title: 'Flight Delay Prediction & Analytics',
    description:
      'Built an end-to-end machine learning pipeline and Streamlit dashboard to predict monthly route delay risk using 98,000+ flight records. Engineered cyclical seasonality features and Bayesian-smoothed airport rankings, and deployed Logistic Regression and Random Forest models achieving up to 74% recall.',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    githubUrl: 'https://github.com/hydromelonn229/flight-delay-prediction',
    image: '/flight_delay_dashboard.png',
    icon: <BarIcon />,
  },
  {
    type: 'Computer Vision · AI',
    title: 'Receipt Field Detection',
    description:
      'Fine-tuned a YOLOv8s model to automatically detect and localise 7 key fields in receipt and invoice images — including seller name, VAT number, product descriptions, quantities, prices, and total due. Built a full pipeline covering LabelMe annotation, label conversion, data augmentation (3× dataset expansion), and model training over 100 epochs.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Albumentations'],
    githubUrl: 'https://github.com/hydromelonn229/Receipt-Field-Detection',
    image: '/train_batch2.jpg',
    icon: <ScanIcon />,
  },
  {
    type: 'Automation System',
    title: 'AUREX Exam Paper Automation System',
    description:
      'Built a privacy-preserving system to automate exam paper generation for large university courses. Reduced exam preparation time by 95% and created an end-to-end pipeline with Excel input, NLP-based duplicate detection, and automated Word document generation.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Flask'],
    githubUrl: 'https://github.com/hydromelonn229/aurex-exam-automation-tool',
    image: '/AUREX.png',
    icon: <GridIcon />,
  },
  {
    type: 'Ticket Management Platform',
    title: 'DTG FieldLink',
    description:
      'DTG FieldLink is a dual-platform Field Service Management System that streamlines ISP maintenance operations by connecting dispatchers and field technicians through real-time ticket management, mobile workforce tools, and automated reporting.',
    tags: ['Web App', 'Ticketing', 'Platform'],
    githubUrl: 'https://github.com/hydromelonn229/DTG_FieldLink',
    image: '/DTG FieldLink.png',
    icon: <LineIcon />,
  },
]

/* ── Project Card ── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'contain', padding: '0.75rem' }}
          />
        ) : (
          project.icon
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.type}>{project.type}</p>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.links}>
            {project.githubUrl && (
              <a href={project.githubUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            )}
            {project.googleColabUrl && (
              <a href={project.googleColabUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
                Colab →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main Projects section ── */
export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <AnimatedSection>
        <div className={styles.header}>
          <p className={styles.label}>Work</p>
          <h2 className={styles.title}>Projects</h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className={styles.grid} staggerDelay={0.1}>
        {projectsData.map((project, i) => (
          <StaggerItem key={project.title + i}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
