import { useCart } from '../../context/CartContext'

export function CartItems() {
  const { items, updateQuantity, removeFromCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="lg:col-span-8 scroll-reveal text-center py-12 bg-white rounded-sm border border-[var(--border)]">
        <p className="text-[var(--muted)] mb-4">Your bag is empty.</p>
        <a href="/shop" className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest hover:underline">
          Continue Shopping
        </a>
      </div>
    )
  }

  return (
    <div className="lg:col-span-8 scroll-reveal">
      <div className="space-y-6">
        {items.map(item => (
          <div key={item.id} className="relative cart-item bg-white p-6 rounded-sm border border-[var(--border)] transition-all duration-300 flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => removeFromCart(item.id)}
              className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--primary)] transition-colors p-2"
              aria-label="Remove item"
            >
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:x" class="text-lg"></iconify-icon>
            </button>
            
            <div className="w-32 h-32 bg-[var(--secondary)] rounded-sm overflow-hidden flex-shrink-0 border border-[var(--border)]">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full pr-8">
              <div>
                <h3 className="text-xl serif text-[var(--text)] mb-1">{item.name}</h3>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">{item.description}</p>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2 text-center">Quantity</p>
                  <div className="flex items-center border border-[var(--border)] rounded-sm bg-[var(--background)]">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center hover:text-[var(--primary)] transition-colors"
                    >
                      {/* @ts-expect-error iconify */}
                      <iconify-icon icon="lucide:minus" class="text-xs"></iconify-icon>
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center hover:text-[var(--primary)] transition-colors"
                    >
                      {/* @ts-expect-error iconify */}
                      <iconify-icon icon="lucide:plus" class="text-xs"></iconify-icon>
                    </button>
                  </div>
                </div>
                
                <div className="text-right min-w-[80px]">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">Total</p>
                  <p className="text-lg font-bold text-[var(--primary)]">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
