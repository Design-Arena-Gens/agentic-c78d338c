'use client'

import { useState } from 'react'
import CarouselLobby from './components/CarouselLobby'
import CategoryLobby from './components/CategoryLobby'

export default function Home() {
  const [variant, setVariant] = useState<'carousel' | 'category'>('carousel')

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setVariant('carousel')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            variant === 'carousel'
              ? 'bg-casino-gold text-casino-green'
              : 'bg-casino-green/50 text-casino-gold border border-casino-gold'
          }`}
        >
          Carousel
        </button>
        <button
          onClick={() => setVariant('category')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            variant === 'category'
              ? 'bg-casino-gold text-casino-green'
              : 'bg-casino-green/50 text-casino-gold border border-casino-gold'
          }`}
        >
          Category
        </button>
      </div>

      {variant === 'carousel' ? <CarouselLobby /> : <CategoryLobby />}
    </div>
  )
}
