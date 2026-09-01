import { useScrollReveal } from '../hooks/useScrollReveal'
import { ServicesHero } from '../components/support/ServicesHero'
import { ServiceList } from '../components/support/ServiceList'
import { ServicesCTA } from '../components/support/ServicesCTA'

export function Support() {
  useScrollReveal()

  return (
    <>
      <ServicesHero />
      <ServiceList />
      <ServicesCTA />
    </>
  )
}
