export function ConfirmationHeader() {
  return (
    <header className="text-center mb-16 scroll-reveal">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--secondary)] mb-8 shadow-inner">
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:check-circle-2" class="text-4xl text-[var(--primary)]"></iconify-icon>
      </div>
      <h1 className="text-5xl lg:text-6xl serif mb-4">Booking Confirmed</h1>
      <p className="text-[var(--muted)] text-lg">Your journey toward clarity and healing has begun.</p>
      <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">Thank You</div>
    </header>
  )
}
