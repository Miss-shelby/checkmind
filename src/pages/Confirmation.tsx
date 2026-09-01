import { useScrollReveal } from '../hooks/useScrollReveal'
import { ConfirmationHeader } from '../components/confirmation/ConfirmationHeader'
import { SessionDetails } from '../components/confirmation/SessionDetails'
import { TherapistProfile } from '../components/confirmation/TherapistProfile'
import { ContactSupport } from '../components/confirmation/ContactSupport'

export function Confirmation() {
  useScrollReveal()

  return (
    <main className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <ConfirmationHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <SessionDetails />
          <TherapistProfile />
        </div>
        <ContactSupport />
      </div>
    </main>
  )
}
