import { theme } from 'flowbite-react'
import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "serif"],
      },
      animation: {
        gradient: 'gradient 10s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            'background-position': '0% 50%',
            'background-size': '400% 400%'
          },
          '33%': {
            'background-position': '100% 50%',
            'background-size': '300% 300%'
          },
          '66%': {
            'background-position': '50% 100%',
            'background-size': '200% 200%'
          },
          '100%': {
            'background-position': '0% 50%',
            'background-size': '400% 400%'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#570DF8",          // primary button color
          "secondary": "#F000B8",        // secondary button color
          "accent": "#37CDBE",           // accent color
          "neutral": "#3D4451",          // neutral color -> on click
          "base-100": "#FFFFFF",         // page background
          "info": "#3ABFF8",             // info color
          "success": "#36D399",          // success color
          "warning": "#FBBD23",          // warning color
          "error": "#F87272",            // error color
          "base-content": "black",
        },
        dark: {
          "primary": "#793EF9",
          "secondary": "#F471B5",
          "accent": "#1FB2A5",
          "neutral": "#191D24",
          "base-100": "#302f2b",         // dark mode background
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "base-content": "#ffffcc",
        },
      }
    ]
  },
  plugins: [
    daisyui
  ]
}





