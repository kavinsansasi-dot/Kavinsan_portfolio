import { motion, useReducedMotion } from 'framer-motion'
import { familiarWith, skills } from '../data.js'
import { sectionReveal } from '../motion.js'

function Skills() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="editorial-section page-shell" id="skills">
      <div className="section-label">
        <span className="section-number">02</span>
        <motion.h2 {...sectionReveal(reducedMotion)}>Tools of<br />the trade</motion.h2>
        <p>A flexible toolkit for building thoughtful products from end to end.</p>
      </div>
      <div className="section-content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-cell"
              key={skill.title}
              {...sectionReveal(reducedMotion, index * 0.06)}
            >
              <h3>{skill.title}</h3>
              <p>{skill.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="familiar-list">
          <h3>Also familiar with</h3>
          <div className="chip-list">
            {familiarWith.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
