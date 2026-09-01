import { Link } from 'react-router-dom'

export function ShopHero() {
  return (
    <section className="px-8 lg:px-16 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] mb-8">
          <Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:chevron-right"></iconify-icon>
          <span className="text-[var(--primary)]">Wellness Shop</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="scroll-reveal">
            <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
              The Collection
            </span>
            <h1 className="text-5xl lg:text-7xl serif text-[var(--text)] leading-[1.1] mb-6">
              A little more care, <span className="italic text-[var(--primary)]">beyond</span> the session.
            </h1>
            <p className="text-base text-[var(--muted)] max-w-lg leading-relaxed">
              Thoughtfully selected products designed to complement moments of rest, reflection, and everyday wellbeing.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-end scroll-reveal">
            <div className="relative w-full md:w-64">
              <input type="text" placeholder="Search products..." className="w-full bg-white border border-[var(--border)] px-4 py-3 text-xs rounded-sm focus:outline-none focus:border-[var(--primary)] transition-all" />
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:search" class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"></iconify-icon>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-48">
                <select className="w-full bg-white border border-[var(--border)] px-4 py-3 text-xs rounded-sm appearance-none focus:outline-none focus:border-[var(--primary)] transition-all">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Sellers</option>
                </select>
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
