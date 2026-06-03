import PageShell from '../../components/PageShell/PageShell'
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
}
