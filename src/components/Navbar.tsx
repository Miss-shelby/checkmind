import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const location = useLocation()
  
  // Combine pathname and hash to determine the active link accurately
  const activePath = location.pathname + location.hash

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash scrolling when using React Router Link
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const getLinkClasses = (path: string, isMobile: boolean = false) => {
    const isLinkActive = 
      (path === '/#about' && (activePath === '/#about' || activePath === '/')) ||
      (activePath === path)

    const baseClasses = isMobile
      ? 'text-lg font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-3 group'
      : 'transition-colors flex items-center gap-2 group'

    return `${baseClasses} ${
      isLinkActive ? 'text-[var(--primary)]' : 'hover:text-[var(--primary)] text-[var(--text)]'
    }`
  }

  const getIconClasses = (path: string) => {
    const isLinkActive = 
      (path === '/#about' && (activePath === '/#about' || activePath === '/')) ||
      (activePath === path)
    
    return `transition-opacity ${isLinkActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`
  }

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 lg:px-16 flex items-center justify-between ${
          scrolled ? 'nav-scrolled py-3' : 'py-4 lg:py-5'
        }`}
      >
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl lg:text-2xl font-semibold tracking-tighter serif flex items-center gap-2 z-50" style={{ color: 'var(--primary)' }}>
          {/* @ts-expect-error iconify custom element */}
          <iconify-icon icon="lucide:flower-2" class="text-2xl lg:text-3xl"></iconify-icon>
          <span>CHECKMIND</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-semibold tracking-[0.2em] uppercase">
          <Link to="/#about" className={getLinkClasses('/#about')}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:heart-handshake" class={getIconClasses('/#about')}></iconify-icon>
            About
          </Link>
          <Link to="/support" className={getLinkClasses('/support')}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:sparkles" class={getIconClasses('/support')}></iconify-icon>
            Support
          </Link>
          <Link to="/#approach" className={getLinkClasses('/#approach')}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:compass" class={getIconClasses('/#approach')}></iconify-icon>
            Approach
          </Link>
          <Link to="/shop" className={getLinkClasses('/shop')}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:shopping-bag" class={getIconClasses('/shop')}></iconify-icon>
            Shop
          </Link>
          <Link to="/#faq-section" className={getLinkClasses('/#faq-section')}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:help-circle" class={getIconClasses('/#faq-section')}></iconify-icon>
            FAQ
          </Link>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-6 z-50">
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="text-xl hover:text-[var(--primary)] transition-colors relative">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:shopping-cart"></iconify-icon>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                {cartCount}
              </span>
            )}
          </Link>
          <a href="#account" className="hidden lg:block text-xl hover:text-[var(--primary)] transition-colors">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:user-round"></iconify-icon>
          </a>
          <Link to="/book" className="hidden lg:block bg-[var(--primary)] text-white px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-md">
            Book a Session
          </Link>
          
          <button 
            className="lg:hidden text-2xl hover:text-[var(--primary)] transition-colors focus:outline-none flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* @ts-expect-error iconify */}
            <iconify-icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 lg:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses('/#about', true)}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:heart-handshake" class={getIconClasses('/#about')}></iconify-icon>
            About
          </Link>
          <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses('/support', true)}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:sparkles" class={getIconClasses('/support')}></iconify-icon>
            Support
          </Link>
          <Link to="/#approach" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses('/#approach', true)}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:compass" class={getIconClasses('/#approach')}></iconify-icon>
            Approach
          </Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses('/shop', true)}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:shopping-bag" class={getIconClasses('/shop')}></iconify-icon>
            Shop
          </Link>
          <Link to="/#faq-section" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses('/#faq-section', true)}>
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:help-circle" class={getIconClasses('/#faq-section')}></iconify-icon>
            FAQ
          </Link>
        </div>
        
        <div className="pt-8 border-t border-[var(--border)] flex flex-col items-center gap-6 w-3/4 max-w-xs">
          <a href="#account" className="text-sm font-semibold tracking-widest uppercase flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:user-round" class="text-xl"></iconify-icon> Account
          </a>
          <Link to="/book" onClick={() => setIsMobileMenuOpen(false)} className="bg-[var(--primary)] text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest w-full text-center hover:brightness-110 shadow-md transition-all">
            Book a Session
          </Link>
        </div>
      </div>
    </>
  )
}
