/*import PageShell from '../../components/PageShell/PageShell'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Tell us about your security goals—we will respond promptly."
    >
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="contact-form__field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>
        <button type="submit" className="contact-form__submit">
          Send message
        </button>
      </form>
    </PageShell>
  )
}*/




import { useState } from 'react'
import './ContactUs.css'

const SERVICE_CHIPS = [
  'VAPT',
  'Phishing Simulation',
  'Network Security',
  'SIEM & App Security',
  'Compliance',
  'Threat Intelligence',
]

export default function ContactUs() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' })
  const [chips, setChips] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleChip = (chip: string) => {
    setChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1600)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFields({ name: '', email: '', company: '', message: '' })
    setChips([])
  }

  return (
    <section className="contact-page">
      {/* Background */}
      <div className="contact-page__bg" aria-hidden="true">
        <div className="contact-page__orb contact-page__orb--1" />
        <div className="contact-page__orb contact-page__orb--2" />
        <div className="contact-page__orb contact-page__orb--3" />
        <div className="contact-page__grid" />
      </div>

      <div className="contact-page__inner">
        {/* ── LEFT: Info panel ── */}
        <div className="contact-info">
          <p className="contact-info__eyebrow">
            <span className="contact-info__eyebrow-dot" />
            Get in Touch
          </p>

          <h1 className="contact-info__heading">
            Let's secure<br />
            <span>your future.</span>
          </h1>

          <p className="contact-info__subtext">
            Tell us about your security goals. Our team will review your
            message and get back to you within one business day.
          </p>

          {/* Contact cards */}
          <div className="contact-info__cards">
            <div className="contact-card">
              <span className="contact-card__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="contact-card__text">
                <span className="contact-card__label">Phone</span>
                <span className="contact-card__value">+91 98765 43210</span>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-card__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div className="contact-card__text">
                <span className="contact-card__label">Email</span>
                <span className="contact-card__value">hello@securev2.com</span>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-card__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="contact-card__text">
                <span className="contact-card__label">Location</span>
                <span className="contact-card__value">Bhubaneswar, India</span>
              </div>
            </div>
          </div>

          <div className="contact-info__signal">
            <div className="signal-line" />
            <span className="signal-label">Encrypted &amp; Confidential</span>
          </div>
        </div>

        {/* ── RIGHT: Form panel ── */}
        <div className="contact-form-wrap">
          <div className="contact-form">
            {submitted ? (
              /* ── Success state ── */
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <polyline
                      className="contact-success__check"
                      points="5,12 10,17 19,7"
                      stroke="#38bdf8"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="contact-success__heading">Message received!</h2>
                <p className="contact-success__body">
                  Thanks for reaching out. A member of our security team will
                  be in touch within one business day.
                </p>
                <button className="contact-success__reset" onClick={handleReset}>
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <div>
                  <p className="contact-form__title">Send us a message</p>
                  <div className="contact-form__divider" />
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>

                    {/* Name + Email row */}
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label className="contact-form__label" htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Jane Smith"
                          value={fields.name}
                          onChange={handleChange}
                          className={`contact-form__input${fields.name ? ' contact-form__input--filled' : ''}`}
                        />
                      </div>
                      <div className="contact-form__field">
                        <label className="contact-form__label" htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="jane@company.com"
                          value={fields.email}
                          onChange={handleChange}
                          className={`contact-form__input${fields.email ? ' contact-form__input--filled' : ''}`}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Your organization"
                        value={fields.company}
                        onChange={handleChange}
                        className={`contact-form__input${fields.company ? ' contact-form__input--filled' : ''}`}
                      />
                    </div>

                    {/* Service interest chips */}
                    <div className="contact-form__field">
                      <span className="contact-form__label">Services of interest</span>
                      <div className="contact-form__chips">
                        {SERVICE_CHIPS.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            className={`contact-form__chip${chips.includes(chip) ? ' contact-form__chip--active' : ''}`}
                            onClick={() => toggleChip(chip)}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Describe your security needs or questions…"
                        value={fields.message}
                        onChange={handleChange}
                        className={`contact-form__textarea${fields.message ? ' contact-form__textarea--filled' : ''}`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="contact-form__submit"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ animation: 'spin 0.8s linear infinite' }}>
                            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeOpacity="0.25" />
                            <path d="M21 12a9 9 0 0 0-9-9" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>

                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Spinner keyframe inline */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
