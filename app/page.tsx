import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Education />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Projects />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Awards />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
