import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Support } from './pages/Support'
import { Booking } from './pages/Booking'
import { Confirmation } from './pages/Confirmation'
import { Shop } from './pages/Shop'
import { Cart } from './pages/Cart'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="support" element={<Support />} />
            <Route path="book" element={<Booking />} />
            <Route path="booking-confirmation" element={<Confirmation />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
