import { useCart } from '../../context/CartContext'

interface CheckoutPaymentProps {
  onConfirm: () => void
  onBack: () => void
}

export function CheckoutPayment({ onConfirm, onBack }: CheckoutPaymentProps) {
  const { cartTotal, items } = useCart()
  const shipping = items.length > 0 ? 8.50 : 0
  const tax = cartTotal * 0.08
  const finalTotal = cartTotal + shipping + tax

  return (
    <div className="lg:col-span-12 w-full animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md p-6 lg:p-8 rounded-lg border border-[var(--primary)]/20 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl serif text-[var(--text)] mb-2">Secure Checkout</h2>
            <p className="text-sm text-[var(--muted)]">Please complete your payment via bank transfer.</p>
          </div>
          <button 
            onClick={onBack}
            className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
          >
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:arrow-left"></iconify-icon> Back to Cart
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Transfer Details */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[var(--secondary)]/40 to-white p-6 rounded-lg border border-[var(--primary)]/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-[var(--border)]/50 pb-3 flex items-center gap-2">
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:building-2" class="text-[var(--primary)]"></iconify-icon> Transfer Details
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-end border-b border-[var(--border)]/30 pb-3">
                  <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest">Total Amount</p>
                  <p className="text-2xl serif text-[var(--primary)]">${finalTotal.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center py-1">
                  <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest">Bank Name</p>
                  <p className="font-medium text-sm text-[var(--text)]">Wellness Federal Credit Union</p>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest">Account Name</p>
                  <p className="font-medium text-sm text-[var(--text)]">CheckMind Clinic Shop</p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-md border border-[var(--border)] flex justify-between items-center mt-2 backdrop-blur-sm">
                  <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest">Account Number</p>
                  <p className="font-mono text-xl tracking-wider font-bold text-[var(--primary)]">
                    8924 5510 3229
                  </p>
                </div>
                
                <div className="pt-2 mt-2">
                  <p className="text-[10px] text-[var(--muted)] leading-relaxed italic">
                    * Please use your name as the transfer reference. Once completed, click the button below.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={onConfirm}
              className="w-full bg-[var(--primary)] text-white py-4 rounded-lg text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2"
            >
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:check-circle"></iconify-icon> I Have Made The Payment
            </button>
          </div>

          {/* Order Summary Summary */}
          <div className="bg-gradient-to-bl from-gray-50/80 to-white p-6 rounded-lg border border-[var(--border)]/50 shadow-sm h-fit">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[var(--border)] pb-4">Your Items</h3>
            
            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--muted)] bg-white border border-[var(--border)] w-6 h-6 flex items-center justify-center rounded-sm text-xs font-bold">
                      {item.quantity}
                    </span>
                    <span className="font-medium text-[var(--text)]">{item.name}</span>
                  </div>
                  <span className="text-[var(--muted)]">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-[var(--border)]">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--muted)]">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--muted)]">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--muted)]">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 mt-3 border-t border-[var(--border)]">
                <span>Total</span>
                <span className="text-[var(--primary)]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
