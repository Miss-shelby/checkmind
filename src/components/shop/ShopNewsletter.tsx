export function ShopNewsletter() {
  return (
    <section className="py-20 px-8 lg:px-16 text-center">
      <div className="max-w-2xl mx-auto scroll-reveal">
        <h2 className="text-3xl serif text-[var(--text)] mb-6">Can't find what you're looking for?</h2>
        <p className="text-[var(--muted)] text-sm mb-8">Our collection is constantly evolving. Sign up for our wellness newsletter to be the first to know about new arrivals and exclusive restocks.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" className="flex-1 bg-white border border-[var(--border)] px-4 py-3 text-xs rounded-sm focus:outline-none focus:border-[var(--primary)]" />
          <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
