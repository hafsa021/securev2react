import { Link } from 'react-router-dom'
import PageShell from '../../components/PageShell/PageShell'
import { services } from '../../config/navigation'
import './Services.css'

export default function ServicesIndex() {
  return (
    <PageShell
      title="Services"
      subtitle="Comprehensive cyber security offerings to assess, protect, and govern your organization."
    >
      <ul className="services-grid">
        {services.map((service) => (
          <li key={service.slug}>
            <Link to={service.path} className="services-card">
              <h2>{service.label}</h2>
              <p>{service.description}</p>
              <span className="services-card__link">Learn more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
