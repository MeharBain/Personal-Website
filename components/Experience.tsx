'use client'

import { useState } from 'react'

const experiences = [
  {
    company: 'Bain & Company', title: 'Private Equity Intern',
    subtitle: 'Bain Capability Network, PEG Americas CoE',
    period: 'Jan 2026 – Jul 2026', location: 'Gurugram',
    description: "Spent six months embedded in Bain's Private Equity Group, supporting live deal diligence for US-based PE funds. Worked across both primary and secondary research tracks on 2–3 day turnarounds, week after week.",
    bullets: [
      'Delivered end-to-end PE diligence across 9 live cases spanning 5 industries, each on 2–3 day turnaround cycles',
      'Built peer benchmarking models across revenue, margins, contract mix, and M&A activity, synthesising sell-side analyst commentary into structured valuation frameworks',
      'Screened ~50 M&A acquisition targets across multiple European geographies for a buy-and-build mandate',
      'Designed and processed 4 proprietary consumer surveys, modelling NPS, key purchase criteria, share of wallet, and switching behaviour',
      'Built a Python sentiment analysis script to process millions of consumer reviews — datasets too large for Excel',
      'Sized an addressable market for a B2G software client by mining public procurement databases',
      'Benchmarked business model economics across 5 asset-heavy industries to assess viability of asset-sale to leasing transition',
    ],
    tools: ['S&P Cap IQ','PitchBook','Refinitiv','Factiva','Python','Excel','PowerPoint'],
    lesson: "The best analysts don't just find data — they find the angle nobody else thought to look from.",
  },
  {
    company: 'Goldman Sachs', title: 'Investment Banking Summer Analyst',
    subtitle: 'Investment Banking',
    period: 'Jun – Aug 2025', location: 'Bengaluru',
    description: 'Summer analyst role in investment banking.',
    bullets: [
      'Developed Excel VBA scripts to automate daily syndicated loan servicing tasks, significantly reducing manual effort',
      'Designed standardised data flow forms across multiple banking entities, improving consistency and inter-bank communication',
    ],
    tools: ['Excel','VBA','PowerPoint'],
    lesson: 'Process design is underrated — the right template saves hundreds of hours downstream.',
  },
  {
    company: 'mFilterIt', title: 'Finance Intern',
    period: 'Jun – Aug 2024', location: 'Gurugram',
    description: 'Finance internship at a digital ad fraud analytics firm.',
    bullets: [
      'Built a company-wide Finance & HR dashboard in Power BI enabling CXOs to analyse 10+ years of BU-wise trends',
      'Reduced dashboard maintenance time by 90% via Power BI Service integration and role-based access controls',
    ],
    tools: ['Power BI','Power BI Service','Excel'],
    lesson: "A good dashboard doesn't just show data — it removes the excuse not to act on it.",
  },
  {
    company: 'All India Congress Committee', title: 'Parliamentary & Political Research Intern',
    period: 'Jun – Sep 2024', location: 'New Delhi',
    description: 'Research internship supporting parliamentary activity.',
    bullets: [
      'Delivered research reports to aid Parliamentary debates and drafted 20+ Parliamentary and Supplementary Questions',
      'Analysed budgets of two government ministries, identifying allocation gaps and utilisation trends',
    ],
    tools: [],
    lesson: 'Data and policy speak different languages — translation is its own skill.',
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="section-pad">
      <div className="mw-900">
        <div className="section-label reveal">Experience</div>
        <h2 className="reveal reveal-delay-1" style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem',
        }}>Where I&apos;ve been.</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`reveal reveal-delay-${Math.min(i+1,5)}`} style={{
                border: `1px solid ${isOpen ? 'rgba(201,168,76,0.35)' : 'var(--border)'}`,
                borderRadius: 8, background: 'var(--card)', overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '1.25rem',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    background: 'none', border: 'none',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                      color: isOpen ? 'var(--gold)' : 'var(--foreground)', transition: 'color 0.2s',
                    }}>{exp.company}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--gold)', fontWeight: 600, margin: '3px 0' }}>{exp.title}</div>
                    {exp.subtitle && <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{exp.subtitle}</div>}
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'rgba(240,237,230,0.3)', marginTop: 6 }}>
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%', flexShrink: 0, marginLeft: 12,
                    border: `1px solid ${isOpen ? 'var(--gold)' : 'var(--border)'}`,
                    background: isOpen ? 'rgba(201,168,76,0.1)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)', fontSize: '1rem',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.35s, border-color 0.2s',
                  }}>+</div>
                </button>

                <div style={{
                  maxHeight: isOpen ? 1200 : 0, overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', marginBottom: '1rem', lineHeight: 1.7 }}>
                      {exp.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{
                          fontSize: '0.83rem', color: 'rgba(240,237,230,0.75)',
                          padding: '0.35rem 0 0.35rem 1.1rem', position: 'relative', lineHeight: 1.6,
                          borderBottom: '1px solid rgba(240,237,230,0.04)',
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>›</span>{b}
                        </li>
                      ))}
                    </ul>
                    {exp.tools.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1rem' }}>
                        {exp.tools.map((t, j) => <span key={j} className="tool-chip">{t}</span>)}
                      </div>
                    )}
                    <div style={{
                      marginTop: '1rem', padding: '0.9rem 1.1rem',
                      borderLeft: '2px solid var(--gold)',
                      fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                      fontSize: '0.92rem', color: 'rgba(201,168,76,0.8)',
                      background: 'rgba(201,168,76,0.04)', borderRadius: '0 4px 4px 0',
                    }}>
                      &ldquo;{exp.lesson}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
