'use client'

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mw-900">
        <div className="section-label reveal">Projects</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}>
          Independent work.
        </h2>
        <div className="reveal reveal-delay-2" style={{
          border: '1px solid var(--border)', borderRadius: 8, background: 'var(--card)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)', position: 'relative', overflow: 'hidden',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,168,76,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--gold), var(--teal))' }} />
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--gold)', marginBottom: '1rem' }}>
            Silver Investment Research Report
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.2rem' }}>
            {['Macro','Commodities','Independent Research'].map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.63rem', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)', padding: '4px 12px', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
          <p style={{ fontSize: '0.93rem', color: 'rgba(240,237,230,0.75)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            A data-driven investment thesis recommending a BUY on silver, forecasting 25% upside driven by industrial demand tailwinds, structural supply deficits, and macro hedging dynamics (April 25, 2025).
          </p>
          <a href="/4047500 Silver Research Report.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem', padding: '11px 22px', textDecoration: 'none' }}>Read the Thesis</a>
        </div>
      </div>
    </section>
  )
}
