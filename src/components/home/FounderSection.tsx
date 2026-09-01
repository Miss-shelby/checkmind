export function FounderSection() {
  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 scroll-reveal">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" alt="Elena Rousseau" className="rounded-sm shadow-2xl w-full h-[500px] object-cover border-4 border-white" />
            <div className="absolute -bottom-6 -right-6 bg-[var(--secondary)] p-6 rounded-sm shadow-xl border border-[var(--border)] max-w-[200px]">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[var(--primary)] mb-2">The Vision</p>
              <p className="text-xs italic serif text-[var(--text)]">"A different kind of space, built on empathy and excellence."</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 scroll-reveal lg:pl-12">
          <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Clinical Director</span>
          <h2 className="text-4xl lg:text-6xl serif mb-6 leading-tight text-[var(--text)]">Elena Rousseau</h2>
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-1 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:check-circle-2"></iconify-icon>
              <span>Licensed Therapist</span>
            </div>
            <div className="flex items-center gap-1 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:graduation-cap"></iconify-icon>
              <span>M.Sc. Psychology</span>
            </div>
          </div>
          <div className="text-[var(--muted)] text-sm space-y-4 max-w-xl leading-relaxed">
            <p>
              Elena founded CheckMind Clinic to bridge the gap between clinical excellence and soulful, human-centered care. She provides a warm, non-judgmental space where the complex becomes manageable.
            </p>
            <p>
              With a focus on anxiety and career transitions, her approach is rooted in reclaiming your sense of self.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center border-r border-[var(--border)]">
              <p className="text-2xl serif text-[var(--primary)] mb-1">12+</p>
              <p className="text-[9px] uppercase tracking-widest text-[var(--muted)]">Years</p>
            </div>
            <div className="text-center border-r border-[var(--border)]">
              <p className="text-2xl serif text-[var(--primary)] mb-1">2.5k</p>
              <p className="text-[9px] uppercase tracking-widest text-[var(--muted)]">Patients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl serif text-[var(--primary)] mb-1">15</p>
              <p className="text-[9px] uppercase tracking-widest text-[var(--muted)]">Experts</p>
            </div>
          </div>
          <a href="#about-clinic" id="founder-cta" className="mt-12 inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] group border-b-2 border-[var(--primary)]/20 pb-2 text-[var(--primary)]">
            <span>About the Clinic</span>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  )
}
