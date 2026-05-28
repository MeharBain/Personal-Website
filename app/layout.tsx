import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mehar Verma — Finance & PE Professional',
  description: 'Portfolio of Mehar Kumar Verma. Private Equity at Bain & Company. Economics & Finance graduate. Curious by nature. Uncomfortable by choice.',
  keywords: ['PE', 'Private Equity', 'Finance', 'Bain & Company', 'Investment Banking', 'Economics'],
  authors: [{ name: 'Mehar Verma' }],
}

export const viewport: Viewport = {
  themeColor: '#0a0a09',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="antialiased">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor */}
        <div id="cursor-dot"  className="cursor-dot"  aria-hidden="true" />
        <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Cursor + scroll-reveal script */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function () {
            var dot  = document.getElementById('cursor-dot');
            var ring = document.getElementById('cursor-ring');
            var mx = 0, my = 0, rx = 0, ry = 0;

            document.addEventListener('mousemove', function(e) {
              mx = e.clientX; my = e.clientY;
              dot.style.left = mx + 'px';
              dot.style.top  = my + 'px';
            });

            function animRing() {
              rx += (mx - rx) * 0.12;
              ry += (my - ry) * 0.12;
              ring.style.left = rx + 'px';
              ring.style.top  = ry + 'px';
              requestAnimationFrame(animRing);
            }
            animRing();

            document.addEventListener('mouseover', function(e) {
              if (e.target.closest('a, button')) ring.classList.add('hovered');
              else ring.classList.remove('hovered');
            });

            // Scroll reveal
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  observer.unobserve(e.target);
                }
              });
            }, { threshold: 0.12 });

            function observe() {
              document.querySelectorAll('.reveal').forEach(function(el) {
                observer.observe(el);
              });
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', observe);
            } else {
              observe();
            }
          })();
        ` }} />
      </body>
    </html>
  )
}
