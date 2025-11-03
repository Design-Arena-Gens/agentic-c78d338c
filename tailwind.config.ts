import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        casino: {
          green: '#0a5c3a',
          felt: '#1a7d4f',
          mahogany: '#4a1e1e',
          gold: '#ffd700',
          goldLight: '#ffe44d',
          goldDark: '#b8860b',
        },
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.5)',
        'glow-gold-lg': '0 0 30px rgba(255, 215, 0, 0.7)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
