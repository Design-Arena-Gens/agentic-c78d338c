'use client'

import { Spade, Clock, Users, GraduationCap, Trophy, Crown, Sparkles } from 'lucide-react'

interface GameMode {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  gradient: string
}

const gameModes: GameMode[] = [
  {
    id: 'classic',
    title: 'Classic Games',
    subtitle: 'Traditional casino favorites',
    icon: <Spade className="w-8 h-8" />,
    gradient: 'from-casino-gold via-casino-goldLight to-casino-gold',
  },
  {
    id: 'quick',
    title: 'Quick Games',
    subtitle: 'Fast-paced 5-minute rounds',
    icon: <Clock className="w-8 h-8" />,
    gradient: 'from-amber-400 via-yellow-300 to-amber-400',
  },
  {
    id: 'friends',
    title: 'Friends Games',
    subtitle: 'Play with your friends',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-casino-goldDark via-casino-gold to-casino-goldDark',
  },
  {
    id: 'training',
    title: 'Training',
    subtitle: 'Practice & improve your skills',
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: 'from-yellow-500 via-casino-goldLight to-yellow-500',
  },
]

const tournaments = [
  { name: 'Royal Championship', prize: '$10,000', players: 234 },
  { name: 'Golden Hour Blitz', prize: '$5,000', players: 156 },
  { name: 'Weekend Warriors', prize: '$25,000', players: 489 },
]

export default function CategoryLobby() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-green via-casino-felt to-casino-green elegant-text pb-8">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative px-6 pt-8 pb-12 text-center">
          <div className="flex justify-center mb-3">
            <Crown className="w-16 h-16 text-casino-gold drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]" />
          </div>
          <h1 className="text-4xl font-bold text-casino-gold mb-2 text-shadow-gold">
            King Bolola
          </h1>
          <p className="text-casino-goldLight text-sm">Select Your Game Mode</p>
        </div>
      </div>

      {/* Game Mode Selection */}
      <div className="px-6 space-y-4">
        {gameModes.map((mode) => (
          <button
            key={mode.id}
            className="w-full group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl from-casino-gold/50 to-casino-goldLight/50"></div>
            <div className="relative bg-gradient-to-br from-black/40 to-casino-mahogany/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-casino-gold/50 hover:border-casino-gold transition-all group-hover:shadow-glow-gold group-active:scale-98">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center text-casino-green shadow-lg`}>
                  {mode.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-casino-gold font-bold text-xl mb-1">
                    {mode.title}
                  </h3>
                  <p className="text-casino-goldLight text-sm">
                    {mode.subtitle}
                  </p>
                </div>
                <div className="text-casino-gold opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Top Tournaments Section */}
      <div className="px-6 mt-8">
        <div className="bg-gradient-to-br from-casino-mahogany/80 to-black/60 backdrop-blur-md rounded-2xl p-6 border-2 border-casino-gold/60 shadow-glow-gold">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Trophy className="w-6 h-6 text-casino-gold" />
            <h2 className="text-casino-gold font-bold text-xl text-shadow-gold">
              Top Tournaments Today
            </h2>
            <Sparkles className="w-5 h-5 text-casino-goldLight" />
          </div>

          <div className="space-y-3 mb-5">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-casino-green/20 rounded-xl p-4 border border-casino-gold/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-casino-gold font-bold text-sm mb-1">
                      {tournament.name}
                    </div>
                    <div className="text-casino-goldLight text-xs">
                      {tournament.players} players joined
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-casino-gold font-bold text-lg">
                      {tournament.prize}
                    </div>
                    <div className="text-casino-goldLight text-xs">Prize Pool</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 via-casino-gold to-emerald-500 text-casino-green font-bold text-xl py-5 rounded-xl shadow-glow-gold-lg hover:shadow-glow-gold transition-all transform hover:scale-105 active:scale-95 border-2 border-casino-goldLight">
            Join Tournament
          </button>
        </div>
      </div>

      {/* Quick Play Button */}
      <div className="px-6 mt-6">
        <button className="w-full bg-gradient-to-r from-casino-gold via-casino-goldLight to-casino-gold text-casino-green font-bold text-2xl py-6 rounded-2xl shadow-glow-gold-lg hover:shadow-glow-gold transition-all transform hover:scale-105 active:scale-95 border-4 border-casino-goldLight relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative flex items-center justify-center gap-3">
            <Crown className="w-8 h-8" />
            Play Now
            <Crown className="w-8 h-8" />
          </span>
        </button>
      </div>

      {/* Stats Footer */}
      <div className="px-6 mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-2xl mb-1">324</div>
            <div className="text-casino-goldLight text-xs">Online Now</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-2xl mb-1">$92K</div>
            <div className="text-casino-goldLight text-xs">Daily Prizes</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-casino-gold/30">
            <div className="text-casino-gold font-bold text-2xl mb-1">15</div>
            <div className="text-casino-goldLight text-xs">Live Tables</div>
          </div>
        </div>
      </div>
    </div>
  )
}
