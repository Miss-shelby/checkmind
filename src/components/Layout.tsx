import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTopButton } from './ScrollToTopButton'
import { WhatsAppChat } from './WhatsAppChat'

export function Layout() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 line-pattern pointer-events-none -z-10"></div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppChat />
      <ScrollToTopButton />
    </div>
  )
}
