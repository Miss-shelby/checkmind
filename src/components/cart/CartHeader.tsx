import { Link } from 'react-router-dom'

export function CartHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 scroll-reveal">
      <div className="max-w-2xl">
        <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
          Your Selection
        </span>
        <h1 className="text-4xl lg:text-6xl serif text-[var(--text)]">
          Shopping <span className="text-[var(--primary)]">Bag</span>
        </h1>
      </div>
      <Link to="/shop" id="continue-shopping-link" className="group flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--primary)] transition-all mt-6 md:mt-0">
        <span>Continue Shopping</span>
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:arrow-left" class="order-first group-hover:-translate-x-1 transition-transform"></iconify-icon>
      </Link>
    </div>
  )
}
