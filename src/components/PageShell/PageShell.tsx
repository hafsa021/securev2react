import type { ReactNode } from 'react'
import './PageShell.css'

type PageShellProps = {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <article className="page-shell">
      <header className="page-shell__header">
        <h1>{title}</h1>
        {subtitle && <p className="page-shell__subtitle">{subtitle}</p>}
      </header>
      {children && <div className="page-shell__body">{children}</div>}
    </article>
  )
}
