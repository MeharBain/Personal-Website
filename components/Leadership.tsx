'use client'

const stats = [
  { num: '600+', label: 'Attendees' },
  { num: '70', label: 'Member Team' },
  { num: '14', label: 'Speakers' },
  { num: '₹2L+', label: 'Raised' },
  { num: '₹80K', label: 'Prize Pool' },
]

export function Leadership() {
  return (
    <section id="leadership" className="section-pad">
      <div className="mw-900">
        <div className="section-label reveal">Leadership</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}>
          Building things, not just analysing them.
        </h2>
        <div className="reveal reveal-delay-2" style={{
          border: '1px solid var(--border)', borderRadius: 8, background: 'var(--card)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)', transition: 'border-color 0.3s',
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--gold)', marginBottom: '0.4rem' }}>
            Chairperson — Iqtisadiyyat&apos;25
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', marginBottom: '1.2rem' }}>Annual Economics Conclave, Shiv Nadar University</p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.8)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Led a 70+ member organising team to deliver a 2-day conclave with 600+ attendees and 14 speakers across public policy, labour, trade, and inclusion. Raised Rs.2L+ in sponsorships. Ran 4 original competitions — national case challenges, policy simulations, and a mock parliamentary debate — with Rs.80,000 in prizes.
          </p>
          <div className="stats-row">
            {stats.map(s => (
              <div key={s.label} className="stat">
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: 'var(--gold)', display: 'block' }}>{s.num}</span>
                <p style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', marginTop: 4, letterSpacing: '0.08em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
