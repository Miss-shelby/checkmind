import { useState } from 'react'

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What happens during my first session?',
      a: "Your first session is a gentle introduction. We'll discuss what brought you to therapy, your history, and your goals. It's a mutual conversation to see if we're a good fit for working together in a safe, non-judgmental environment."
    },
    {
      q: 'Are sessions online or in person?',
      a: "We offer both! We have a beautiful physical boutique space in San Francisco for in-person visits, as well as a secure, HIPAA-compliant platform for high-quality virtual sessions regardless of your location."
    },
    {
      q: 'How do I book an appointment?',
      a: "You can book directly through our website by clicking the 'Book a Session' button. You'll be able to select your session type, preferred therapist, and a time slot that works best for your schedule."
    },
    {
      q: 'What happens after I request an appointment?',
      a: "Once you submit a request, our care coordinator will reach out via email or phone within 24 hours to confirm your details and provide necessary intake forms to ensure your first session is seamless."
    },
    {
      q: 'How do I know if therapy is right for me?',
      a: "If you're feeling stuck, overwhelmed, or simply want to understand your patterns better, therapy is a powerful tool. We offer brief initial consultations to help you decide if our approach aligns with your needs."
    }
  ]

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <section id="faq-section" className="py-20 px-8 lg:px-16 bg-white scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Questions</span>
            <h2 className="text-4xl lg:text-5xl serif text-[var(--text)]">Questions you might have.</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item border-b border-[var(--border)] group ${activeIndex === i ? 'active' : ''}`}>
                <button 
                  className="w-full py-6 flex items-center justify-between text-left group-hover:text-[var(--primary)] transition-colors"
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center gap-4">
                    {/* @ts-expect-error iconify */}
                    <iconify-icon icon="lucide:help-circle" class="text-[var(--primary)] opacity-50"></iconify-icon>
                    <span className="text-lg serif text-[var(--text)] group-hover:text-[var(--primary)]">{faq.q}</span>
                  </div>
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon="lucide:plus" class="text-[var(--primary)] transition-transform duration-300"></iconify-icon>
                </button>
                <div className="faq-content text-sm text-[var(--muted)] leading-relaxed px-10">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-16 bg-[var(--primary)] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10 opacity-10">
          <div className="w-[600px] h-[600px] organic-blob border-2 border-white animate-[spin_40s_linear_infinite]"></div>
        </div>
        <div className="max-w-3xl mx-auto scroll-reveal">
          {/* @ts-expect-error iconify */}
          <iconify-icon icon="lucide:flower-2" class="text-5xl text-[var(--accent)] mb-8 opacity-40 animate-pulse"></iconify-icon>
          <h2 className="text-5xl lg:text-7xl serif mb-8 leading-tight text-white">Begin whenever you're <span className="italic text-[var(--accent)]">ready.</span></h2>
          <p className="text-lg font-light text-white/70 mb-10">Sometimes, taking care of yourself starts with simply making space to talk. We're here when you are.</p>
          <a href="#book" id="final-cta-btn" className="inline-block bg-white text-[var(--primary)] px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--secondary)] transition-all shadow-2xl">
            Book a Session
          </a>
        </div>
      </section>
    </>
  )
}
