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
      }
    },
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [
    daisyui
  ]
}

