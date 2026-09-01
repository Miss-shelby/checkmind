import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ShopHero } from '../components/shop/ShopHero'
import { ShopFilters } from '../components/shop/ShopFilters'
import { ProductGrid } from '../components/shop/ProductGrid'
import { ShopNewsletter } from '../components/shop/ShopNewsletter'
import { Toast } from '../components/shop/Toast'
import { useCart, type Product } from '../context/CartContext'

export function Shop() {
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setToastMessage(`${product.name} has been added.`)
    setShowToast(true)
    
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  useScrollReveal()

  return (
    <main className="pt-24 lg:pt-32 pb-20">
      <ShopHero />
      <ShopFilters />
      <ProductGrid onAddToCart={handleAddToCart} />
      <ShopNewsletter />
      <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </main>
  )
}
