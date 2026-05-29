'use client'

const education = [
  { school: 'Shiv Nadar Institute of Eminence', degree: 'B.Sc. (Research) Economics & Finance', period: '2022 – 2026', score: 'CGPA 7.95' },
  { school: 'IIT Madras (Online Degree)', degree: 'B.S. Data Science & Programming (Foundational)', period: '2022-2024', score: 'GPA 7.88' },
  { school: 'Somerville School, Noida', degree: 'Class XII & X', period: 'Completed', score: 'XII: 90.6% · X: 95.6%' },
]

export function Education() {
  return (
    <section className="section-pad" style={{ background: 'rgba(240,237,230,0.02)' }}>
      <div className="mw-1100">
        <div className="section-label reveal">Education</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}>Foundation.</h2>
        <div className="grid-3 reveal reveal-delay-2">
          {education.map((edu, i) => (
            <div key={i} style={{
              border: '1px solid var(--border)', borderRadius: 8, padding: 'clamp(1.2rem, 3vw, 1.8rem)',
              background: 'var(--card)', transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ fontSize: '0.92rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem' }}>{edu.school}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--foreground)', lineHeight: 1.5, marginBottom: '0.4rem' }}>{edu.degree}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.67rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>{edu.period}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.73rem', color: 'var(--teal)', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>{edu.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
