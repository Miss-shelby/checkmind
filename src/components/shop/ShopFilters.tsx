export function ShopFilters() {
  return (
    <section className="px-8 lg:px-16 mb-12">
      <div className="max-w-7xl mx-auto border-b border-[var(--border)] pb-4 flex flex-wrap gap-8 items-center justify-between">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] pb-4 border-b-2 border-[var(--primary)] text-[var(--primary)]">All Items</button>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] pb-4 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Self-Care</button>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] pb-4 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Rest & Reflection</button>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] pb-4 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--primary)] transition-colors">Aromatherapy</button>
        </div>
        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[var(--muted)]">Showing 8 products</p>
      </div>
    </section>
  )
}
