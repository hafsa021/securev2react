import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import v2logo from '../../assets/v2logo.png'
import { mainNav, services } from '../../config/navigation'
import './Navbar.css'

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar__link navbar__link--active' : 'navbar__link'

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <img src={v2logo} alt="Secure V2" className="navbar__brand-logo" />
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="main-nav"
          className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Main"
        >
          <ul className="navbar__list">
            <li>
              <NavLink to="/" className={navLinkClass} end onClick={closeMobile}>
                Home
              </NavLink>
            </li>

            <li
              className="navbar__dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  [
                    'navbar__link',
                    'navbar__link--has-menu',
                    isActive ? 'navbar__link--active' : '',
                    servicesOpen ? 'navbar__link--menu-open' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
                onClick={closeMobile}
              >
                Services
                <svg
                  className="navbar__chevron"
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </NavLink>

              <ul
                className={`navbar__menu ${servicesOpen ? 'navbar__menu--open' : ''}`}
                role="menu"
              >
                {services.map((service) => (
                  <li key={service.slug} role="none">
                    <Link
                      to={service.path}
                      className="navbar__menu-item"
                      role="menuitem"
                      onClick={() => {
                        setServicesOpen(false)
                        closeMobile()
                      }}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {mainNav
              .filter(
                (item) => item.path !== '/' && item.path !== '/contact-us',
              )
              .map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={navLinkClass}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
          </ul>

          <Link to="/contact-us" className="navbar__cta" onClick={closeMobile}>
            Contact
          </Link>

          <div className="navbar__mobile-services">
            <button
              type="button"
              className={`navbar__mobile-services-toggle ${mobileServicesOpen ? 'navbar__mobile-services-toggle--open' : ''}`}
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              All services
              <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M2 4l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <ul className="navbar__mobile-services-list">
                <li>
                  <Link to="/services" onClick={closeMobile}>
                    View all services
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={service.path} onClick={closeMobile}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/contact-us"
            className="navbar__mobile-cta"
            onClick={closeMobile}
          >
            Contact Us
          </Link>
        </nav>

      </div>

      {mobileOpen && (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Close menu"
          onClick={closeMobile}
        />
      )}
    </header>
  )
}
