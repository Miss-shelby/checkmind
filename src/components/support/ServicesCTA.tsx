import { Link } from 'react-router-dom'

export function ServicesCTA() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-[var(--primary)] relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10 opacity-10">
        <div className="w-[600px] h-[600px] organic-blob border-2 border-white animate-[spin_40s_linear_infinite]"></div>
      </div>
      <div className="max-w-3xl mx-auto scroll-reveal">
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:flower-2" class="text-5xl text-[var(--accent)] mb-8 opacity-40 animate-pulse"></iconify-icon>
        <h2 className="text-5xl lg:text-7xl serif mb-8 leading-tight text-white">
          Ready for a <span className="italic text-[var(--accent)]">new perspective?</span>
        </h2>
        <p className="text-lg font-light text-white/70 mb-10">
          Each journey starts with a simple conversation. Let's find the path that feels right for you.
        </p>
        <Link to="/book" id="services-cta-btn" className="inline-block bg-white text-[var(--primary)] px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--secondary)] transition-all shadow-2xl">
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}
