export function BookingHero() {
  return (
    <div className="lg:col-span-5 scroll-reveal active">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:calendar"></iconify-icon>
        <span>Booking Portal</span>
      </div>
      <h1 className="text-5xl lg:text-7xl serif leading-[1.05] mb-6 font-light text-[var(--text)]" style={{ letterSpacing: '-0.02em' }}>
        Ready to take the <span className="italic text-[var(--primary)]">first step?</span>
      </h1>
      <p className="text-base lg:text-lg text-[var(--muted)] mb-10 max-w-lg leading-relaxed">
        Choosing a session that feels right for you is the beginning of a meaningful journey. We ensure a safe, private, and professional process from this moment forward.
      </p>
      
      <div className="relative flex justify-center items-center h-48 lg:h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="var(--secondary)" opacity="0.2" className="breathing-circle"></circle>
          <circle cx="100" cy="100" r="60" fill="var(--primary)" opacity="0.1" className="breathing-circle" style={{ animationDelay: '1s' }}></circle>
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:flower-2" class="text-6xl text-[var(--primary)] opacity-20 absolute"></iconify-icon>
        </svg>
      </div>
      
      <div className="mt-12 p-6 rounded-sm border border-[var(--border)] bg-white shadow-sm">
        <div className="flex gap-4 items-start">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:shield-check" class="text-2xl text-[var(--primary)]"></iconify-icon>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-1">Privacy Guaranteed</h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Your data is treated with clinical-grade encryption and strictly shared only with your chosen therapist.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
