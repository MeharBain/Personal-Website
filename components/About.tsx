'use client'

export function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'rgba(240,237,230,0.02)' }}>
      <div className="mw-900">
        <div className="section-label reveal">About</div>
        <h2 className="reveal reveal-delay-1" style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem',
        }}>The story so far.</h2>

        <div style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(240,237,230,0.8)' }}>
          <p className="reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }}>
            My first introduction to finance was a book my father gifted me on my 13th birthday —{' '}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: 'var(--foreground)' }}>Rich Dad Poor Dad</em>.
            I was 13, didn&apos;t fully understand it, but something clicked. I spent the next few years consuming everything I could about personal finance and investing.
          </p>
          <p className="reveal reveal-delay-3" style={{ marginBottom: '1.5rem' }}>
            Then COVID happened. While the world locked down, I found myself glued to markets — GameStop squeezes, the NFT boom, stimulus-driven rallies. It was chaotic, fascinating, and completely addictive. That&apos;s when I decided to leave a science track behind and go all-in on finance.
          </p>
          <p className="reveal reveal-delay-4" style={{ marginBottom: '1.5rem' }}>
            Since then I&apos;ve tried to learn by doing — four internships across PE, investment banking, political research, and fintech; leading a 70-member team to run one of my university&apos;s largest economics conclaves; and spending my free time on long treks and the occasional bungee jump. If it scares me a little, I&apos;m probably interested.
          </p>
          <div className="divider-line reveal" style={{ margin: '2rem 0' }} />
          <div className="reveal reveal-delay-5" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderLeft: '3px solid var(--gold)', borderRadius: '0 6px 6px 0', padding: '1.25rem 1.5rem',
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--gold)' }}>Current Status:</strong>{' '}
              Currently wrapping up a six-month Private Equity internship at Bain &amp; Company&apos;s BCN PEG Americas team, finishing my undergraduate degree, and actively looking for full-time opportunities in PE, IB, and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
