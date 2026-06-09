import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Solutions.css'

const solutions = [
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Manage large workforces across production lines and shifts. Biometric terminals at factory gates, overtime tracking, and statutory payroll compliance.',
    useCases: [
      'Multi-shift attendance & OT tracking',
      'Biometric gate access control',
      'Foreign worker dormitory management',
      'Canteen meal subsidy for workers',
      'Job costing per production line',
    ],
    products: ['Payroll System', 'Biometric Terminals', 'Dormitory Management', 'Canteen System'],
  },
  {
    icon: '🏗️',
    title: 'Construction',
    desc: 'Track contract workers across project sites with rugged biometric devices. Monitor labour compliance and project workforce costs in real time.',
    useCases: [
      'Site biometric attendance',
      'Contract worker management',
      'Project labour cost tracking',
      'Safety compliance reporting',
      'Multi-site centralized control',
    ],
    products: ['Construction Site System', 'Job Costing', 'Access Control', 'Biometric Devices'],
  },
  {
    icon: '🏨',
    title: 'Hospitality',
    desc: 'Handle complex shift rosters, seasonal staffing, and multi-property payroll for hotels, resorts, and F&B operations.',
    useCases: [
      'Complex shift rostering',
      'Leave & claims via mobile app',
      'Multi-outlet attendance tracking',
      'Visitor management at reception',
      'Payroll compliance',
    ],
    products: ['Payroll System', 'SmartGoGo App', 'SmartLeave', 'Visitor Management'],
  },
  {
    icon: '🛒',
    title: 'Retail & F&B',
    desc: 'Manage part-time and full-time staff attendance, shift scheduling, and payroll across multiple outlets with ease.',
    useCases: [
      'Part-time shift management',
      'Multi-outlet attendance',
      'Mobile claim submission',
      'Automated payroll per outlet',
      'Staff performance tracking',
    ],
    products: ['Payroll System', 'Attendance System', 'SmartGoGo App', 'SmartClaim'],
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Ensure strict compliance for healthcare workforce. Manage 24/7 shift rosters, overtime, and credentialing with audit-ready reporting.',
    useCases: [
      '24/7 shift management',
      'Visitor & patient management',
      'Door access for restricted zones',
      'Staff overtime tracking',
      'Leave management',
    ],
    products: ['Attendance System', 'Visitor Management', 'Access Control', 'SmartLeave'],
  },
  {
    icon: '🏢',
    title: 'Corporate Offices',
    desc: 'Elevate your office HR experience. Automate payroll, digitize leave and claims, and welcome visitors with a professional VMS.',
    useCases: [
      'Automated payroll processing',
      'Digital leave application',
      'Expense claim management',
      'Visitor pre-registration',
      'Employee self-service portal',
    ],
    products: ['Payroll System', 'SmartLeave', 'SmartClaim', 'Visitor Management'],
  },
  {
    icon: '🚚',
    title: 'Logistics & Transportation',
    desc: 'Track field drivers and warehouse staff with GPS attendance and ensure accurate payroll for complex driver pay structures.',
    useCases: [
      'GPS mobile attendance',
      'Driver allowance management',
      'Warehouse biometric check-in',
      'Shift allowance automation',
      'Multi-depot management',
    ],
    products: ['SmartGoGo App', 'Payroll System', 'Attendance System', 'SmartClaim'],
  },
  {
    icon: '🎓',
    title: 'Education',
    desc: 'Manage academic and administrative staff payroll, track attendance across campuses, and simplify leave management for educators.',
    useCases: [
      'Academic payroll structures',
      'Multi-campus attendance',
      'Leave approval workflows',
      'Visitor management for campuses',
      'Statutory compliance',
    ],
    products: ['Payroll System', 'SmartLeave', 'Attendance System', 'Visitor Management'],
  },
]

export default function Solutions() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="solutions-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Industry Solutions</span>
          <h1 className="page-hero__title">Tailored for Your Industry</h1>
          <p className="page-hero__subtitle">
            Smart Touch Technology is deployed across manufacturing, construction, hospitality, retail, healthcare, and more — with configurations built for each sector's unique needs.
          </p>
          <div className="page-hero__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
            <Link to="/products" className="btn btn-secondary btn-lg">See All Products</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map(sol => (
              <div key={sol.title} className="solution-card">
                <div className="solution-card__icon">{sol.icon}</div>
                <h3 className="solution-card__title">{sol.title}</h3>
                <p className="solution-card__desc">{sol.desc}</p>

                <div className="solution-card__section">
                  <h4 className="solution-card__section-title">Common Use Cases</h4>
                  <ul className="solution-card__list">
                    {sol.useCases.map(uc => (
                      <li key={uc}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14"><polyline points="20 6 9 17 4 12"/></svg>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="solution-card__products">
                  <h4 className="solution-card__section-title">Key Products Used</h4>
                  <div className="solution-card__tags">
                    {sol.products.map(p => (
                      <span key={p} className="solution-tag">{p}</span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="solution-card__cta">
                  Get a Custom Demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Don't See Your Industry?</h2>
              <p className="cta-banner__subtitle">Smart Touch is highly configurable. Contact our team and we'll show you how it fits your unique business requirements.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
