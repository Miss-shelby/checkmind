import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

export function BookingForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const navigate = useNavigate()

  // Calendly Event Listener for successful booking
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Calendly Event Scheduled:', e.data.payload)
      navigate('/booking-confirmation', { state: { sessionType: selectedType } })
    }
  })

  const handleSelect = (type: string) => {
    setSelectedType(type)
  }

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3)
      // Scroll to top of the form area for better UX
      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderStepHeader = () => {
    const progress = step === 1 ? '33%' : step === 2 ? '66%' : '100%'

    return (
      <>
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--secondary)]">
          <div className="h-full bg-[var(--primary)] step-line transition-all duration-500 ease-out" style={{ width: progress }}></div>
        </div>
        
        <div className="flex justify-between items-center mb-12 relative z-10 px-4 sm:px-12">
          <div className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center step-dot transition-colors ${step >= 1 ? 'border-[var(--primary)] bg-white active' : 'border-[var(--border)] bg-white'}`}>
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:layers" class={`text-sm ${step >= 1 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}></iconify-icon>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${step >= 1 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}>Session</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center step-dot transition-colors ${step >= 2 ? 'border-[var(--primary)] bg-white active' : 'border-[var(--border)] bg-white'}`}>
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:credit-card" class={`text-sm ${step >= 2 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}></iconify-icon>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${step >= 2 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}>Payment</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center step-dot transition-colors ${step >= 3 ? 'border-[var(--primary)] bg-white active' : 'border-[var(--border)] bg-white'}`}>
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:calendar-days" class={`text-sm ${step >= 3 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}></iconify-icon>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${step >= 3 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}`}>Calendar</span>
          </div>
        </div>
      </>
    )
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-2 block">Step 01</span>
                <h3 className="text-3xl serif text-[var(--text)]">Select your session type</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                
                <div 
                  className={`group p-6 border-2 rounded-sm cursor-pointer transition-all flex items-center gap-6 ${selectedType === 'initial' ? 'border-[var(--primary)] bg-[var(--secondary)]/10' : 'border-[var(--border)] hover:border-[var(--primary)]'}`}
                  onClick={() => handleSelect('initial')}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${selectedType === 'initial' ? 'bg-white' : 'bg-[var(--secondary)]/20'}`}>
                    {/* @ts-expect-error iconify */}
                    <iconify-icon icon="lucide:message-square" class="text-xl text-[var(--primary)]"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg serif">Initial Consultation</h4>
                    <p className="text-xs text-[var(--muted)]">15 min • Complimentary • Introduction & Evaluation</p>
                  </div>
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon={selectedType === 'initial' ? 'lucide:check-circle' : 'lucide:circle'} class={`text-xl ${selectedType === 'initial' ? 'text-[var(--primary)]' : 'text-[var(--border)] group-hover:text-[var(--primary)]'}`}></iconify-icon>
                </div>
                
                <div 
                  className={`group p-6 border-2 rounded-sm cursor-pointer transition-all flex items-center gap-6 ${selectedType === 'individual' ? 'border-[var(--primary)] bg-[var(--secondary)]/10' : 'border-[var(--border)] hover:border-[var(--primary)]'}`}
                  onClick={() => handleSelect('individual')}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${selectedType === 'individual' ? 'bg-white' : 'bg-[var(--secondary)]/20'}`}>
                    {/* @ts-expect-error iconify */}
                    <iconify-icon icon="lucide:heart" class="text-xl text-[var(--primary)]"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg serif">Individual Therapy</h4>
                    <p className="text-xs text-[var(--muted)]">50 min • $150 • Full clinical session</p>
                  </div>
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon={selectedType === 'individual' ? 'lucide:check-circle' : 'lucide:circle'} class={`text-xl ${selectedType === 'individual' ? 'text-[var(--primary)]' : 'text-[var(--border)] group-hover:text-[var(--primary)]'}`}></iconify-icon>
                </div>
                
                <div 
                  className={`group p-6 border-2 rounded-sm cursor-pointer transition-all flex items-center gap-6 ${selectedType === 'followup' ? 'border-[var(--primary)] bg-[var(--secondary)]/10' : 'border-[var(--border)] hover:border-[var(--primary)]'}`}
                  onClick={() => handleSelect('followup')}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${selectedType === 'followup' ? 'bg-white' : 'bg-[var(--secondary)]/20'}`}>
                    {/* @ts-expect-error iconify */}
                    <iconify-icon icon="lucide:refresh-cw" class="text-xl text-[var(--primary)]"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg serif">Follow-up Session</h4>
                    <p className="text-xs text-[var(--muted)]">30 min • $90 • Ongoing support</p>
                  </div>
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon={selectedType === 'followup' ? 'lucide:check-circle' : 'lucide:circle'} class={`text-xl ${selectedType === 'followup' ? 'text-[var(--primary)]' : 'text-[var(--border)] group-hover:text-[var(--primary)]'}`}></iconify-icon>
                </div>

              </div>
            </div>
            
            <div className="pt-8 flex justify-end">
              <button 
                className={`text-white px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${selectedType ? 'bg-[var(--primary)] hover:brightness-110 shadow-md' : 'bg-[var(--muted)] opacity-50 cursor-not-allowed'}`}
                disabled={!selectedType}
                onClick={handleNextStep}
              >
                Next: Make Payment 
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:arrow-right"></iconify-icon>
              </button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="form-step space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-2 block">Step 02</span>
                <h3 className="text-3xl serif text-[var(--text)]">Complete your payment</h3>
                <p className="text-sm text-[var(--muted)] mt-2">Please make a transfer to the account below to secure your session. Once completed, click "Payment Made" to choose your date and time.</p>
              </div>

              <div className="bg-[var(--secondary)]/20 border border-[var(--border)] rounded-sm p-8 mt-6 max-w-lg mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {/* @ts-expect-error iconify */}
                    <iconify-icon icon="lucide:building-2" class="text-2xl text-[var(--primary)]"></iconify-icon>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between py-3 border-b border-[var(--border)]">
                      <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">Bank Name</span>
                      <span className="text-sm font-medium">Global Secure Bank</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-[var(--border)]">
                      <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">Account Name</span>
                      <span className="text-sm font-medium">CheckMind Clinic Inc.</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">Account No.</span>
                      <span className="text-lg font-bold text-[var(--primary)] tracking-wider">1234 5678 9000</span>
                    </div>
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-4 p-3 bg-white rounded-sm border border-[var(--border)] w-full">
                    <strong>Amount due:</strong> {selectedType === 'initial' ? 'Complimentary ($0.00)' : selectedType === 'individual' ? '$150.00' : '$90.00'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 flex justify-between items-center">
              <button 
                className="text-[var(--muted)] hover:text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                onClick={() => setStep(1)}
              >
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:arrow-left"></iconify-icon>
                Back
              </button>
              
              <button 
                className="bg-[var(--primary)] hover:brightness-110 shadow-md text-white px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                onClick={handleNextStep}
              >
                Payment Made
                {/* @ts-expect-error iconify */}
                <iconify-icon icon="lucide:check"></iconify-icon>
              </button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="form-step space-y-8 animate-fade-in flex flex-col h-[700px]">
            <div className="space-y-2 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-2 block">Step 03</span>
                  <h3 className="text-3xl serif text-[var(--text)]">Choose date & time</h3>
                </div>
                <button 
                  className="text-[var(--muted)] hover:text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                  onClick={() => setStep(2)}
                >
                  {/* @ts-expect-error iconify */}
                  <iconify-icon icon="lucide:arrow-left"></iconify-icon>
                  Back
                </button>
              </div>
            </div>
            
            <div className="w-full flex-grow -mx-4 sm:mx-0 relative">
              <InlineWidget 
                url="https://calendly.com/ceeyntia/30min"
                styles={{ height: '100%', width: '100%' }}
                pageSettings={{
                  backgroundColor: 'FFFBF7',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '8B3A47',
                  textColor: '2D2424'
                }}
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="lg:col-span-7 scroll-reveal active">
      <div className="bg-white border border-[var(--border)] rounded-sm shadow-xl p-6 sm:p-8 lg:p-12 relative overflow-hidden" id="booking-form">
        {renderStepHeader()}
        {renderStepContent()}
      </div>
      
      <div className="mt-8 flex items-center gap-3 text-[var(--muted)] opacity-60 px-4">
        {/* @ts-expect-error iconify */}
        <iconify-icon icon="lucide:info" class="text-lg flex-shrink-0"></iconify-icon>
        <p className="text-[10px] uppercase tracking-widest leading-relaxed">
          {step === 3 
            ? "You will receive a calendar invitation via email once confirmed."
            : "All therapy sessions are confidential and HIPAA-compliant."}
        </p>
      </div>
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
