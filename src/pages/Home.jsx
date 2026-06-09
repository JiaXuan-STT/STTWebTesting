import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Companies Served' },
  { value: '2', label: 'Countries: MY & SG' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
]

const productCategories = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    badge: 'HRMS',
    title: 'Human Resource Management',
    desc: 'Complete payroll, leave, claims, and attendance automation. Fully compliant with EPF, SOCSO, EIS, and PCB regulations.',
    features: ['Payroll Automation', 'Leave Management', 'Claims & Expense', 'SmartGoGo App'],
    color: 'blue',
    to: '/products#hrms',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    badge: 'Operations',
    title: 'Operational Systems',
    desc: 'Manage visitor check-ins, dormitory occupancy, canteen subsidies, and job costing — all from one platform.',
    features: ['Visitor Management', 'Dormitory System', 'Canteen & Meals', 'Job Costing'],
    color: 'teal',
    to: '/products#operational',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    badge: 'Security',
    title: 'Access Control & Biometrics',
    desc: 'Protect your premises with biometric face recognition, fingerprint terminals, door access, turnstiles, and barriers.',
    features: ['Face Recognition', 'Fingerprint Terminals', 'Door Access Control', 'Turnstiles & Barriers'],
    color: 'orange',
    to: '/products#security',
  },
]

const keyFeatures = [
  {
    icon: '⚡',
    title: 'Real-Time Attendance',
    desc: 'Live attendance collection from biometric devices, mobile app, and web — synced instantly to the dashboard.',
  },
  {
    icon: '🛡️',
    title: 'Biometric Verification',
    desc: 'Face recognition and fingerprint scanning eliminate buddy punching and ensure accurate workforce records.',
  },
  {
    icon: '📱',
    title: 'GPS Mobile Attendance',
    desc: 'SmartGoGo app allows employees to clock in/out from the field with GPS validation and geofencing.',
  },
  {
    icon: '🏢',
    title: 'Multi-Branch Support',
    desc: 'Manage multiple branches and shifts from a single cloud platform with centralized reporting.',
  },
  {
    icon: '☁️',
    title: 'Cloud & On-Premises',
    desc: 'Flexible deployment — choose cloud SaaS for instant setup or on-premises for full data control.',
  },
  {
    icon: '📊',
    title: 'Real-Time Dashboards',
    desc: 'Visual dashboards, alerts, and automated reports give management instant operational visibility.',
  },
]

const industries = [
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Hospitality', icon: '🏨' },
  { name: 'Retail & F&B', icon: '🛒' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Education', icon: '🎓' },
  { name: 'Logistics', icon: '🚚' },
  { name: 'Corporate', icon: '🏢' },
]

const faqs = [
  {
    q: 'Does Smart Touch support Malaysian statutory compliance?',
    a: 'Yes. Our payroll system is fully compliant with EPF, SOCSO, EIS, and PCB (income tax) regulations, with automatic monthly updates.',
  },
  {
    q: 'Can the system handle multiple branches and companies?',
    a: 'Absolutely. The platform supports multi-company, multi-branch configurations with centralized or department-level reporting.',
  },
  {
    q: 'What biometric devices are supported?',
    a: 'We support face recognition terminals, fingerprint scanners, card readers, and mobile app-based attendance via SmartGoGo.',
  },
  {
    q: 'Is there a mobile app for employees?',
    a: 'Yes. SmartGoGo lets employees clock in/out via GPS, apply for leave, submit claims, and view payslips from their smartphone.',
  },
  {
    q: 'Do you offer cloud and on-premises deployment?',
    a: 'Both options are available. Cloud deployment offers rapid setup and auto-updates; on-premises gives full data sovereignty.',
  },
]

export default function Home() {
  return (
    <main className="home">
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero__bg-shapes" aria-hidden="true">
          <div className="hero__shape hero__shape-1" />
          <div className="hero__shape hero__shape-2" />
          <div className="hero__shape hero__shape-3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content animate-fade-in-up">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Trusted across Malaysia &amp; Singapore
            </div>
            <h1 className="hero__title">
              Smarter Workforces,{' '}
              <span className="hero__title-accent">Safer Operations</span>
            </h1>
            <p className="hero__subtitle">
              Smart Touch Technology delivers integrated HRMS, payroll, biometric attendance, access control, and operational management — all in one connected platform.
            </p>
            <p className="hero__tagline-pill">"PAL is always with you."</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/products" className="btn btn-secondary btn-lg">
                Explore Products
              </Link>
            </div>
          </div>
          <div className="hero__visual animate-fade-in-up animate-fade-in-up-delay-2">
            <div className="hero__dashboard">
              <div className="hero__dashboard-header">
                <div className="hero__dashboard-dots">
                  <span /><span /><span />
                </div>
                <span className="hero__dashboard-title">PAL Dashboard</span>
              </div>
              <div className="hero__dashboard-stats">
                <div className="hero__stat-card">
                  <div className="hero__stat-icon hero__stat-icon--green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <div className="hero__stat-value">1,248</div>
                    <div className="hero__stat-label">Present Today</div>
                  </div>
                </div>
                <div className="hero__stat-card">
                  <div className="hero__stat-icon hero__stat-icon--blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <div className="hero__stat-value">43</div>
                    <div className="hero__stat-label">On Leave</div>
                  </div>
                </div>
                <div className="hero__stat-card">
                  <div className="hero__stat-icon hero__stat-icon--orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                  </div>
                  <div>
                    <div className="hero__stat-value">RM 284k</div>
                    <div className="hero__stat-label">Monthly Payroll</div>
                  </div>
                </div>
              </div>
              <div className="hero__dashboard-bar-chart">
                <div className="hero__bar-label">Weekly Attendance</div>
                <div className="hero__bars">
                  {[78, 92, 88, 95, 90, 72, 60].map((h, i) => (
                    <div key={i} className="hero__bar-wrap">
                      <div className="hero__bar" style={{ height: `${h}%` }} />
                      <span>{['M','T','W','T','F','S','S'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map(s => (
              <div key={s.label} className="stats__item">
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Product Categories ===== */}
      <section className="section products-overview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">One Platform, Complete Workforce Control</h2>
            <p className="section-subtitle">
              From HR and payroll to security and operations — Smart Touch integrates every touchpoint of your workforce.
            </p>
          </div>
          <div className="product-categories">
            {productCategories.map(cat => (
              <div key={cat.title} className={`product-cat product-cat--${cat.color}`}>
                <div className="product-cat__icon">{cat.icon}</div>
                <span className="badge badge-blue product-cat__badge">{cat.badge}</span>
                <h3 className="product-cat__title">{cat.title}</h3>
                <p className="product-cat__desc">{cat.desc}</p>
                <ul className="product-cat__features">
                  {cat.features.map(f => (
                    <li key={f}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={cat.to} className="product-cat__link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Key Features</span>
            <h2 className="section-title">Everything You Need to Manage Your Workforce</h2>
            <p className="section-subtitle">
              Built for the realities of Malaysian and Singaporean businesses — multi-shift, multi-branch, and statutory-compliant.
            </p>
          </div>
          <div className="grid-3 features-grid">
            {keyFeatures.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Industries ===== */}
      <section className="section-sm industries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries Served</span>
            <h2 className="section-title">Built for Every Sector</h2>
          </div>
          <div className="industries-grid">
            {industries.map(ind => (
              <Link to="/solutions" key={ind.name} className="industry-chip">
                <span className="industry-chip__icon">{ind.icon}</span>
                <span>{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Start Your Payroll Automation Today</h2>
              <p className="cta-banner__subtitle">
                Join hundreds of Malaysian and Singaporean companies already saving time and reducing errors with Smart Touch Technology.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Demo</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-item__q">{faq.q}</h3>
                <p className="faq-item__a">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>Still have questions?</p>
            <Link to="/contact" className="btn btn-primary">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
