/**
 * Tailwind CSS Configuration - Navigator Marketing Site
 * 
 * Custom configuration for Navigator's marketing website,
 * implementing the blue-to-purple theme with professional
 * design tokens and animation utilities.
 * 
 * @author Navigator Marketing Team
 * @version 1.0.0
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Navigator Brand Colors
      colors: {
        navigator: {
          // Blue Palette
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          // Purple Palette
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
          },
          // Indigo Bridge
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          }
        }
      },
      
      // Custom Font Family
      fontFamily: {
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        'display': [
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      },
      
      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      
      // Custom Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      
      // Custom Box Shadows
      boxShadow: {
        'navigator': '0 10px 40px rgba(59, 130, 246, 0.1)',
        'navigator-lg': '0 20px 60px rgba(59, 130, 246, 0.15)',
        'purple': '0 10px 40px rgba(139, 92, 246, 0.1)',
        'purple-lg': '0 20px 60px rgba(139, 92, 246, 0.15)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      },
      
      // Custom Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'navigator-gradient': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #7c3aed 75%, #581c87 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.8) 25%, rgba(139, 92, 246, 0.7) 50%, rgba(124, 58, 237, 0.8) 75%, rgba(88, 28, 135, 0.9) 100%)'
      },
      
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite'
      },
      
      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(2rem)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-2rem)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-2rem)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(2rem)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      
      // Custom Typography
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }]
      },
      
      // Custom Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      
      // Custom Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px'
      },
      
      // Custom Screens
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    
    // Custom Plugin for Navigator-specific utilities
    function({ addUtilities, addComponents, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }
      }
      
      const newComponents = {
        '.btn-navigator': {
          padding: theme('spacing.4') + ' ' + theme('spacing.8'),
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.lg'),
          transition: 'all 0.3s ease',
          background: 'linear-gradient(to right, ' + theme('colors.blue.500') + ', ' + theme('colors.purple.600') + ')',
          color: theme('colors.white'),
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme('boxShadow.2xl')
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 4px ' + theme('colors.blue.300')
          }
        },
        '.section-padding': {
          paddingTop: theme('spacing.20'),
          paddingBottom: theme('spacing.20')
        },
        '.container-width': {
          maxWidth: theme('maxWidth.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6')
        }
      }
      
      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ],
  
  // Safelist for dynamic classes
  safelist: [
    'animate-pulse',
    'animate-bounce',
    'animate-float',
    'animate-twinkle',
    'scale-105',
    'scale-110',
    'rotate-3',
    'rotate-6',
    '-rotate-3',
    '-rotate-6'
  ]
}