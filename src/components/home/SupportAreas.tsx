export function SupportAreas() {
  const areas = [
    { title: 'Anxiety & Overwhelm', icon: 'lucide:wind', desc: 'Finding calm amidst the noise and learning to manage the weight of excessive worry.' },
    { title: 'Stress & Burnout', icon: 'lucide:battery-warning', desc: 'Reconnecting with your energy and setting boundaries that protect your peace of mind.' },
    { title: 'Emotional Wellbeing', icon: 'lucide:smile', desc: 'Nurturing a healthier relationship with your emotions and building resilience.' },
    { title: 'Relationships', icon: 'lucide:users-2', desc: 'Improving communication, understanding dynamics, and fostering deeper connections.' },
    { title: 'Personal Growth', icon: 'lucide:leaf', desc: 'Discovering your potential and aligning your life with your truest values.' },
    { title: 'Life Transitions', icon: 'lucide:refresh-cw', desc: 'Navigating changes in career, identity, or location with grace and clarity.' }
  ]

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal">
          <div className="max-w-2xl">
            <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.2em] mb-3 block flex items-center gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:layers"></iconify-icon>Support Areas
            </span>
            <h2 className="text-4xl lg:text-6xl serif leading-tight text-[var(--text)]">
              Wherever you are, there's <span className="text-[var(--primary)]">room to begin.</span>
            </h2>
          </div>
          <a href="#services" className="group flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[var(--primary)]/30 pb-2 text-[var(--primary)] hover:border-[var(--primary)] transition-all">
            <span>Explore Services</span>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="group bg-white p-8 rounded-sm border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-xl transition-all duration-500 cursor-pointer scroll-reveal">
              <div className="w-12 h-12 mb-6 bg-[var(--secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                {/* @ts-expect-error iconify */}
                <iconify-icon icon={area.icon} class="text-[var(--primary)] group-hover:text-white text-2xl"></iconify-icon>
              </div>
              <h3 className="text-2xl mb-3 serif text-[var(--text)]">{area.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">{area.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:plus" class="text-[var(--primary)] group-hover:rotate-90 transition-transform"></iconify-icon>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
