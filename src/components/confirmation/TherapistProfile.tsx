export function TherapistProfile() {
  return (
    <div className="lg:col-span-5 space-y-12">
      <section className="bg-white border border-[var(--border)] overflow-hidden rounded-sm shadow-sm scroll-reveal">
        <div className="h-40 bg-[var(--secondary)] relative flex items-center px-8 overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-[var(--accent)]/10 organic-blob"></div>
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:flower-2" class="text-8xl text-white opacity-50 absolute right-12"></iconify-icon>
          <h2 className="serif text-2xl relative z-10">Your Therapist</h2>
        </div>
        <div className="p-8 -mt-12 relative z-10">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Elena Rousseau" className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover mb-4" />
          <h3 className="text-xl font-bold">Elena Rousseau</h3>
          <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--primary)] mb-4">Clinical Director & M.Sc. Psychology</p>
          <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
            Elena specializes in helping individuals navigate anxiety and high-performance burnout through an empathetic, clinical-grade lens. She focuses on reclaiming the innate capacity for internal peace.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[9px] uppercase px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full">Anxiety</span>
            <span className="text-[9px] uppercase px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full">Burnout</span>
            <span className="text-[9px] uppercase px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full">CBT</span>
          </div>
        </div>
      </section>

      <section className="bg-[var(--secondary)]/20 border border-[var(--border)] p-8 rounded-sm scroll-reveal">
        <h2 className="serif text-2xl mb-6">Preparation Tips</h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:pencil" class="text-[var(--primary)] mt-0.5"></iconify-icon>
            <div className="text-xs text-[var(--muted)] leading-relaxed">
              <strong className="text-[var(--text)] block mb-1">Intake Forms</strong>
              Please complete the intake forms sent to your email at least 24 hours prior to the session.
            </div>
          </li>
          <li className="flex gap-3">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:wifi" class="text-[var(--primary)] mt-0.5"></iconify-icon>
            <div className="text-xs text-[var(--muted)] leading-relaxed">
              <strong className="text-[var(--text)] block mb-1">Technical Check</strong>
              For virtual sessions, ensure a stable connection and functional microphone/camera.
            </div>
          </li>
          <li className="flex gap-3">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:ear" class="text-[var(--primary)] mt-0.5"></iconify-icon>
            <div className="text-xs text-[var(--muted)] leading-relaxed">
              <strong className="text-[var(--text)] block mb-1">Safe Space</strong>
              Choose a private, quiet area where you feel comfortable speaking openly without being overheard.
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
