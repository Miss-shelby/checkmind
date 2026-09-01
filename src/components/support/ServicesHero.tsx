export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm scroll-reveal">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:sparkles"></iconify-icon>
          <span>Support & Growth</span>
        </div>
        <h1 className="text-5xl lg:text-7xl serif font-light text-[var(--text)] mb-8 scroll-reveal" style={{ letterSpacing: '-0.02em' }}>
          A path tailored to your <span className="italic text-[var(--primary)]">inner world.</span>
        </h1>
        <p className="text-base lg:text-lg text-[var(--muted)] max-w-2xl leading-relaxed scroll-reveal">
          Explore our specialized therapy areas. Each session is a collaborative process designed to meet you exactly where you are.
        </p>
        <div className="mt-12 w-full max-w-md h-px bg-[var(--border)] scroll-reveal"></div>
      </div>
    </section>
  )
}
