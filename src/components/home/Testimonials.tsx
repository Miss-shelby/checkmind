export function Testimonials() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Patient Stories</span>
          <h2 className="text-4xl lg:text-5xl serif text-[var(--text)]">Words from people we've supported.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scroll-reveal bg-[var(--background)] p-8 rounded-sm border border-[var(--border)] relative">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:quote" class="text-3xl text-[var(--primary)]/10 mb-4"></iconify-icon>
            <p className="text-sm italic text-[var(--muted)] leading-relaxed mb-8">
              "Entering CheckMind felt like taking a deep breath after months of overwhelm. Elena has a way of making you feel safe while gently challenging your growth. It's life-changing."
            </p>
            <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs uppercase">SJ</div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Sarah Jenkins</h4>
                <p className="text-[10px] text-[var(--muted)]">Wellbeing Client</p>
              </div>
            </div>
          </div>
          <div className="scroll-reveal bg-[var(--background)] p-8 rounded-sm border border-[var(--primary)]/30 relative shadow-lg shadow-[var(--primary)]/5">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:quote" class="text-3xl text-[var(--primary)]/10 mb-4"></iconify-icon>
            <p className="text-sm italic text-[var(--muted)] leading-relaxed mb-8">
              "I was skeptical about therapy, but the boutique feel and Elena's professionalism immediately put me at ease. I now have tools to manage burnout I never knew I needed."
            </p>
            <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xs uppercase">MR</div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Marcus Reed</h4>
                <p className="text-[10px] text-[var(--muted)]">High Performance Client</p>
              </div>
            </div>
          </div>
          <div className="scroll-reveal bg-[var(--background)] p-8 rounded-sm border border-[var(--border)] relative">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:quote" class="text-3xl text-[var(--primary)]/10 mb-4"></iconify-icon>
            <p className="text-sm italic text-[var(--muted)] leading-relaxed mb-8">
              "The holistic approach at CheckMind is unique. They don't just talk at you; they walk with you through your transition. Highly recommend to anyone feeling stuck."
            </p>
            <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center text-white font-bold text-xs uppercase">LW</div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Lydia Wong</h4>
                <p className="text-[10px] text-[var(--muted)]">Transitions Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
