'use client'

export function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ textAlign: 'center' }}>
      <div className="mw-600">
        <h2 className="reveal" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem' }}>
          Let&apos;s talk.
        </h2>
        <p className="reveal reveal-delay-1" style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', maxWidth: 420, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Whether it&apos;s an opportunity, a market debate, or just a good conversation — I&apos;m always up for it.
        </p>
        <div className="contact-btns reveal reveal-delay-2">
          <a href="mailto:meharkumarverma04@gmail.com" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.78rem', padding: '13px 20px' }}>
            meharkumarverma04@gmail.com
          </a>
          <a href="https://linkedin.com/in/meharverma" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none' }}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
