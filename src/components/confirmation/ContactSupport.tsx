export function ContactSupport() {
  return (
    <div className="mt-20 pt-16 border-t border-[var(--border)] scroll-reveal text-center">
      <h2 className="serif text-3xl mb-4">Need to adjust anything?</h2>
      <p className="text-[var(--muted)] text-sm mb-8">Our care coordinator is here to assist with any special requests or logistical questions.</p>
      <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
        <a href="mailto:hello@checkmind.clinic" className="flex items-center gap-2 text-[var(--primary)] hover:underline">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:mail"></iconify-icon> hello@checkmind.clinic
        </a>
        <a href="tel:+15550123456" className="flex items-center gap-2 text-[var(--primary)] hover:underline">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:phone"></iconify-icon> +1 (555) 012-3456
        </a>
      </div>
    </div>
  )
}
