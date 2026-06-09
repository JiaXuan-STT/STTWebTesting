import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#1e40af"/>
              <path d="M10 22c2-4 4-8 8-8s6 4 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="18" cy="13" r="2.5" fill="#f97316"/>
            </svg>
          </div>
          <span className="navbar__logo-text">
            Smart<span>Touch</span>
          </span>
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__cta-mobile">
            <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
          </div>
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary navbar__cta-desktop">Book a Demo</Link>
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
