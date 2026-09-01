import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:shield-check"></iconify-icon>
              <span>Professional & Private</span>
            </div>
            <h1 className="text-5xl lg:text-7xl leading-[1.05] mb-6 serif font-light text-[var(--text)]" style={{ letterSpacing: '-0.02em' }}>
              A safe space to <span className="italic text-[var(--primary)]">understand</span> yourself, heal, and move forward.
            </h1>
            <p className="text-base lg:text-lg text-[var(--muted)] mb-10 max-w-lg leading-relaxed">
              Mental health therapy designed to help you navigate life's challenges with greater clarity, confidence, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" id="hero-primary-cta" className="bg-[var(--primary)] text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-center hover:shadow-lg hover:-translate-y-0.5 transition-all">Book a Session</Link>
              <a href="#explore" id="hero-secondary-cta" className="border border-[var(--primary)] text-[var(--primary)] px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-[var(--secondary)] transition-all">Explore CheckMind</a>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--accent)', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#grad1)" className="breathing-circle" style={{ animationDelay: '0s' }} />
                <circle cx="100" cy="100" r="60" fill="url(#grad1)" className="breathing-circle" style={{ animationDelay: '1s' }} />
                <circle cx="100" cy="100" r="40" fill="url(#grad1)" className="breathing-circle" style={{ animationDelay: '2s' }} />
                <g fill="var(--primary)" opacity="0.4">
                  <circle cx="100" cy="100" r="2"></circle>
                  <path d="M100 20 L100 30 M100 170 L100 180 M20 100 L30 100 M170 100 L180 100" stroke="var(--primary)" strokeWidth="0.5"></path>
                </g>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:flower-2" class="text-6xl text-[var(--primary)] opacity-20 animate-pulse"></iconify-icon>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)] organic-blob -z-10 blur-2xl opacity-40"></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-8 lg:px-16 bg-[var(--secondary)]/40 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:quote" class="text-4xl text-[var(--primary)] opacity-20 mb-6"></iconify-icon>
          <h2 className="text-3xl lg:text-5xl mb-6 serif italic text-[var(--text)]">You don't have to figure it all out alone.</h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed text-[var(--muted)]">
            Therapy is a place to pause, understand what you're experiencing, and move forward with expert support. Every step you take toward yourself is a step toward healing.
          </p>
        </div>
      </section>
    </>
  )
}
