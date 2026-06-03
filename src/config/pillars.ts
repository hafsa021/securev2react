import applicationLayer from '../assets/pillars/application-layer.svg'
import dataLayer from '../assets/pillars/data-layer.svg'
import networkLayer from '../assets/pillars/network-layer.svg'
import peopleLayer from '../assets/pillars/people-layer.svg'

export type Pillar = {
  title: string
  description: string
  image: string
}

export const pillars: Pillar[] = [
  {
    title: 'Network Security Layer',
    image: networkLayer,
    description:
      'Identify and mitigate threats across your infrastructure with advanced tools like SIEM, SOAR, MDM, WAF, SWG, EDR, XDR, MDR, Email Security, ZTNA.',
  },
  {
    title: 'Application Security Layer',
    image: applicationLayer,
    description:
      'Secure your code and applications through robust SAST, DAST, IAST, and SWG integrations to prevent exploitation.',
  },
  {
    title: 'Data Security Layer',
    image: dataLayer,
    description:
      'Protect sensitive data with DLP, DAM, disaster recovery solutions, encryption for data-at-rest and in-transit, and secure one-way data diodes.',
  },
  {
    title: 'People Security Layer',
    image: peopleLayer,
    description:
      'Fortify human-centric security with Identity Governance, Lifecycle Management, SSO, MFA, and Privileged Access Management (PAM).',
  },
]
