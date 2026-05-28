'use client'

import { useState } from 'react'

const caseStudies = [
  { title: 'IPO Readiness & Peer Benchmarking', industry: 'Infrastructure Services', type: 'Peer Benchmarking',
    preview: 'A PE-backed services company preparing for a public listing needed to understand how it compared against public peers.',
    description: 'Built a benchmarking model across 13 comparable companies tracking revenue, margins, contract mix, customer concentration, and 5-year M&A activity. Synthesised sell-side analyst views from 5 major investment banks on what drives — and hurts — valuations in this space.',
    output: 'Valuation driver framework + return headwinds matrix' },
  { title: 'Business Model Transition Analysis', industry: 'Industrial Manufacturing', type: 'Business Model Analysis',
    preview: 'A PE-owned manufacturer evaluating a shift from asset-sale to a recurring leasing model.',
    description: 'Benchmarked economics across 5 analogous asset-heavy industries to assess whether the transition was financially viable, using business model structure, asset economics, and capital efficiency as the core analytical framework.',
    output: '3-dimension benchmarking framework across 5 leasing archetypes' },
  { title: 'Bottom-up Market Sizing', industry: 'B2G Software', type: 'Market Sizing',
    preview: 'Sized the addressable market for a software platform serving government and public safety buyers.',
    description: 'Key insight: public agencies are legally required to disclose procurement activity, making government tender databases a proprietary data source that conventional market research misses entirely. Built a bottom-up TAM from structured procurement notices.',
    output: 'Bottom-up TAM built from structured procurement database' },
  { title: 'M&A Target Screening', industry: 'Specialist Engineering Services', type: 'M&A Screening',
    preview: 'Supported a buy-and-build acquisition mandate for a PE fund expanding into European markets.',
    description: 'Screened and profiled approximately 50 potential acquisition targets across multiple geographies against a defined set of financial and operational criteria.',
    output: '~50-company M&A target database with full financial profiles' },
  { title: 'Commercial Due Diligence', industry: 'Consumer Services / Franchise', type: 'Commercial Due Diligence',
    preview: 'Pre-acquisition CDD on a franchise business — unit economics and consumer sentiment across millions of reviews.',
    description: 'Two parallel tracks: unit economics benchmarked against comparable brands using standardised disclosure documents; and consumer sentiment analysis across millions of reviews — solved with a custom Python sampling and stratification script.',
    output: 'Comparative unit economics model + Python-powered sentiment analysis by brand' },
]

export function InsideTheDealRoom() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="work" className="section-pad" style={{ background: 'rgba(240,237,230,0.02)' }}>
      <div className="mw-1100">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Inside the Deal Room</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Anonymised PE cases.
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', maxWidth: 480, margin: '0.5rem auto 0' }}>
            A look at the actual work — from BCN PEG Americas
          </p>
        </div>

        <div className="grid-2 reveal reveal-delay-2">
          {caseStudies.map((c, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{
                border: `1px solid ${isOpen ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
                borderRadius: 8, background: 'var(--card)', overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                boxShadow: isOpen ? '0 0 30px rgba(201,168,76,0.07)' : 'none',
                transform: isOpen ? 'translateY(-2px)' : 'none',
              }}>
                <div onClick={() => setOpenIndex(isOpen ? null : i)} style={{ padding: '1.25rem', cursor: 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{
                      fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                      color: 'var(--gold)', marginBottom: '0.5rem', lineHeight: 1.3, flex: 1,
                    }}>{c.title}</h3>
                    <span style={{
                      color: 'var(--gold)', fontSize: '1.3rem', flexShrink: 0, marginLeft: 8,
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s',
                    }}>+</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', padding: '2px 8px', borderRadius: 100, color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)' }}>{c.industry}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', padding: '2px 8px', borderRadius: 100, color: 'var(--teal)', border: '1px solid rgba(61,214,181,0.25)', background: 'rgba(61,214,181,0.05)' }}>{c.type}</span>
                  </div>
                  {/* Preview — hidden when open */}
                  <div style={{
                    maxHeight: isOpen ? 0 : 80, overflow: 'hidden',
                    opacity: isOpen ? 0 : 1,
                    transition: 'max-height 0.3s ease, opacity 0.2s ease',
                  }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{c.preview}</p>
                  </div>
                </div>
                {/* Expanded */}
                <div style={{ maxHeight: isOpen ? 600 : 0, overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(240,237,230,0.75)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{c.description}</p>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--teal)' }}>
                      <span style={{ color: 'var(--muted-foreground)' }}>Key output: </span>{c.output}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="reveal reveal-delay-3" style={{
          textAlign: 'center', marginTop: '1.5rem',
          fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
          color: 'rgba(240,237,230,0.25)', letterSpacing: '0.05em',
        }}>
          All cases anonymised in line with client confidentiality standards.
        </p>
      </div>
    </section>
  )
}
