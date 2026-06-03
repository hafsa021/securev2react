export type ServiceItem = {
  label: string
  path: string
  slug: string
  description: string
}

export const services: ServiceItem[] = [
  {
    label: 'VAPT',
    slug: 'vapt',
    path: '/services/vapt',
    description:
      'Vulnerability assessment and penetration testing to uncover and remediate security weaknesses.',
  },
  {
    label: 'Phishing Attack Simulation',
    slug: 'phishing-attack-simulation',
    path: '/services/phishing-attack-simulation',
    description:
      'Realistic phishing simulations to measure awareness and strengthen your human firewall.',
  },
  {
    label: 'Cyber Security',
    slug: 'cyber-security',
    path: '/services/cyber-security',
    description:
      'End-to-end cyber security programs tailored to protect people, data, and infrastructure.',
  },
  {
    label: 'Network Security',
    slug: 'network-security',
    path: '/services/network-security',
    description:
      'Design, monitoring, and hardening of networks to prevent unauthorized access and lateral movement.',
  },
  {
    label: 'Threat Intelligence Services',
    slug: 'threat-intelligence-services',
    path: '/services/threat-intelligence-services',
    description:
      'Actionable threat intelligence to anticipate attacks and prioritize defensive investments.',
  },
  {
    label: 'SIEM & Application Security',
    slug: 'siem-application-security',
    path: '/services/siem-application-security',
    description:
      'Centralized logging, detection, and secure application development across your stack.',
  },
  {
    label: 'Compliance & Certifications',
    slug: 'compliance-certifications',
    path: '/services/compliance-certifications',
    description:
      'Guidance and audits for regulatory frameworks and industry security certifications.',
  },
  {
    label: 'Unified Mobile Device Management & Email Security',
    slug: 'mdm-email-security',
    path: '/services/mdm-email-security',
    description:
      'MDM and email security to protect devices, inboxes, and sensitive communications.',
  },
  {
    label: 'Security Assessment & Audits',
    slug: 'security-assessment-audits',
    path: '/services/security-assessment-audits',
    description:
      'Independent assessments and audits to validate controls and close compliance gaps.',
  },
  {
    label: 'Data Security & Identity Access Management',
    slug: 'data-security-identity-access-management',
    path: '/services/data-security-identity-access-management',
    description:
      'Data protection and IAM solutions to enforce least privilege and secure identities.',
  },
]

export const mainNav = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
] as const

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}
