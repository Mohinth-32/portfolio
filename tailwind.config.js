/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Space Grotesk',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        dark: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#1a1f3d',
          600: '#2a2f52',
          500: '#3b4270',
          400: '#64748b',
        },
        accent: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9',
        },
        nebula: {
          purple: '#a855f7',
          blue: '#6366f1',
          pink: '#ec4899',
          cyan: '#22d3ee',
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'shooting-star': 'shootingStar 3s linear infinite',
        orbit: 'orbit 20s linear infinite',
        // Orbit galaxy animations
        'orbit-cw-fast': 'orbitSpin 15s linear infinite',
        'orbit-ccw-fast': 'orbitSpin 15s linear infinite reverse',
        'orbit-ccw-med': 'orbitSpin 25s linear infinite reverse',
        'orbit-cw-med': 'orbitSpin 25s linear infinite',
        'orbit-cw-slow': 'orbitSpin 40s linear infinite',
        'orbit-ccw-slow': 'orbitSpin 40s linear infinite reverse',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shootingStar: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'translateX(-300px) translateY(300px)',
            opacity: '0',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(150px) rotate(-360deg)',
          },
        },
        orbitSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(56,189,248,0.3), 0 0 60px rgba(99,102,241,0.15)',
          },
          '50%': {
            boxShadow:
              '0 0 40px rgba(56,189,248,0.5), 0 0 80px rgba(99,102,241,0.3)',
          },
        },
      },
    },
  },
  plugins: [],
};
