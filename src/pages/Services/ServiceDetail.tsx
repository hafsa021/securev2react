import { Link, Navigate, useParams } from 'react-router-dom'
import PageShell from '../../components/PageShell/PageShell'
import { getServiceBySlug } from '../../config/navigation'
import './Services.css'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <PageShell title={service.label} subtitle={service.description}>
      <p>
        Our {service.label} practice helps organizations reduce risk with proven
        methodologies, experienced consultants, and measurable outcomes.
      </p>
      <p>
        Contact us to discuss scope, timelines, and how this service fits your
        security roadmap.
      </p>
      <div className="service-detail__actions">
        <Link to="/contact-us" className="service-detail__cta">
          Get in touch
        </Link>
        <Link to="/services" className="service-detail__back">
          ← All services
        </Link>
      </div>
    </PageShell>
  )
}
