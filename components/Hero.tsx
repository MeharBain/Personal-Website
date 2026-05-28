'use client'

import Image from 'next/image'

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 64,
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0 }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)', top: '-10%', right: '-5%',
        animation: 'orb-drift 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(61,214,181,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', bottom: '5%', left: '-5%',
        animation: 'orb-drift 8s ease-in-out infinite', animationDelay: '-4s',
      }} />

      <div className="hero-inner">
        {/* Text */}
        <div className="hero-text">
          <div className="name-tag" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
            color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: '2rem', opacity: 0, animation: 'fade-up 0.7s ease forwards 0.2s',
          }}>
            <span style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, var(--gold))', display: 'inline-block' }} />
            Mehar Kumar Verma
            <span style={{ width: 40, height: 1, background: 'linear-gradient(to left, transparent, var(--gold))', display: 'inline-block' }} />
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.6rem, 5vw, 5.5rem)',
            lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'block', opacity: 0, animation: 'fade-up 0.7s ease forwards 0.4s' }}>
              Curious by nature.
            </span>
            <span className="text-gradient" style={{
              display: 'block', fontStyle: 'italic',
              opacity: 0, animation: 'fade-up 0.7s ease forwards 0.6s',
            }}>
              Uncomfortable by choice.
            </span>
          </h1>

          <p style={{
            fontSize: '0.95rem', color: 'var(--muted-foreground)', letterSpacing: '0.04em',
            marginBottom: '0.6rem', opacity: 0, animation: 'fade-up 0.7s ease forwards 0.8s',
          }}>
            Economics &amp; Finance @ Shiv Nadar University · PE @ Bain &amp; Company
          </p>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
            color: 'rgba(240,237,230,0.3)', letterSpacing: '0.06em',
            marginBottom: '2.5rem', opacity: 0, animation: 'fade-up 0.7s ease forwards 0.95s',
          }}>
            Always learning something new
          </p>

          <div className="hero-btns" style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            opacity: 0, animation: 'fade-up 0.7s ease forwards 1.1s',
          }}>
            <button className="btn-primary" onClick={() => scrollTo('work')}>See My Work</button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>Get in Touch</button>
          </div>
        </div>

        {/* Photo */}
        <div className="hero-photo" style={{ opacity: 0, animation: 'fade-up 0.9s ease forwards 0.5s' }}>
          <div className="hero-photo-frame">
            <div style={{
              position: 'absolute', inset: -2, borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(201,168,76,0.6), rgba(61,214,181,0.2), rgba(201,168,76,0.1))',
              zIndex: 0,
            }} />
            <div style={{
              position: 'absolute', inset: -20, borderRadius: 32,
              background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
              filter: 'blur(20px)', zIndex: -1,
            }} />
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 14, overflow: 'hidden', zIndex: 1 }}>
              <Image src="/mehar.jpg" alt="Mehar Verma" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0, animation: 'fade-in 1s ease forwards 1.8s',
      }}>
        <div style={{
          width: 1, height: 50, background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scroll-pulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
