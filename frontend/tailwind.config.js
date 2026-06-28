/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        void:    '#0A0F1E',  // deep space navy — app background
        surface: '#111827',  // card/panel base
        panel:   '#1E2A4A',  // elevated surface
        border:  '#1F2D4A',  // subtle dividers
        // Accents
        signal:  '#00D4FF',  // electric cyan — primary accent
        pulse:   '#0EA5E9',  // signal variant
        amber:   '#F59E0B',  // cluster intensity / warm highlight
        rose:    '#F43F5E',  // error / alert
        // Text
        ink:     '#F8FAFC',  // headings
        muted:   '#64748B',  // secondary text
        ghost:   '#334155',  // placeholder
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sweep': 'sweep 2s ease-in-out',
        'fade-up': 'fadeUp 0.3s ease-out',
        'slide-in': 'slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        sweep: {
          '0%': { opacity: '0', transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { opacity: '1', transform: 'scaleX(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'signal': '0 0 20px rgba(0, 212, 255, 0.15)',
        'signal-strong': '0 0 40px rgba(0, 212, 255, 0.3)',
        'panel': '0 1px 3px rgba(0,0,0,0.5), 0 1px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
