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





import { motion } from 'framer-motion'
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
}