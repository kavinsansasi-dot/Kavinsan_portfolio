import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data.js'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="site-header" id="top">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label={`${profile.name} home`}>
          ＫＡＶＩＮＳＡＮ
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-social-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} aria-hidden="true" />
          </a>
          <a
            className="nav-resume"
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="resume-label">Resume</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
