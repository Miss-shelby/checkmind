import { useState } from 'react'

export function ServiceList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const services = [
    {
      icon: 'lucide:wind',
      title: 'Anxiety & Overwhelm',
      desc: 'Finding calm amidst the noise of constant worry.',
      approachText: 'We utilize Cognitive Behavioral Therapy (CBT) and Mindfulness-based techniques to help you identify triggers and develop immediate grounding strategies. We don\'t just talk about the anxiety; we work together to dismantle its power over your daily life.',
      points: ['Panic Attack Management', 'Social Anxiety & Phobias', 'General Overwhelm'],
      specialistName: 'Elena Rousseau',
      specialistRole: 'Lead Specialist',
      specialistImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      quote: '"Anxiety is often a protector that has forgotten how to rest. Together, we teach it safety."',
      btnText: 'Book for Anxiety'
    },
    {
      icon: 'lucide:battery-warning',
      title: 'Stress & Burnout',
      desc: 'Recovering your energy and redefining boundaries.',
      approachText: 'Burnout isn\'t just about working too much; it\'s about a nervous system that has been pushed beyond its limits. We focus on somatic experiencing and systemic boundary setting to rebuild your internal resources from the ground up.',
      points: ['Career Burnout Recovery', 'High-Pressure Resilience', 'Compassion Fatigue'],
      specialistName: 'Marcus Reed',
      specialistRole: 'Somatic Specialist',
      specialistInitials: 'MR',
      quote: '"Burnout is the fire within dying out. Our work is the gentle blowing on the embers."',
      btnText: 'Book for Stress'
    },
    {
      icon: 'lucide:smile',
      title: 'Emotional Wellbeing',
      desc: 'Developing a healthy relationship with your feelings.',
      approachText: 'Holistic mental health starts with emotional literacy. We help you map your emotional landscape, understanding the messages behind sadness, anger, and joy, so you can respond with wisdom rather than reacting with habit.',
      points: ['Depressive States', 'Emotional Regulation', 'Self-Esteem & Worth'],
      specialistName: 'Aisha Rahman',
      specialistRole: 'Holistic Counselor',
      specialistInitials: 'AR',
      quote: '"You don\'t need to fix your feelings. You need to learn how to listen to them."',
      btnText: 'Book for Wellbeing'
    },
    {
      icon: 'lucide:users-2',
      title: 'Relationships',
      desc: 'Navigating connections with clarity and care.',
      approachText: 'Attachment-based therapy allows us to look at the foundations of how you connect. Whether working individually or as a couple, we focus on identifying cycles of disconnection and creating new pathways for intimacy and understanding.',
      points: ['Couples Therapy', 'Family Dynamics', 'Communication Skills'],
      specialistName: 'Julian Hayes',
      specialistRole: 'Relationship Specialist',
      specialistInitials: 'JH',
      quote: '"Connection is a skill that can be learned, and intimacy is a practice that can be restored."',
      btnText: 'Book for Relationships'
    }
  ]

  return (
    <section className="py-12 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {services.map((service, i) => (
          <div key={i} className={`service-card group bg-white p-8 lg:p-12 rounded-sm border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 scroll-reveal ${activeIndex === i ? 'active' : ''}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon={service.icon} class="text-[var(--primary)] group-hover:text-white text-3xl"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-3xl serif text-[var(--text)] mb-2">{service.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{service.desc}</p>
                </div>
              </div>
              <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] group" onClick={() => toggle(i)}>
                <span>View Details</span>
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:plus" class="expand-icon text-lg transition-transform duration-300"></iconify-icon>
              </button>
            </div>
            
            <div className="service-detail grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Our Approach</h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{service.approachText}</p>
                <ul className="space-y-2 text-xs text-[var(--muted)]">
                  {service.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2">
                      {/* @ts-expect-error iconify */}
                      <iconify-icon icon="lucide:check-circle-2" class="text-[var(--accent)]"></iconify-icon>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6 bg-[var(--background)] p-8 rounded-sm border border-[var(--border)]">
                <div className="flex items-center gap-4">
                  {service.specialistImg ? (
                    <img src={service.specialistImg} className="w-12 h-12 rounded-full object-cover grayscale" alt={service.specialistName} />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">{service.specialistInitials}</div>
                  )}
                  <div className="text-left">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">{service.specialistName}</h5>
                    <p className="text-[9px] text-[var(--muted)]">{service.specialistRole}</p>
                  </div>
                </div>
                <p className="text-xs italic text-[var(--text)]">{service.quote}</p>
                <a href="#book" className="block w-full text-center bg-[var(--primary)] text-white py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all">
                  {service.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
