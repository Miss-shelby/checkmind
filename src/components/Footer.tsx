import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer id="footer-persistent" className="bg-[var(--background)] py-16 px-8 lg:px-16 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <Link to="/" className="text-xl font-bold tracking-tighter serif block mb-6 text-[var(--primary)] flex items-center gap-2">
            {/* @ts-expect-error iconify */}
            <iconify-icon icon="lucide:flower-2"></iconify-icon>CHECKMIND
          </Link>
          <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
            Premium mental health therapy practice focused on human-centered care and emotional safety.
          </p>
          <div className="flex space-x-4">
            <a href="#ig" className="text-lg text-[var(--primary)] hover:scale-110 transition-transform">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:instagram"></iconify-icon>
            </a>
            <a href="#li" className="text-lg text-[var(--primary)] hover:scale-110 transition-transform">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:linkedin"></iconify-icon>
            </a>
            <a href="#tw" className="text-lg text-[var(--primary)] hover:scale-110 transition-transform">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:twitter"></iconify-icon>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[var(--text)]">Explore</h4>
          <ul className="space-y-3 text-[11px] font-medium text-[var(--muted)]">
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#about">About the Clinic</a></li>
            <li className="hover:text-[var(--primary)] transition-colors"><Link to="/support">Therapy Options</Link></li>
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#approach">Our Philosophy</a></li>
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#shop">Wellness Shop</a></li>
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#faq">Common FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[var(--text)]">Account</h4>
          <ul className="space-y-3 text-[11px] font-medium text-[var(--muted)]">
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#login">Client Login</a></li>
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#appointments">Appointments</a></li>
            <li className="hover:text-[var(--primary)] transition-colors"><a href="#orders">Past Orders</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[var(--text)]">Contact</h4>
          <ul className="space-y-3 text-[11px] font-medium text-[var(--muted)]">
            <li className="flex items-center gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:mail" class="text-[var(--primary)]"></iconify-icon> hello@checkmind.clinic
            </li>
            <li className="flex items-center gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:phone" class="text-[var(--primary)]"></iconify-icon> +1 (555) 012-3456
            </li>
            <li className="flex items-center gap-2">
              {/* @ts-expect-error iconify */}
              <iconify-icon icon="lucide:map-pin" class="text-[var(--primary)]"></iconify-icon> 24 Wellness Row, SF
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] opacity-60">
        <p>&copy; 2024 CheckMind Clinic. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  )
}
