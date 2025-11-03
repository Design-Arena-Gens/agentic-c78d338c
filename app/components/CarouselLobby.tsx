'use client'

import { useState, useEffect } from 'react'
import { User, Gift, Home, Users, Trophy, ShoppingBag, Coins, Crown, Zap, Gem } from 'lucide-react'

interface Game {
  id: number
  icon: React.ReactNode
  title: string
  entryFee: number
  reward: number
  featured?: boolean
}

const games: Game[] = [
  { id: 1, icon: <Crown className="w-8 h-8" />, title: 'Royal Flush', entryFee: 100, reward: 500, featured: true },
  { id: 2, icon: <Gem className="w-8 h-8" />, title: 'Diamond Rush', entryFee: 250, reward: 1250, featured: true },
  { id: 3, icon: <Zap className="w-8 h-8" />, title: 'Lightning Match', entryFee: 50, reward: 200 },
  { id: 4, icon: <Trophy className="w-8 h-8" />, title: 'Champion Stakes', entryFee: 500, reward: 3000, featured: true },
  { id: 5, icon: <Coins className="w-8 h-8" />, title: 'Gold Rush', entryFee: 150, reward: 800 },
]

export default function CarouselLobby() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-felt via-casino-green to-casino-mahogany elegant-text">
      {/* Top Bar */}
      <div className="px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-casino-gold to-casino-goldDark flex items-center justify-center border-2 border-casino-gold shadow-glow-gold">
            <User className="w-6 h-6 text-casino-green" />
          </div>
          <div>
            <div className="text-casino-gold font-bold text-sm">VIP Player</div>
            <div className="flex items-center gap-1 text-casino-goldLight text-xs">
              <Coins className="w-3 h-3" />
              <span className="font-semibold">12,450</span>
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-casino-gold to-casino-goldLight text-casino-green px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-glow-gold hover:shadow-glow-gold-lg transition-all transform hover:scale-105">
          <Gift className="w-4 h-4" />
          Daily Bonus
        </button>
      </div>

      {/* Carousel Section */}
      <div className="px-6 py-8">
        <h2 className="text-casino-gold text-2xl font-bold mb-6 text-center text-shadow-gold">
          Featured Games
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {games.map((game) => (
              <div
                key={game.id}
                className="min-w-full px-2"
              >
                <div className="bg-gradient-to-br from-casino-mahogany/80 to-casino-green/80 backdrop-blur-md rounded-2xl p-6 border-2 border-casino-gold/50 shadow-glow-gold animate-glow-pulse">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-casino-gold to-casino-goldDark flex items-center justify-center text-casino-green shadow-glow-gold">
                      {game.icon}
                    </div>

                    <h3 className="text-casino-gold font-bold text-2xl text-shadow-gold">
                      {game.title}
                    </h3>

                    <div className="flex gap-6 w-full justify-center py-3">
                      <div className="text-center">
                        <div className="text-casino-goldLight text-xs uppercase tracking-wider">Entry</div>
                        <div className="text-casino-gold font-bold text-lg flex items-center justify-center gap-1">
                          <Coins className="w-4 h-4" />
                          {game.entryFee}
                        </div>
                      </div>
                      <div className="w-px bg-casino-gold/30"></div>
                      <div className="text-center">
                        <div className="text-casino-goldLight text-xs uppercase tracking-wider">Win Up To</div>
                        <div className="text-casino-gold font-bold text-lg flex items-center justify-center gap-1">
                          <Crown className="w-4 h-4" />
                          {game.reward}
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-emerald-500 via-casino-gold to-emerald-500 text-casino-green font-bold text-xl py-4 rounded-xl shadow-glow-gold-lg hover:shadow-glow-gold transition-all transform hover:scale-105 active:scale-95 border-2 border-casino-goldLight">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-casino-gold w-8 shadow-glow-gold'
                    : 'bg-casino-gold/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-xl">127</div>
            <div className="text-casino-goldLight text-xs">Players Online</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-xl">$45K</div>
            <div className="text-casino-goldLight text-xs">Prize Pool</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-xl">8</div>
            <div className="text-casino-goldLight text-xs">Active Tables</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md border-t-2 border-casino-gold/30">
        <div className="flex justify-around items-center px-6 py-4">
          <button className="flex flex-col items-center gap-1 text-casino-gold">
            <Home className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-casino-goldLight/60 hover:text-casino-goldLight transition-colors">
            <Users className="w-6 h-6" />
            <span className="text-xs font-semibold">Friends</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-casino-goldLight/60 hover:text-casino-goldLight transition-colors">
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-semibold">Tournaments</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-casino-goldLight/60 hover:text-casino-goldLight transition-colors">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs font-semibold">Shop</span>
          </button>
        </div>
      </div>
    </div>
  )
}
