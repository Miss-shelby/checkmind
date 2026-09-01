interface ToastProps {
  show: boolean
  message: string
  onClose: () => void
}

export function Toast({ show, message, onClose }: ToastProps) {
  return (
    <div className={`fixed bottom-8 right-8 z-[100] toast-notification bg-[var(--primary)] text-white px-6 py-4 rounded-sm shadow-2xl flex items-center gap-4 border border-white/20 ${show ? 'show' : ''}`}>
      {/* @ts-expect-error iconify */}
      <iconify-icon icon="lucide:check-circle" class="text-xl text-[var(--accent)]"></iconify-icon>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest">Added to Cart</p>
        <p className="text-xs opacity-90">{message}</p>
      </div>
      <button onClick={onClose} className="ml-4 text-white/50 hover:text-white">
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:x"></iconify-icon>
      </button>
    </div>
  )
}
