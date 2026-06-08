/*import PageShell from '../../components/PageShell/PageShell'

export default function AboutUs() {
  return (
    <PageShell
      title="About Us"
      subtitle="A trusted partner for organizations that take cyber security seriously."
    >
      <p>
        SecureV2 combines deep technical expertise with a practical approach to
        security. We work alongside your teams to assess risk, implement
        controls, and maintain compliance without slowing down the business.
      </p>
    </PageShell>
  )
}*/



/*import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>About SecureV2</h1>

        <p>
          Empowering organizations with advanced cybersecurity solutions,
          proactive threat intelligence, and trusted security consulting
          services to protect critical business assets.
        </p>
      </section>

      <section className="about-stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Security Assessments</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Enterprise Clients</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Security Monitoring</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Client Satisfaction</p>
        </div>

      </section>

      <section className="about-section">

        <h2>Our Mission & Vision</h2>

        <div className="cards">

          <div className="card">
            <h3>Mission</h3>

            <p>
              To deliver innovative cybersecurity solutions that help
              organizations identify, prevent and respond to cyber threats.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>

            <p>
              To become the most trusted cybersecurity partner by creating
              a safer digital future for businesses worldwide.
            </p>
          </div>

        </div>

      </section>

      <section className="about-section">

        <h2>Why Choose Us</h2>

        <div className="why-us">

          <div className="why-card">
            <span>🛡️</span>
            <h3>Advanced Protection</h3>
            <p>Enterprise-grade security solutions.</p>
          </div>

          <div className="why-card">
            <span>⚡</span>
            <h3>Fast Response</h3>
            <p>Rapid incident detection and remediation.</p>
          </div>

          <div className="why-card">
            <span>🔍</span>
            <h3>Threat Intelligence</h3>
            <p>Actionable insights against emerging threats.</p>
          </div>

          <div className="why-card">
            <span>🤝</span>
            <h3>Trusted Partner</h3>
            <p>Dedicated security experts working with you.</p>
          </div>

        </div>

      </section>

    </div>
  )
}*/





/*import { motion } from 'framer-motion'
import './AboutUs.css'



export default function AboutUs() {
  return (
    <div className="about">

      <section className="about-hero">

        <div className="cyber-grid"></div>
        <div className="about-glow"></div>

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Securing The Digital Future</h1>

          <p>
            SecureV2 empowers organizations with advanced cybersecurity,
            threat intelligence and proactive digital defense. We work alongside your teams to assess risk, implement
            controls, and maintain compliance without slowing down the business.
          </p>
        </motion.div>

      </section>

      <section className="about-stats">

        <motion.div
          className="stat-card"
          whileHover={{ y: -10 }}
        >
          <h2>500+</h2>
          <p>Security Assessments</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ y: -10 }}
        >
          <h2>100+</h2>
          <p>Enterprise Clients</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ y: -10 }}
        >
          <h2>24/7</h2>
          <p>Security Monitoring</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ y: -10 }}
        >
          <h2>99%</h2>
          <p>Client Satisfaction</p>
        </motion.div>

      </section>

      <section className="about-section">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cyber Security Capabilities
        </motion.h2>

        <div className="capability-grid">

          <div className="capability-card">
            <div className="capability-icon">🛡️</div>

            <h3>Threat Protection</h3>

            <p>
              Proactive monitoring and threat detection across your environment.
            </p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">🔐</div>

            <h3>Identity Security</h3>

            <p>
              MFA, IAM and PAM solutions to secure every identity.
            </p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">🌐</div>

            <h3>Network Defense</h3>

            <p>
              Secure infrastructure with modern zero-trust architecture.
            </p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">📊</div>

            <h3>Compliance</h3>

            <p>
              ISO, SOC, regulatory compliance and security assessments.
            </p>
          </div>

        </div>

      </section>

      <section className="about-section">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose SecureV2
        </motion.h2>

        <div className="why-grid">

          <div className="why-card">
            <span>🛡️</span>
            <h3>Advanced Protection</h3>
            <p>Enterprise-grade defense against cyber threats.</p>
          </div>

          <div className="why-card">
            <span>⚡</span>
            <h3>Rapid Response</h3>
            <p>Fast incident detection and remediation.</p>
          </div>

          <div className="why-card">
            <span>🔍</span>
            <h3>Threat Intelligence</h3>
            <p>Stay ahead of evolving cyber attacks.</p>
          </div>

          <div className="why-card">
            <span>🔐</span>
            <h3>Compliance Ready</h3>
            <p>Security aligned with industry standards.</p>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>Ready To Strengthen Your Security?</h2>

        <p>
          Protect your business with SecureV2's cybersecurity expertise.
        </p>

        <button className="cta-btn">
          Contact Our Experts
        </button>

      </section>

    </div>
  )
}*/



import { Link } from 'react-router-dom'
import './AboutUs.css'

/* ─── Data ─────────────────────────────────────────────────── */

const stats = [
  { number: '500+', label: 'Clients Protected' },
  { number: '12+', label: 'Years Experience' },
  { number: '99.8%', label: 'Threat Detection' },
  { number: '24/7', label: 'SOC Coverage' },
]

const missionItems = [
  {
    icon: '🛡️',
    title: 'Proactive Defense',
    desc: 'We find threats before they find you — with continuous monitoring and red-team exercises.',
  },
  {
    icon: '🔍',
    title: 'Deep Assessment',
    desc: 'Rigorous VAPT and audits reveal hidden weaknesses across every layer of your stack.',
  },
  {
    icon: '⚙️',
    title: 'Practical Controls',
    desc: 'Security that fits your workflow — not theoretical frameworks that gather dust.',
  },
  {
    icon: '📋',
    title: 'Full Compliance',
    desc: 'ISO 27001, SOC 2, GDPR, and more — we take you from gap to certified.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Precision First',
    desc: 'Every engagement is scoped carefully so our findings are actionable, not theoretical.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: 'We embed with your team. Your security posture is our success metric.',
  },
  {
    icon: '🔒',
    title: 'Radical Transparency',
    desc: 'Clear reporting, honest risk ratings, and zero vendor lock-in — always.',
  },
  {
    icon: '🚀',
    title: 'Move Fast, Stay Safe',
    desc: 'Security that accelerates the business, not a gate that slows it down.',
  },
  {
    icon: '🌐',
    title: 'Global Threat Context',
    desc: 'Our intel team tracks emerging TTPs so you are always a step ahead.',
  },
  {
    icon: '📈',
    title: 'Measurable Outcomes',
    desc: 'Every project ends with a risk score delta — not just a PDF report.',
  },
]

const whatWeStandFor = [
  'Independent assessments you can trust',
  'Security advice that fits your business model',
  'No hidden costs, no upsell pressure',
  'Expertise across SMB to enterprise',
]

const persons = [
  { initials: 'AK', name: 'Amir Khan', role: 'CEO & Founder' },
  { initials: 'SR', name: 'Sara Raza', role: 'Head of Red Team' },
  { initials: 'DM', name: 'Dev Menon', role: 'Chief Architect' },
  { initials: 'PL', name: 'Priya Lal', role: 'Compliance Lead' },
]

const teamBadges = [
  'OSCP Certified', 'CEH', 'CISSP', 'ISO 27001 Lead',
  'AWS Security', 'Azure Defender',
]

/* ─── Component ─────────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <div className="about">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="about__hero">
        <div className="about__hero-inner">
          <div className="about__eyebrow">
            <span className="about__eyebrow-dot" aria-hidden="true" />
            Who We Are
          </div>
          <h1 className="about__hero-title">
            Security you can{' '}
            <span>actually rely on</span>
          </h1>
          <p className="about__hero-sub">
            SecureV2 combines deep technical expertise with a practical approach
            to cyber security. We work alongside your teams to assess risk,
            implement controls, and maintain compliance — without slowing down
            the business.
          </p>
          <Link to="/contact-us" className="about__hero-cta">
            Work With Us
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── 2. STATS BAR ─────────────────────────────────────── */}
      <div className="about__stats" aria-label="Company statistics">
        <dl className="about__stats-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="about__stat"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <dt className="about__stat-number">{s.number}</dt>
              <dd className="about__stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── 3. MISSION ───────────────────────────────────────── */}
      <section className="about__section" aria-labelledby="mission-heading">
        <div className="about__mission-grid">

          {/* Left — text */}
          <div>
            <span className="about__section-label">Our Mission</span>
            <h2 id="mission-heading" className="about__mission-heading">
              Protecting what matters,<br />the right way
            </h2>
            <p className="about__mission-body">
              We believe security shouldn't be a checkbox exercise. SecureV2
              was built to bridge the gap between technical rigour and real-world
              business context — delivering outcomes that last.
            </p>
            <ul className="about__mission-list" aria-label="Mission principles">
              {whatWeStandFor.map((item, i) => (
                <li
                  key={item}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <span className="about__mission-list-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.25" stroke="#38bdf8" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — capability cards */}
          <div className="about__mission-visual" role="presentation">
            {missionItems.map((item) => (
              <div key={item.title} className="about__mission-item">
                <div className="about__mission-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <div className="about__mission-item-title">{item.title}</div>
                  <div className="about__mission-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. VALUES CARDS ──────────────────────────────────── */}
      <section
        className="about__section"
        style={{ paddingTop: 0 }}
        aria-labelledby="values-heading"
      >
        <div className="about__values-header">
          <span className="about__section-label">Core Values</span>
          <h2 id="values-heading" className="about__section-heading">
            Principles that drive us
          </h2>
          <p className="about__section-sub">
            Six commitments we make to every client, every engagement.
          </p>
        </div>
        <div className="about__values-grid">
          {values.map((v, i) => (
            <article
              key={v.title}
              className="about__value-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="about__value-icon-wrap" aria-hidden="true">
                {v.icon}
              </div>
              <h3 className="about__value-title">{v.title}</h3>
              <p className="about__value-desc">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 5. TEAM STRIP ────────────────────────────────────── */}
      <section className="about__team" aria-labelledby="team-heading">
        <div className="about__team-inner">

          {/* Left — copy */}
          <div>
            <span className="about__section-label">The Team</span>
            <h2 id="team-heading" className="about__team-heading">
              Practitioners, not just consultants
            </h2>
            <p className="about__team-body">
              Our team has worked on the front lines of incident response, red
              teaming, and compliance auditing across finance, healthcare,
              defence, and critical infrastructure. We don't just advise —
              we do the work alongside you.
            </p>
            <div className="about__team-badges" aria-label="Team certifications">
              {teamBadges.map((badge) => (
                <span key={badge} className="about__badge">{badge}</span>
              ))}
            </div>
          </div>

          {/* Right — person cards */}
          <div
            className="about__persons"
            role="list"
            aria-label="Leadership team"
          >
            {persons.map((p, i) => (
              <div
                key={p.name}
                className="about__person-card"
                role="listitem"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="about__person-avatar"
                  aria-hidden="true"
                >
                  {p.initials}
                </div>
                <div className="about__person-name">{p.name}</div>
                <div className="about__person-role">{p.role}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CTA BANNER ────────────────────────────────────── */}
      <section className="about__cta" aria-labelledby="cta-heading">
        <div className="about__cta-inner">
          <h2 id="cta-heading" className="about__cta-title">
            Ready to strengthen your security posture?
          </h2>
          <p className="about__cta-sub">
            Start with a free discovery call. We'll assess your current exposure
            and outline a roadmap tailored to your business.
          </p>
          <div className="about__cta-buttons">
            <Link to="/contact-us" className="about__cta-primary">
              Get in Touch
            </Link>
            <Link to="/services" className="about__cta-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}