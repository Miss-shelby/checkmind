import { useScrollReveal } from '../hooks/useScrollReveal'
import { HeroSection } from '../components/home/HeroSection'
import { SupportAreas } from '../components/home/SupportAreas'
import { InternalConversation } from '../components/home/InternalConversation'
import { FounderSection } from '../components/home/FounderSection'
import { Methodology } from '../components/home/Methodology'
import { Testimonials } from '../components/home/Testimonials'
import { ShopSection } from '../components/home/ShopSection'
import { FAQSection } from '../components/home/FAQSection'

export function Home() {
  useScrollReveal()

  return (
    <>
      <HeroSection />
      <SupportAreas />
      <InternalConversation />
      <FounderSection />
      <Methodology />
      <Testimonials />
      <ShopSection />
      <FAQSection />
    </>
  )
}
