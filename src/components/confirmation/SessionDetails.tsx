import { useLocation } from 'react-router-dom'

export function SessionDetails() {
  const location = useLocation()
  
  // Map the internal state to the display name
  const sessionTypeMap: Record<string, string> = {
    'initial': 'Initial Consultation',
    'individual': 'Individual Therapy',
    'followup': 'Follow-up Session'
  }
  
  const rawSessionType = location.state?.sessionType || 'initial'
  const displaySessionType = sessionTypeMap[rawSessionType] || 'Therapy Session'

  return (
    <div className="lg:col-span-7 space-y-12">
      <section className="bg-white border border-[var(--border)] p-8 rounded-sm shadow-sm scroll-reveal">
        <div className="flex justify-between items-center mb-8 border-b border-[var(--border)] pb-6">
          <h2 className="serif text-3xl">Session Details</h2>
          <div className="flex gap-3">
            <button id="btn-print" className="p-2 hover:bg-[var(--secondary)] rounded-full transition-colors text-[var(--muted)]">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:printer"></iconify-icon>
            </button>
            <button id="btn-download" className="p-2 hover:bg-[var(--secondary)] rounded-full transition-colors text-[var(--muted)]">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:download"></iconify-icon>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:sparkles" class="text-2xl text-[var(--accent)]"></iconify-icon>
            <div>
              <p className="text-[10px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Session Type</p>
              <p className="font-medium">{displaySessionType}</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:calendar" class="text-2xl text-[var(--accent)]"></iconify-icon>
            <div>
              <p className="text-[10px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Date & Time</p>
              <p className="font-medium text-[var(--primary)]">Check your email</p>
              <p className="text-sm text-[var(--muted)] mt-1 leading-snug">Your calendar invite has been sent to your inbox.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:monitor" class="text-2xl text-[var(--accent)]"></iconify-icon>
            <div>
              <p className="text-[10px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Location</p>
              <p className="font-medium">Secure Virtual Session</p>
              <p className="text-sm text-[var(--muted)]">Link provided in email</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:clock" class="text-2xl text-[var(--accent)]"></iconify-icon>
            <div>
              <p className="text-[10px] uppercase font-bold text-[var(--muted)] tracking-widest mb-1">Duration</p>
              <p className="font-medium">
                {rawSessionType === 'initial' ? '15 Minutes' : rawSessionType === 'individual' ? '50 Minutes' : '30 Minutes'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-4 bg-[var(--background)] rounded-sm border-l-4 border-[var(--primary)]">
          <div className="flex gap-3 items-center">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:shield-check" class="text-[var(--primary)]"></iconify-icon>
            <p className="text-xs font-medium text-[var(--primary)] uppercase tracking-wider">Privacy & Confidentiality Guaranteed</p>
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">Your session is conducted via a secure, end-to-end encrypted platform. No information is recorded without your explicit consent.</p>
        </div>
        
        <div className="mt-8 p-4 bg-[var(--secondary)]/20 border border-[var(--border)] rounded-sm text-center">
          <p className="text-xs text-[var(--muted)]">
            <strong>Need to reschedule?</strong> You can easily change your appointment time using the "Reschedule" link at the bottom of your confirmation email.
          </p>
        </div>
      </section>

      <section className="scroll-reveal">
        <h2 className="serif text-3xl mb-8">Your Journey Timeline</h2>
        <div className="flex justify-between relative">
          
          <div className="confirmation-step flex flex-col items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center relative z-10 mb-3">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:check"></iconify-icon>
            </div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-center">Confirmed</p>
          </div>
          
          <div className="confirmation-step flex flex-col items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-[var(--secondary)] border border-[var(--primary)] text-[var(--primary)] flex items-center justify-center relative z-10 mb-3">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:file-text"></iconify-icon>
            </div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-center">Intake Forms</p>
          </div>
          
          <div className="confirmation-step flex flex-col items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-white border border-[var(--border)] text-[var(--muted)] flex items-center justify-center relative z-10 mb-3">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:coffee"></iconify-icon>
            </div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-center">Preparation</p>
          </div>
          
          <div className="confirmation-step flex flex-col items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-white border border-[var(--border)] text-[var(--muted)] flex items-center justify-center relative z-10 mb-3">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:heart"></iconify-icon>
            </div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-center">Your Session</p>
          </div>

        </div>
      </section>
    </div>
  )
}
