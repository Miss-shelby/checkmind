import { useState } from 'react'
import { useCart, ALL_PRODUCTS, type Product } from '../../context/CartContext'
import { Toast } from '../shop/Toast'

export function ShopSection() {
  const { addToCart } = useCart()
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setToastMessage(`${product.name} has been added.`)
    setShowToast(true)
    
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  // Get the first 3 products to feature on the homepage
  const featuredProducts = ALL_PRODUCTS.slice(0, 3)

  return (
    <section className="py-20 px-8 lg:px-16 bg-[var(--secondary)]/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
          <div className="max-w-xl">
            <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">The Collection</span>
            <h2 className="text-3xl lg:text-5xl serif text-[var(--text)]">Care beyond the session.</h2>
          </div>
          <a href="/shop" className="group flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] border-b border-[var(--primary)]/30 pb-2 hover:border-[var(--primary)] transition-all">
            <span>Visit Shop</span>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:arrow-right"></iconify-icon>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="scroll-reveal group">
              <div className="aspect-square bg-white rounded-sm mb-6 overflow-hidden relative border border-[var(--border)] group-hover:border-[var(--primary)] transition-all">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg serif text-[var(--text)]">{product.name}</h3>
                <p className="text-[var(--primary)] font-bold text-sm">${product.price}</p>
              </div>
              <p className="text-[var(--muted)] text-[10px] uppercase tracking-widest mb-4 truncate">{product.description}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full py-3 bg-[var(--background)] border border-[var(--border)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </section>
  )
}
