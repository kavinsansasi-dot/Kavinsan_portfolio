import { motion, useReducedMotion } from 'framer-motion'
import portrait from '../assets/me.jpg'
import { profile } from '../data.js'

function Hero() {
  const reducedMotion = useReducedMotion()
  const entranceDelay = reducedMotion ? 0 : 1.4

  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.p
          className="availability"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: entranceDelay }}
        >
          <span aria-hidden="true" /> Open to internships and junior roles
        </motion.p>
        <motion.p
          className="hero-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: entranceDelay + 0.1 }}
        >
          Full-stack developer <span>·</span> IT undergraduate
        </motion.p>
        <h1 id="hero-title" className="hero-title">
          <motion.span
            className="hero-name-line"
            initial={reducedMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Kavinsan
          </motion.span>
          <motion.span
            className="hero-name-line hero-name-second"
            initial={reducedMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.8,
              delay: reducedMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Sasikumar
          </motion.span>
        </h1>
        <motion.div
          className="hero-rule"
          initial={reducedMotion ? false : { width: 0 }}
          animate={{ width: 54 }}
          transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : 0.9 }}
        />
        <motion.p
          className="hero-summary"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: entranceDelay + 0.2 }}
        >
          {profile.summary}
        </motion.p>
        <div className="hero-actions">
          <motion.a
            className="button button-primary"
            href="#projects"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: entranceDelay + 0.3 }}
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            See my projects <span aria-hidden="true">↘</span>
          </motion.a>
          <motion.a
            className="button button-outline"
            href={`mailto:${profile.email}`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: entranceDelay + 0.4 }}
            whileHover={reducedMotion ? undefined : { y: -2 }}
          >
            Email me <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </div>
      <div className="hero-aside">
        <img
          className="hero-portrait"
          src={portrait}
          alt="Portrait of Kavinsan Sasikumar"
          width="768"
          height="955"
        />
      </div>
    </section>
  )
}

export default Hero
