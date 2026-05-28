'use client'

const skillsData: Record<string, string[]> = {
  'Research & Data': ['S&P Cap IQ','PitchBook','Refinitiv','Factiva','Survey Design','Secondary Research','Market Sizing','Equity Research'],
  'Financial Tools': ['Excel (Advanced)','VBA','Power BI','Financial Modelling','Unit Economics','Peer Benchmarking'],
  'Technical': ['Python (data analysis, sentiment analysis)','SQL (basic)'],
  'Consulting': ['Deck Production','Answer-First Thinking','Zero-Defect Output','Client-Ready Synthesis'],
}

export function Skills() {
  return (
    <section className="section-pad" style={{ background: 'rgba(240,237,230,0.02)' }}>
      <div className="mw-1100">
        <div className="section-label reveal">Skills</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}>
          Tools of the trade.
        </h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([cat, skills], i) => (
            <div key={cat} className={`reveal reveal-delay-${i+1}`}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((s, j) => (
                  <span key={j} style={{ fontSize: '0.78rem', padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 4, color: 'rgba(240,237,230,0.7)', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'rgba(240,237,230,0.7)'; e.currentTarget.style.background = 'none' }}
                  >{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
