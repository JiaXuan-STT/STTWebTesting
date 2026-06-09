import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: '🎯',
    title: 'Real-World Solutions',
    desc: 'We build software that solves actual problems faced by Malaysian and Singaporean businesses — not theoretical features.',
  },
  {
    icon: '🔗',
    title: 'Integrated Platform',
    desc: 'Every module connects seamlessly. HR, payroll, attendance, access control — all sharing one database, one truth.',
  },
  {
    icon: '📈',
    title: 'Scalable Technology',
    desc: 'From 10-employee SMEs to 5,000-worker factories, Smart Touch scales to match your growth without friction.',
  },
  {
    icon: '🛡️',
    title: 'Compliance First',
    desc: 'Malaysian statutory requirements change. We update EPF, SOCSO, EIS, and PCB rules so you never fall behind.',
  },
  {
    icon: '🤝',
    title: 'Partnership Approach',
    desc: 'We don\'t just sell software — we partner with you for onboarding, training, and ongoing support.',
  },
  {
    icon: '☁️',
    title: 'Flexible Deployment',
    desc: 'Cloud or on-premises. We adapt to your IT policy and infrastructure, not the other way around.',
  },
]

const milestones = [
  { year: 'Founded', event: 'Smart Touch Technology established in Johor, Malaysia' },
  { year: 'HRMS', event: 'Launched integrated payroll and attendance management system' },
  { year: 'Biometrics', event: 'Introduced face recognition and fingerprint biometric devices' },
  { year: 'Mobile', event: 'Released SmartGoGo mobile app for GPS attendance and self-service' },
  { year: 'Operations', event: 'Expanded to visitor management, dormitory, and canteen systems' },
  { year: 'Today', event: 'Serving 500+ companies across Malaysia and Singapore' },
]

export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1 className="page-hero__title">Built in Malaysia, for Malaysian Businesses</h1>
          <p className="page-hero__subtitle">
            Smart Touch Technology has spent over a decade solving real-world HR and operational challenges using integrated, scalable technology.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__content">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Smarter Workforces. Safer Operations.</h2>
              <p className="about-mission__text">
                Smart Touch Technology was founded with a single goal: to give Malaysian and Singaporean businesses the same workforce management tools that large enterprises take for granted — but built for local compliance, local needs, and local scale.
              </p>
              <p className="about-mission__text">
                We trace our roots to payroll and attendance systems and have expanded into a complete workforce management platform covering HRMS, biometric access control, visitor management, dormitory, canteen, and operational systems.
              </p>
              <p className="about-mission__tagline">"PAL is always with you."</p>
            </div>
            <div className="about-mission__visual">
              <div className="about-visual-card">
                <div className="about-visual-stat">
                  <span className="about-visual-stat__num">500+</span>
                  <span className="about-visual-stat__label">Companies Served</span>
                </div>
                <div className="about-visual-divider" />
                <div className="about-visual-stat">
                  <span className="about-visual-stat__num">2</span>
                  <span className="about-visual-stat__label">Countries: Malaysia &amp; Singapore</span>
                </div>
                <div className="about-visual-divider" />
                <div className="about-visual-stat">
                  <span className="about-visual-stat__num">10+</span>
                  <span className="about-visual-stat__label">Years of Experience</span>
                </div>
                <div className="about-visual-divider" />
                <div className="about-visual-stat">
                  <span className="about-visual-stat__num">12+</span>
                  <span className="about-visual-stat__label">Integrated Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section about-journey">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">A Decade of Innovation</h2>
          </div>
          <div className="journey-timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`journey-item${i % 2 === 0 ? '' : ' journey-item--right'}`}>
                <div className="journey-item__dot" />
                <div className="journey-item__card">
                  <span className="journey-item__year">{m.year}</span>
                  <p className="journey-item__event">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section about-contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Our Office</h2>
          </div>
          <div className="about-contact-grid">
            <div className="about-contact-card">
              <div className="about-contact-info">
                <div className="about-contact-item">
                  <div className="about-contact-icon">📍</div>
                  <div>
                    <strong>Address</strong>
                    <p>36-02 &amp; 36-03, Jalan Permas 10<br/>Bandar Baru Permas Jaya<br/>81750 Masai, Johor, Malaysia</p>
                  </div>
                </div>
                <div className="about-contact-item">
                  <div className="about-contact-icon">📞</div>
                  <div>
                    <strong>Phone</strong>
                    <p>+607-388 9903<br/>+6011-5354 9903</p>
                  </div>
                </div>
                <div className="about-contact-item">
                  <div className="about-contact-icon">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <p>sales@smartouch.com.my</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{marginTop: '32px', alignSelf: 'flex-start'}}>Get in Touch</Link>
            </div>
            <div className="about-map-placeholder">
              <div className="about-map-inner">
                <div className="about-map-pin">📍</div>
                <p>Masai, Johor, Malaysia</p>
                <span>Smart Touch Technology HQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Ready to Work With Us?</h2>
              <p className="cta-banner__subtitle">Book a free demo and see how Smart Touch can transform your workforce management.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
