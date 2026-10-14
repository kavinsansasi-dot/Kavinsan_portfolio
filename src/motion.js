export function sectionReveal(reducedMotion, delay = 0) {
  return {
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: reducedMotion ? { duration: 0 } : { duration: 0.6, delay },
  }
}
