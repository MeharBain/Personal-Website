import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { InsideTheDealRoom } from '@/components/InsideTheDealRoom'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Leadership } from '@/components/Leadership'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen smooth-scroll" style={{ backgroundColor: 'hsl(0 0% 6%)', color: 'hsl(0 0% 94%)' }}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <InsideTheDealRoom />
      <Projects />
      <Skills />
      <Leadership />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
