import { motion, useReducedMotion } from 'framer-motion'
import { education } from '../data.js'
import { sectionReveal } from '../motion.js'

function Education() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="editorial-section page-shell" id="education">
      <div className="section-label">
        <span className="section-number">03</span>
        <motion.h2 {...sectionReveal(reducedMotion)}>Learning<br />by design</motion.h2>
        <p>Building a strong foundation, one lesson and project at a time.</p>
      </div>
      <div className="section-content education-list">
        {education.map((item, index) => (
          <motion.article
            className="education-row"
            key={item.degree}
            {...sectionReveal(reducedMotion, index * 0.06)}
          >
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
            <span className="education-dates">{item.dates}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Education
