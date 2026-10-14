import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappUrl } from './data.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const [isContactVisible, setIsContactVisible] = useState(false)

  useEffect(() => {
    const contactSection = document.getElementById('contact')
    if (!contactSection) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
    )
    observer.observe(contactSection)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {!reducedMotion && (
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      )}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
      {!isContactVisible && (
        <a
          className="floating-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="floating-whatsapp-icon" size={28} aria-hidden="true" />
        </a>
      )}
    </>
  )
}

export default App
