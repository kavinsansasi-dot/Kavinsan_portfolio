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
      </nav>
    </header>
  )
}

export default Navbar
