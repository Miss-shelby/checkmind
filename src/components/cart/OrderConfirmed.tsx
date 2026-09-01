export function OrderConfirmed() {
  return (
    <div className="lg:col-span-12 w-full text-center py-4 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md p-8 lg:p-12 rounded-lg border border-[var(--primary)]/20 shadow-2xl flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-rose-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[var(--primary)]/20 relative z-10">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:check" class="text-3xl"></iconify-icon>
        </div>
        
        <h2 className="text-3xl lg:text-4xl serif text-[var(--text)] mb-3 relative z-10">Order Confirmed</h2>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-md relative z-10">Thank you for your purchase. Your wellness items will be shipped soon.</p>
        
        <div className="bg-gradient-to-br from-gray-50/80 to-white border border-[var(--border)]/50 p-6 rounded-lg w-full max-w-2xl mb-8 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10 shadow-sm">
          <div className="text-left w-full sm:w-auto">
            <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Order Number</p>
            <p className="font-mono font-medium text-lg text-[var(--primary)]">#CHK-8839-204</p>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-[var(--border)]/50"></div>

          <div className="text-left sm:text-right w-full sm:w-auto">
            <p className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Status</p>
            <p className="font-medium text-amber-600 flex items-center sm:justify-end gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:clock" class="text-lg"></iconify-icon> Awaiting Verification
            </p>
          </div>
        </div>
        
        <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xl mb-10 relative z-10">
          We have received your order details. Once your bank transfer is verified, you will receive a confirmation email with your tracking number.
        </p>

        <a 
          href="/shop" 
          className="bg-white text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] px-8 py-3 rounded-md text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-sm hover:shadow-md relative z-10"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  )
}
