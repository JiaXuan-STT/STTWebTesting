import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Products.css'

const hrmsProducts = [
  {
    id: 'payroll',
    icon: '💰',
    title: 'Payroll System',
    badge: 'Core HR',
    desc: 'Fully automated salary processing that handles all Malaysian statutory requirements. Calculate overtime, allowances, bonuses, deductions, and generate payslips in minutes.',
    features: [
      'EPF, SOCSO, EIS & PCB compliance',
      'Overtime & shift allowance calculation',
      'Bonus and deduction management',
      'Automated payslip generation',
      'Bank file export (Maybank, CIMB, etc.)',
      'Year-end EA form generation',
    ],
  },
  {
    id: 'attendance',
    icon: '🕐',
    title: 'Attendance & Time Management',
    badge: 'Time Tracking',
    desc: 'Capture attendance from any device — biometric terminals, face recognition cameras, mobile app, or web. Supports complex shift patterns and multi-location businesses.',
    features: [
      'Face recognition & fingerprint biometrics',
      'Card and PIN-based attendance',
      'Mobile & web check-in',
      'Shift scheduling & roster management',
      'Overtime auto-calculation',
      'Real-time attendance dashboard',
    ],
  },
  {
    id: 'smartgogo',
    icon: '📱',
    title: 'SmartGoGo Mobile App',
    badge: 'Mobile',
    desc: 'Empower your mobile workforce. Employees can clock in/out using GPS, apply for leave, submit claims, view payslips, and receive approvals — all from their smartphone.',
    features: [
      'GPS attendance with geofencing',
      'Leave application & approval',
      'Expense claim submission',
      'Payslip viewing',
      'Push notifications for approvals',
      'Offline mode support',
    ],
  },
  {
    id: 'smartleave',
    icon: '🗓️',
    title: 'SmartLeave (Leave Management)',
    badge: 'Leave',
    desc: 'Streamline leave applications, approvals, and balances. Configure custom leave types, approval workflows, and leave entitlement rules that match your company policy.',
    features: [
      'Online leave application',
      'Multi-level approval workflows',
      'Leave balance tracking',
      'Custom leave types & policies',
      'Public holiday management',
      'Leave reports & analytics',
    ],
  },
  {
    id: 'smartclaim',
    icon: '🧾',
    title: 'SmartClaim (Claims Management)',
    badge: 'Claims',
    desc: 'Digitize your expense claim process. Employees submit receipts via app, managers approve with one click, and finance processes reimbursements automatically.',
    features: [
      'Digital receipt submission',
      'Expense category management',
      'Approval workflow routing',
      'Reimbursement processing',
      'Claim limit enforcement',
      'Audit trail & reporting',
    ],
  },
]

const operationalProducts = [
  {
    id: 'vms',
    icon: '🏢',
    title: 'Visitor Management System (VMS)',
    badge: 'Security',
    desc: 'Create a professional, paperless visitor experience. Visitors pre-register online, check in via QR code or kiosk, and hosts are notified instantly.',
    features: [
      'QR code & kiosk check-in',
      'Pre-registration via web/mobile',
      'Host notification via SMS/email',
      'Visitor badge printing',
      'Visitor history & blacklist',
      'Access integration with turnstiles',
    ],
  },
  {
    id: 'dormitory',
    icon: '🏠',
    title: 'Dormitory Management System',
    badge: 'Operations',
    desc: 'Manage worker accommodation efficiently. Track room allocation, occupancy, maintenance, and generate compliance reports for regulatory submission.',
    features: [
      'Room allocation management',
      'Occupancy tracking & reporting',
      'Worker attendance monitoring',
      'Maintenance request tracking',
      'Regulatory compliance reports',
      'Multi-site management',
    ],
  },
  {
    id: 'canteen',
    icon: '🍽️',
    title: 'Canteen Subsidy & Meal Management',
    badge: 'Operations',
    desc: 'Control meal entitlements and subsidies precisely. Employees consume meals using QR codes, cards, or face recognition — subsidies are deducted automatically.',
    features: [
      'Meal entitlement configuration',
      'QR / card / face consumption',
      'Subsidy control per employee',
      'Daily meal count reporting',
      'Integration with payroll deductions',
      'Multi-canteen support',
    ],
  },
  {
    id: 'jobcosting',
    icon: '📐',
    title: 'Job Costing System',
    badge: 'Finance',
    desc: 'Track labour hours and costs per project or cost center. Understand your true labour cost for better project bidding and profitability analysis.',
    features: [
      'Labour hour tracking per project',
      'Project cost reporting',
      'Cost center management',
      'Overtime cost allocation',
      'Budget vs actual comparison',
      'Integration with payroll',
    ],
  },
  {
    id: 'construction',
    icon: '🏗️',
    title: 'Construction Site System',
    badge: 'Industry',
    desc: 'Purpose-built for construction sites. Manage contract workers, site attendance, access control, and project workforce compliance from a single platform.',
    features: [
      'Rugged biometric site terminals',
      'Contract worker management',
      'Site access control',
      'Project workforce monitoring',
      'Safety compliance reports',
      'Multi-site centralized dashboard',
    ],
  },
]

const securityProducts = [
  {
    id: 'access',
    icon: '🔐',
    title: 'Access Control Solutions',
    badge: 'Security',
    desc: 'Protect your premises with intelligent access control. Integrate door locks, turnstiles, and barriers with your employee database for seamless, secure access.',
    features: [
      'Door lock integration',
      'Turnstile & flap barrier control',
      'Vehicle barrier management',
      'Time-based access schedules',
      'Access log & audit trail',
      'Emergency lockdown',
    ],
  },
  {
    id: 'biometric',
    icon: '👁️',
    title: 'Biometric Devices',
    badge: 'Hardware',
    desc: 'Industry-grade biometric terminals for face recognition and fingerprint verification. Designed for Malaysian climate and industrial environments.',
    features: [
      'Face recognition terminals',
      'Fingerprint scanners',
      'Multi-modal biometric support',
      'Anti-spoofing technology',
      'Offline mode with local storage',
      'PoE and 4G connectivity options',
    ],
  },
]

function ProductCard({ product }) {
  return (
    <div id={product.id} className="product-card">
      <div className="product-card__header">
        <div className="product-card__icon">{product.icon}</div>
        <span className="badge badge-blue">{product.badge}</span>
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__desc">{product.desc}</p>
      <ul className="product-card__features">
        {product.features.map(f => (
          <li key={f}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15"><polyline points="20 6 9 17 4 12"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="btn btn-primary product-card__cta">Get a Demo</Link>
    </div>
  )
}

function SectionAnchor({ id }) {
  return <div id={id} style={{ scrollMarginTop: '90px' }} />
}

export default function Products() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <main className="products-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Products</span>
          <h1 className="page-hero__title">Complete Workforce Management Suite</h1>
          <p className="page-hero__subtitle">
            Every product is designed to integrate seamlessly — from payroll to biometrics, from visitor check-in to dormitory compliance.
          </p>
          <div className="page-hero__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="products-nav">
        <div className="container">
          <div className="products-nav__inner">
            <a href="#hrms">HRMS</a>
            <a href="#operational">Operational Systems</a>
            <a href="#security">Security &amp; Biometrics</a>
          </div>
        </div>
      </div>

      {/* HRMS */}
      <section className="section products-section">
        <SectionAnchor id="hrms" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">HRMS</span>
            <h2 className="section-title">Human Resource Management System</h2>
            <p className="section-subtitle">
              Automate payroll, attendance, leave, and claims with full Malaysian statutory compliance built in.
            </p>
          </div>
          <div className="products-grid">
            {hrmsProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Operational */}
      <section className="section products-section products-section--alt">
        <SectionAnchor id="operational" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Operational Systems</span>
            <h2 className="section-title">Operational &amp; Site Management</h2>
            <p className="section-subtitle">
              From visitor management to dormitory compliance — manage your entire facility from one platform.
            </p>
          </div>
          <div className="products-grid">
            {operationalProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section products-section">
        <SectionAnchor id="security" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Security Solutions</span>
            <h2 className="section-title">Access Control &amp; Biometric Devices</h2>
            <p className="section-subtitle">
              Protect your premises with enterprise-grade biometric access control seamlessly integrated with your HR data.
            </p>
          </div>
          <div className="products-grid products-grid--2col">
            {securityProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Ready to See It in Action?</h2>
              <p className="cta-banner__subtitle">Our team will walk you through a live demo tailored to your industry and company size.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Demo</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Talk to Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
