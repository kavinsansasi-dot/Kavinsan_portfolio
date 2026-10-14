import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects, profile } from '../data.js'
import { sectionReveal } from '../motion.js'

function Projects() {
  const [openProject, setOpenProject] = useState(0)
  const reducedMotion = useReducedMotion()

  return (
    <section className="editorial-section page-shell" id="projects">
      <div className="section-label">
        <span className="section-number">01</span>
        <motion.h2 {...sectionReveal(reducedMotion)}>Selected<br />projects</motion.h2>
        <p>Things I’ve built with care, curiosity and a good deal of coffee.</p>
      </div>
      <div className="section-content project-list">
        {projects.map((project, index) => {
          const isOpen = openProject === index
          const panelId = `project-details-${index}`
          return (
            <motion.article
              className={`project-row${isOpen ? ' is-open' : ''}`}
              key={project.repo}
              {...sectionReveal(reducedMotion, index * 0.06)}
              whileHover={reducedMotion ? undefined : { x: 12, transition: { duration: 0.2 } }}
            >
              <button
                className="project-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenProject(isOpen ? null : index)}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-heading">
                  <span className="project-title">{project.title}</span>
                  <span className="project-category">{project.category}</span>
                </span>
                <motion.span
                  className="expand-icon"
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.35 }}
                >
                  {isOpen ? '−' : '+'}
                </motion.span>
              </button>
              <div id={panelId}>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="project-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reducedMotion ? 0 : 0.35 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="project-description">{project.description}</p>
                      {project.highlights.length > 0 && (
                        <ul className="project-highlights">
                          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                      )}
                      <div className="chip-list" aria-label={`${project.title} technology stack`}>
                        {project.stack.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
                      </div>
                      <a
                        className="text-link"
                        href={`${profile.github}/${project.repo}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View code on GitHub <span aria-hidden="true">↗</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
