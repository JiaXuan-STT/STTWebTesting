import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const included = [
  'Full system setup & configuration',
  'Data migration assistance',
  'Staff training & onboarding',
  'Dedicated support manager',
  'Regular software updates',
  'Malaysian statutory compliance updates',
  'Cloud or on-premises deployment',
  'Multi-branch configuration',
]

const faqs = [
  {
    q: 'Why is pricing not listed publicly?',
    a: 'Our solutions are highly configurable — pricing depends on company size, number of users, modules required, and deployment type. We provide custom quotes to ensure you only pay for what you need.',
  },
  {
    q: 'Is there a minimum contract period?',
    a: 'Contract terms are flexible and discussed during your consultation. We offer both subscription and perpetual license models depending on your preference.',
  },
  {
    q: 'What is included in the implementation?',
    a: 'Every package includes system setup, configuration, data migration from existing systems, staff training, and a dedicated support manager for the onboarding period.',
  },
  {
    q: 'Do you charge extra for statutory compliance updates?',
    a: 'No. EPF, SOCSO, EIS, and PCB rule updates are included in your subscription at no extra cost.',
  },
  {
    q: 'Can we start with just one module?',
    a: 'Absolutely. Many clients start with payroll or attendance and expand to other modules over time. The platform is designed to grow with you.',
  },
  {
    q: 'Is cloud hosting included?',
    a: 'Cloud subscription plans include hosting. On-premises licenses require your own server infrastructure. Our team will advise on the best fit.',
  },
]

const steps = [
  { num: '01', title: 'Book a Demo', desc: 'Schedule a free 30-minute live demo with our product specialist.' },
  { num: '02', title: 'Needs Assessment', desc: 'We understand your workforce size, modules needed, and deployment preference.' },
  { num: '03', title: 'Custom Quote', desc: 'Receive a transparent, itemized proposal within 24 hours.' },
  { num: '04', title: 'Onboarding', desc: 'We handle setup, migration, and training — you focus on your business.' },
]

export default function Pricing() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pricing-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Pricing</span>
          <h1 className="page-hero__title">Custom Pricing for Every Business</h1>
          <p className="page-hero__subtitle">
            No one-size-fits-all plans. We tailor pricing to your company size, modules required, and deployment model — ensuring maximum value.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section">
        <div className="container">
          <div className="pricing-card-wrap">
            <div className="pricing-card">
              <div className="pricing-card__badge">Custom Pricing</div>
              <h2 className="pricing-card__title">Get a Quote Built for You</h2>
              <p className="pricing-card__subtitle">
                Smart Touch pricing is based on your headcount, branch count, and the modules you select. Most clients see ROI within the first payroll cycle.
              </p>
              <div className="pricing-card__divider" />
              <h3 className="pricing-card__included-title">Every Package Includes</h3>
              <ul className="pricing-card__included">
                {included.map(item => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pricing-card__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Get a Custom Quote</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Talk to Sales</Link>
              </div>
            </div>

            <div className="pricing-contact-card">
              <h3 className="pricing-contact-card__title">Speak to Our Team</h3>
              <p className="pricing-contact-card__text">Our sales specialists are available to answer any questions and help you find the right plan.</p>
              <div className="pricing-contact-items">
                <div className="pricing-contact-item">
                  <div className="pricing-contact-item__icon">📞</div>
                  <div>
                    <div className="pricing-contact-item__label">Phone</div>
                    <div className="pricing-contact-item__value">+607-388 9903</div>
                    <div className="pricing-contact-item__value">+6011-5354 9903</div>
                  </div>
                </div>
                <div className="pricing-contact-item">
                  <div className="pricing-contact-item__icon">✉️</div>
                  <div>
                    <div className="pricing-contact-item__label">Email</div>
                    <div className="pricing-contact-item__value">sales@smartouch.com.my</div>
                  </div>
                </div>
                <div className="pricing-contact-item">
                  <div className="pricing-contact-item__icon">📍</div>
                  <div>
                    <div className="pricing-contact-item__label">Office</div>
                    <div className="pricing-contact-item__value">Masai, Johor, Malaysia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section pricing-steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">From first demo to fully running system in as little as 2 weeks.</p>
          </div>
          <div className="pricing-steps">
            {steps.map(step => (
              <div key={step.num} className="pricing-step">
                <div className="pricing-step__num">{step.num}</div>
                <h3 className="pricing-step__title">{step.title}</h3>
                <p className="pricing-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pricing-faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pricing FAQ</h2>
          </div>
          <div className="pricing-faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-item__q">{faq.q}</h3>
                <p className="faq-item__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Start Your Free Demo Today</h2>
              <p className="cta-banner__subtitle">No commitment required. See exactly how Smart Touch works for your business before you decide.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
