import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface CartItemData extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItemData[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  cartTotal: number
  cartCount: number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Shared product catalog for the mockup
export const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Reflection Journal',
    price: 32,
    description: 'Linen bound with 200 pages of sustainably sourced recycled paper.',
    image: 'https://images.unsplash.com/photo-1602850450398-60144576326c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Grounding Throw',
    price: 120,
    description: 'Organic hand-woven cotton designed for moments of intentional rest.',
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Rest & Reset Oil',
    price: 24,
    description: 'A therapeutic blend of cedarwood, lavender, and clary sage.',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Silk Sleep Mask',
    price: 45,
    description: 'Grade 6A mulberry silk to protect your sleep and soothe the eyes.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Ceramic Holder',
    price: 38,
    description: 'Hand-thrown clay holder with minimalist matte gold finish.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Intention Cards',
    price: 22,
    description: '52 morning affirmations to help you set the tone for your day.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Clarity Tea Blend',
    price: 18,
    description: 'Loose leaf blend of peppermint, lemon balm, and ginkgo biloba.',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4586c552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Sandalwood Candle',
    price: 36,
    description: 'Soy wax candle with essential oils for a grounding atmospheric experience.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800'
  }
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItemData[]>(() => {
    try {
      const saved = localStorage.getItem('cartItems')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, delta: number) => {
    setItems(currentItems =>
      currentItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
  }

  const clearCart = () => setItems([])

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
