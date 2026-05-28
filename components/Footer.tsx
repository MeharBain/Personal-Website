'use client'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 2rem', background: 'rgba(240,237,230,0.02)' }}>
      <div className="footer-inner mw-1100">
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '0.95rem', color: 'var(--gold)' }}>
          Mehar Verma
        </div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(240,237,230,0.3)' }}>
          &ldquo;Learn by doing. Embrace the uncomfortable.&rdquo;
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(240,237,230,0.25)', letterSpacing: '0.06em' }}>
          © {year} Mehar Verma
        </div>
      </div>
    </footer>
  )
}
