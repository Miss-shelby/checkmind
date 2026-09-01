export function Methodology() {
  const steps = [
    { num: '01', title: 'Listen', icon: 'lucide:ear', desc: 'A dedicated space where you can speak openly and feel truly heard.' },
    { num: '02', title: 'Understand', icon: 'lucide:search', desc: 'Exploring the patterns and experiences that have shaped your current reality.' },
    { num: '03', title: 'Work Together', icon: 'lucide:users', desc: 'Building a customized approach that respects your pace and focuses on goals.' },
    { num: '04', title: 'Move Forward', icon: 'lucide:zap', desc: 'Developing healthier ways to navigate life and maintain your newfound clarity.' }
  ]

  return (
    <section className="py-20 px-8 lg:px-16 bg-[var(--secondary)]/30 border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto text-center mb-16 scroll-reveal">
        <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">The Methodology</span>
        <h2 className="text-4xl lg:text-5xl serif text-[var(--text)]">A different <span className="text-[var(--primary)]">kind</span> of space.</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, i) => (
          <div key={i} className="scroll-reveal flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6 relative group border border-[var(--border)] hover:border-[var(--primary)] transition-all">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon={step.icon} class="text-2xl text-[var(--primary)] group-hover:scale-110 transition-transform"></iconify-icon>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--primary)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">{step.num}</div>
            </div>
            <h3 className="text-xl serif mb-3 text-[var(--text)]">{step.title}</h3>
            <p className="text-[var(--muted)] text-xs leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
