import { motion, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { currentYear, profile, whatsappUrl } from '../data.js'
import { sectionReveal } from '../motion.js'

function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-inner page-shell">
        <span className="section-number">04 — CONTACT</span>
        <motion.h2 {...sectionReveal(reducedMotion)}>Let's<br /><span className="gold">connect.</span></motion.h2>
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
              <FiMail size={18} aria-hidden="true" />
              Email me
            </motion.a>
            <motion.a
              className="button button-outline"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              <FaGithub size={18} aria-hidden="true" />
              GitHub
            </motion.a>
            <motion.a
              className="button button-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              <FaLinkedinIn size={18} aria-hidden="true" />
              LinkedIn
            </motion.a>
            <motion.a
              className="button button-outline"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              WhatsApp
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
