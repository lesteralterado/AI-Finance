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
        'c-black': '#000000',
        'c-void': '#050505',
        'c-950': '#0A0A0A',
        'c-900': '#111111',
        'c-800': '#1A1A1A',
        'c-700': '#2A2A2A',
        'c-600': '#3D3D3D',
        'c-500': '#555555',
        'c-400': '#888888',
        'c-300': '#AAAAAA',
        'c-200': '#CCCCCC',
        'c-100': '#E5E5E5',
        'c-white': '#FFFFFF',
        background: '#000000',
        surface: '#0A0A0A',
        'text-heading': '#FFFFFF',
        'text-body': '#AAAAAA',
        'text-muted': '#555555',
        'border-subtle': '#1A1A1A',
        'accent-white': '#FFFFFF',
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