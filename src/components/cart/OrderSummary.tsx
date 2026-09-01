import { useCart } from '../../context/CartContext'

interface OrderSummaryProps {
  onCheckout: () => void
}

export function OrderSummary({ onCheckout }: OrderSummaryProps) {
  const { cartTotal, items } = useCart()
  
  // Calculate shipping (mock logic: $8.50 flat if cart > 0)
  const shipping = items.length > 0 ? 8.50 : 0
  // Calculate tax (mock logic: 8% of subtotal)
  const tax = cartTotal * 0.08
  const finalTotal = cartTotal + shipping + tax

  return (
    <div className="lg:col-span-4 scroll-reveal" style={{ transitionDelay: '100ms' }}>
      <div className="bg-white p-8 rounded-sm border border-[var(--border)] shadow-sm sticky top-24">
        <h2 className="text-2xl serif text-[var(--text)] mb-8">Order Summary</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-[var(--muted)]">Subtotal</span>
            <span className="font-medium">${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[var(--muted)]">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[var(--muted)]">Estimated Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="pt-4 border-t border-[var(--border)] flex justify-between items-center">
            <span className="text-base font-bold uppercase tracking-widest">Total</span>
            <span className="text-2xl serif text-[var(--primary)]">${finalTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full block bg-[var(--primary)] text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-center hover:brightness-110 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
          
          <div className="flex items-center justify-center gap-4 text-[9px] uppercase tracking-widest text-[var(--muted)] opacity-60">
            <div className="flex items-center gap-1">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:shield-check"></iconify-icon> Secure Checkout
            </div>
            <div className="flex items-center gap-1">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:refresh-ccw"></iconify-icon> 30 Day Returns
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-4 bg-[var(--secondary)]/30 rounded-sm border border-[var(--border)]">
          <div className="flex gap-3">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:info" class="text-[var(--primary)] text-lg flex-shrink-0"></iconify-icon>
            <p className="text-[10px] leading-relaxed text-[var(--muted)] uppercase tracking-wider">
              Your purchase supports our community wellness programs. Thank you for being part of CheckMind.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
