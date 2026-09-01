export function InternalConversation() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-[var(--primary)] text-white overflow-hidden relative">
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 organic-blob"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="scroll-reveal">
          <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-[0.2em] mb-6">The Internal Conversation</h2>
          <div className="space-y-6 mb-10">
            <div className="flex gap-6 items-start opacity-90 border-l-2 border-[var(--accent)] pl-6">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:message-circle" class="text-xl mt-1 text-[var(--accent)]"></iconify-icon>
              <p className="text-2xl lg:text-3xl serif italic">"I've been feeling overwhelmed lately."</p>
            </div>
            <div className="flex gap-6 items-start opacity-70 border-l-2 border-[var(--accent)]/40 pl-6">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:cloud-drizzle" class="text-xl mt-1"></iconify-icon>
              <p className="text-2xl lg:text-3xl serif italic">"I don't quite understand what I'm feeling."</p>
            </div>
            <div className="flex gap-6 items-start opacity-50 border-l-2 border-[var(--accent)]/20 pl-6">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:map-pin" class="text-xl mt-1"></iconify-icon>
              <p className="text-2xl lg:text-3xl serif italic">"Life feels different, and I'm trying to find my way."</p>
            </div>
          </div>
          <p className="text-base text-white/80 mb-8 max-w-md">
            You don't need to have everything figured out before asking for support. We're here to help you find the language for your experiences.
          </p>
          <a href="#first-step" className="inline-flex items-center gap-3 bg-white text-[var(--primary)] px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--secondary)] transition-all">
            Take the First Step 
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:arrow-right-circle"></iconify-icon>
          </a>
        </div>
        <div className="relative scroll-reveal flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm border border-white/10">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:heart" class="text-3xl text-[var(--accent)] mb-4"></iconify-icon>
              <h4 className="serif text-xl mb-2">Self Care</h4>
              <p className="text-xs text-white/60">Prioritizing your mental energy daily.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm border border-white/10">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:shield" class="text-3xl text-[var(--accent)] mb-4"></iconify-icon>
              <h4 className="serif text-xl mb-2">Safety</h4>
              <p className="text-xs text-white/60">A protected space for your thoughts.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-sm text-[var(--text)] shadow-2xl">
            <p className="italic serif text-xl mb-4">"Real growth starts when you allow yourself to be seen."</p>
            <div className="h-px w-12 bg-[var(--primary)]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
