import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const posts = [
  {
    category: 'Payroll',
    title: 'EPF, SOCSO & EIS 2024: What Malaysian Employers Need to Know',
    excerpt: 'Statutory contribution rates and compliance requirements have been updated. Here\'s everything your payroll team needs to stay compliant.',
    date: 'June 5, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Attendance',
    title: 'How Biometric Attendance Eliminates Buddy Punching in Manufacturing',
    excerpt: 'Buddy punching can cost Malaysian factories thousands of ringgit per month. Face recognition technology provides a definitive solution.',
    date: 'May 28, 2026',
    readTime: '4 min read',
  },
  {
    category: 'Mobile',
    title: 'GPS Attendance for Field Workers: A Complete Guide',
    excerpt: 'Managing remote and field-based employees has never been easier. Discover how GPS mobile attendance transforms field workforce management.',
    date: 'May 15, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Operations',
    title: 'Digital Visitor Management: Why a Paper Logbook Is No Longer Enough',
    excerpt: 'Modern factories and offices need more than a physical visitor log. QR-based visitor management offers security, speed, and compliance.',
    date: 'May 3, 2026',
    readTime: '3 min read',
  },
  {
    category: 'HR Technology',
    title: 'HRMS vs. Payroll Software: What\'s the Difference and Which Do You Need?',
    excerpt: 'Many businesses confuse payroll software with a full HRMS. Understanding the difference helps you choose the right tool for your growth stage.',
    date: 'April 22, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Construction',
    title: 'Managing Contract Workers on Construction Sites: A Compliance Checklist',
    excerpt: 'Construction sites face unique compliance challenges with contract workers. This checklist helps site managers stay audit-ready at all times.',
    date: 'April 10, 2026',
    readTime: '7 min read',
  },
]

const categoryColors = {
  Payroll: 'blue',
  Attendance: 'green',
  Mobile: 'purple',
  Operations: 'orange',
  'HR Technology': 'teal',
  Construction: 'red',
}

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="blog-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Blog</span>
          <h1 className="page-hero__title">Insights for Smarter Workforce Management</h1>
          <p className="page-hero__subtitle">
            HR compliance updates, product guides, and best practices for Malaysian and Singaporean businesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <article key={i} className="blog-card">
                <div className="blog-card__image-placeholder" data-color={categoryColors[post.category] || 'blue'}>
                  <span className="blog-card__category-icon">
                    {post.category === 'Payroll' ? '💰'
                     : post.category === 'Attendance' ? '🕐'
                     : post.category === 'Mobile' ? '📱'
                     : post.category === 'Operations' ? '🏢'
                     : post.category === 'HR Technology' ? '💻'
                     : '🏗️'}
                  </span>
                </div>
                <div className="blog-card__content">
                  <span className={`blog-card__category blog-cat--${categoryColors[post.category] || 'blue'}`}>{post.category}</span>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__dot">·</span>
                    <span className="blog-card__read-time">{post.readTime}</span>
                  </div>
                  <a href="#" className="blog-card__link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-newsletter">
        <div className="container">
          <div className="blog-newsletter__inner">
            <div>
              <h2 className="blog-newsletter__title">Stay Updated on HR Compliance</h2>
              <p className="blog-newsletter__subtitle">Get EPF, SOCSO, and payroll compliance updates delivered to your inbox.</p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">Subscribe for Updates</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
