import { Link } from 'react-router-dom'
import './Footer.css'

const products = [
  'Payroll System',
  'Attendance Management',
  'SmartGoGo Mobile App',
  'SmartLeave',
  'SmartClaim',
  'Visitor Management System',
  'Dormitory Management',
  'Canteen Management',
  'Access Control',
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="#1e40af"/>
                  <path d="M10 22c2-4 4-8 8-8s6 4 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="18" cy="13" r="2.5" fill="#f97316"/>
                </svg>
              </div>
              <span>Smart<span>Touch</span></span>
            </Link>
            <p className="footer__tagline">
              PAL is always with you. Smarter workforces, safer operations, and workforce automation for Malaysia and Singapore.
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>36-02 &amp; 36-03, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Masai, Johor, Malaysia</span>
              </div>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                <span>+607-388 9903 &nbsp;|&nbsp; +6011-5354 9903</span>
              </div>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>sales@smartouch.com.my</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <ul className="footer__col-links">
              {products.map(p => (
                <li key={p}>
                  <Link to="/products">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-links">
              {company.map(c => (
                <li key={c.to}>
                  <Link to={c.to}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Get Started</h4>
            <p className="footer__get-started-text">Ready to automate your HR and attendance processes?</p>
            <Link to="/contact" className="btn btn-primary footer__cta">Book a Demo</Link>
            <Link to="/contact" className="btn btn-secondary footer__cta-2">Contact Sales</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Smart Touch Technology Sdn Bhd. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
