import { type Product, ALL_PRODUCTS } from '../../context/CartContext'

interface ProductGridProps {
  onAddToCart: (product: Product) => void
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section className="px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ALL_PRODUCTS.map(product => (
          <div key={product.id} className="scroll-reveal group product-card">
            <div className="aspect-[4/5] bg-white rounded-sm mb-6 overflow-hidden relative border border-[var(--border)] group-hover:border-[var(--primary)] transition-all shadow-sm group-hover:shadow-xl">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-x-0 bottom-4 px-4 add-to-cart-btn">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-[var(--primary)] text-white py-3 text-[9px] font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg serif text-[var(--text)]">{product.name}</h3>
              <p className="text-[var(--primary)] font-bold text-sm">${product.price}</p>
            </div>
            <p className="text-[var(--muted)] text-[10px] leading-relaxed mb-4">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
