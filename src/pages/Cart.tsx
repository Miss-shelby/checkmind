import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CartItems } from '../components/cart/CartItems'
import { OrderSummary } from '../components/cart/OrderSummary'
import { CheckoutPayment } from '../components/cart/CheckoutPayment'
import { OrderConfirmed } from '../components/cart/OrderConfirmed'
import { useCart } from '../context/CartContext'

export function Cart() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const { clearCart } = useCart()
  useScrollReveal()

  const handleCheckout = () => {
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleConfirmPayment = () => {
    setStep(3)
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToCart = () => {
    setStep(1)
  }

  const renderStepHeader = () => {
    return (
      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] mb-12 scroll-reveal">
        <button 
          onClick={() => step > 1 && setStep(1)}
          className={`transition-colors ${step === 1 ? 'text-[var(--primary)]' : 'text-[var(--muted)] hover:text-[var(--primary)]'}`}
        >
          Your Selection
        </button>
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:chevron-right" class="text-[var(--muted)]"></iconify-icon>
        
        <button 
          onClick={() => step > 2 && setStep(2)}
          className={`transition-colors ${step === 2 ? 'text-[var(--primary)]' : step > 2 ? 'text-[var(--muted)] hover:text-[var(--primary)]' : 'text-[var(--muted)] opacity-50 cursor-not-allowed'}`}
          disabled={step < 2}
        >
          Payment
        </button>
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:chevron-right" class="text-[var(--muted)]"></iconify-icon>
        
        <span className={`transition-colors ${step === 3 ? 'text-[var(--primary)]' : 'text-[var(--muted)] opacity-50'}`}>
          Order Confirmed
        </span>
      </div>
    )
  }

  return (
    <main className="relative pt-32 pb-24 px-8 lg:px-16 min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        
        {step < 3 && (
          <div className="flex justify-between items-end mb-8 scroll-reveal">
            <h1 className="text-4xl lg:text-6xl serif text-[var(--text)]">
              {step === 1 ? 'Shopping ' : 'Secure '}
              <span className="text-[var(--primary)]">{step === 1 ? 'Bag' : 'Checkout'}</span>
            </h1>
            <Link to="/shop" className="group hidden sm:flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--primary)] transition-all">
              <span>Continue Shopping</span>
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Link>
          </div>
        )}

        {renderStepHeader()}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 animate-fade-in">
          {step === 1 && (
            <>
              <CartItems />
              <OrderSummary onCheckout={handleCheckout} />
            </>
          )}
          
          {step === 2 && (
            <CheckoutPayment onConfirm={handleConfirmPayment} onBack={handleBackToCart} />
          )}

          {step === 3 && (
            <OrderConfirmed />
          )}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}
