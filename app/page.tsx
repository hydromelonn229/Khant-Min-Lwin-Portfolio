'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main>
        <Hero />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Projects />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Education />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Awards />
        <hr style={{ border: 'none', borderTop: '0.5px solid var(--rule)', margin: '0 3rem' }} />
        <Skills />
      </main>
      <Footer onContactClick={() => setIsContactOpen(true)} />

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
