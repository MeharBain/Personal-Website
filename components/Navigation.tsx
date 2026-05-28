'use client'

import React, { useState, useEffect, useRef } from 'react'

const sections = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work',       label: 'Work' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
]

export function Navigation() {
  const [isScrolled,    setIsScrolled]    = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [closing,       setClosing]       = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const els = document.querySelectorAll<HTMLElement>('section[id]')
      let current = 'home'
      els.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setClosing(true)
    setTimeout(() => { setMenuOpen(false); setClosing(false) }, 280)
  }

  const scrollTo = (id: string) => {
    closeMenu()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const navBtnStyle = (id: string): React.CSSProperties => ({
    background: 'none', border: 'none',
    fontFamily: "'Syne', sans-serif", fontSize: '0.78rem', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: activeSection === id ? 'var(--foreground)' : 'var(--muted-foreground)',
    transition: 'color 0.2s',
  })

  return (
    <>
      <nav className={`nav-wrapper${isScrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{
            fontFamily: "'Instrument Serif', serif", fontSize: '1.2rem',
            color: 'var(--gold)', background: 'none', border: 'none', letterSpacing: '0.02em',
          }}
        >
          Mehar Verma
        </button>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {sections.map(s => (
            <button key={s.id} onClick={() => scrollTo(s.id)} style={navBtnStyle(s.id)}>
              {s.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Status badge — desktop only */}
          <div className="nav-badge" style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
            color: 'var(--teal)', border: '1px solid rgba(61,214,181,0.3)',
            padding: '4px 12px', borderRadius: 100, letterSpacing: '0.06em',
          }}>
            Open to Opportunities
          </div>

          {/* Hamburger — three-bar animated */}
          <button
            className={`nav-menu-btn${menuOpen ? ' is-open' : ''}`}
            onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div ref={overlayRef} className={`nav-mobile-open${closing ? ' closing' : ''}`}>
          {/* Close button */}
          <button className="nav-mobile-close" onClick={closeMenu} aria-label="Close menu">✕</button>

          {/* Gold accent top */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          }} />

          {/* Name at top */}
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
            color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '2rem', opacity: 0.6,
          }}>
            Mehar Verma
          </div>

          <div className="nav-mobile-divider" style={{ marginBottom: '1.5rem' }} />

          {/* Nav links */}
          {sections.map((s, i) => (
            <div key={s.id} className="nav-mobile-item">
              <button className="nav-mobile-link" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
              {i < sections.length - 1 && <div className="nav-mobile-divider" />}
            </div>
          ))}

          <div className="nav-mobile-divider" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }} />

          {/* Status badge in menu */}
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.62rem',
            color: 'var(--teal)', border: '1px solid rgba(61,214,181,0.25)',
            padding: '6px 16px', borderRadius: 100, letterSpacing: '0.08em',
            opacity: 0, animation: 'mobile-link-in 0.4s ease forwards 0.38s',
          }}>
            Open to Opportunities
          </div>
        </div>
      )}
    </>
  )
}
