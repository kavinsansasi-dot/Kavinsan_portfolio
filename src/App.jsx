import { motion, useReducedMotion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

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
    </>
  )
}

export default App
