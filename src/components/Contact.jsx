import { motion, useReducedMotion } from 'framer-motion'
import { currentYear, profile } from '../data.js'
import { sectionReveal } from '../motion.js'

function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-inner page-shell">
        <span className="section-number">04 — CONTACT</span>
        <motion.h2 {...sectionReveal(reducedMotion)}>Let’s work<br /><em>together.</em></motion.h2>
        <div className="contact-bottom">
          <div>
            <div className="contact-rule" />
            <p>Have a project in mind or an opportunity to discuss?<br />I’d love to hear from you.</p>
          </div>
          <div className="contact-links">
            <motion.a
              className="button button-primary"
              href={`mailto:${profile.email}`}
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              Email me
              <svg className="button-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12l8-8M6 4h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              className="button button-outline"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              GitHub
              <svg className="button-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12l8-8M6 4h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              className="button button-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              LinkedIn
              <svg className="button-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12l8-8M6 4h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
        <div className="footer-meta">
          <span>{profile.location}</span>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
          <span>© {currentYear} Kavinsan Sasikumar</span>
        </div>
      </div>
    </footer>
  )
}

export default Contact
