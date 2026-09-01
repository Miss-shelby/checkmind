export function WhatsAppChat() {
  const phoneNumber = "+2247065461341" 
  const message = encodeURIComponent("Hi CheckMind Clinic! I have an inquiry from the website.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl} 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-[90] bg-[var(--primary)] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:brightness-110 hover:-translate-y-1 transition-all duration-300 animate-fade-in group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute left-14 bg-white text-[var(--text)] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </div>
      {/* @ts-expect-error iconify */}
      <iconify-icon icon="mdi:whatsapp" class="text-2xl"></iconify-icon>
    </a>
  )
}
