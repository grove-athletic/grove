import sharedConfig from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [sharedConfig],
theme: {
    extend: {
      colors: {
        primary: "#9a4729",
        secondary: "#337344",
        tertiary: "#daa24f",

        success: "#337344",
        warning: "#e0843e",
        error: "#b94642",
        info: "#57768c",

        clay: "#9a4729",
        moss: "#337344",
        gold: "#daa24f",
        sand: "#e8e4dd",
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        serif: ['Newsreader', 'serif']
      }
    },
  },
}