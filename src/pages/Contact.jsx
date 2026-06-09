import { useEffect, useState } from 'react'
import './Contact.css'

const interests = [
  'Payroll System',
  'Attendance & Time Management',
  'SmartGoGo Mobile App',
  'Leave Management',
  'Claims Management',
  'Visitor Management System',
  'Dormitory Management',
  'Canteen System',
  'Access Control',
  'Biometric Devices',
]

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', employees: '', interest: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1 className="page-hero__title">Let's Talk About Your Workforce Needs</h1>
          <p className="page-hero__subtitle">
            Book a demo, request a quote, or just ask a question. Our team responds within 1 business day.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Book a Demo or Send an Enquiry</h2>
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 1 business day.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" required placeholder="Your company name" value={form.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="+60 12-345 6789" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="employees">Number of Employees</label>
                      <select id="employees" name="employees" value={form.employees} onChange={handleChange}>
                        <option value="">Select range</option>
                        <option>1 – 50</option>
                        <option>51 – 200</option>
                        <option>201 – 500</option>
                        <option>501 – 1,000</option>
                        <option>1,001 – 5,000</option>
                        <option>5,000+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest">Products of Interest</label>
                      <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                        <option value="">Select a product</option>
                        {interests.map(i => <option key={i}>{i}</option>)}
                        <option>Full Suite</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your requirements, current challenges, or any questions..." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg contact-submit">
                    Send Enquiry
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3 className="contact-info-card__title">Contact Information</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <strong>Head Office</strong>
                    <p>36-02 &amp; 36-03, Jalan Permas 10<br/>Bandar Baru Permas Jaya<br/>81750 Masai, Johor, Malaysia</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <strong>Phone</strong>
                    <p>+607-388 9903</p>
                    <p>+6011-5354 9903</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <strong>Sales Email</strong>
                    <p>sales@smartouch.com.my</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Monday – Friday: 9:00am – 6:00pm</p>
                    <p>Saturday: 9:00am – 1:00pm</p>
                  </div>
                </div>
              </div>

              <div className="contact-demo-card">
                <h3>What to Expect in a Demo</h3>
                <ul>
                  <li>
                    <span className="contact-demo-step">30</span>
                    <div>
                      <strong>30-Minute Live Demo</strong>
                      <p>Walk through the system tailored to your industry</p>
                    </div>
                  </li>
                  <li>
                    <span className="contact-demo-step">Q</span>
                    <div>
                      <strong>Q&amp;A Session</strong>
                      <p>Ask anything about features, compliance, or integration</p>
                    </div>
                  </li>
                  <li>
                    <span className="contact-demo-step">$</span>
                    <div>
                      <strong>Custom Quote</strong>
                      <p>Receive a transparent proposal within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
