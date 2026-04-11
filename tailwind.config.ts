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
        background: '#000000',
        surface: '#0A0A0A',
        'text-heading': 'rgba(255,255,255,0.92)',
        'text-body': 'rgba(255,255,255,0.50)',
        'text-muted': 'rgba(255,255,255,0.25)',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'accent-white': 'rgba(255,255,255,0.90)',
        'accent-cyan': '#00F5D4',
        'accent-teal': '#00BBF9',
        'accent-violet': '#9B5DE5',
        'accent-magenta': '#F15BB5',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        tight: '-0.03em',
        wide: '0.18em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'mesh': '80px 80px',
      },
    },
  },
  plugins: [],
}
export default config