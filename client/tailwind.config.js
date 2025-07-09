/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        custom: {
          "base-100": "#C0C9EE", // light blue-purple background
          "primary": "#8CCDEB", // blue
          "secondary": "#1F2343", // deep blue for text and highlights
          "accent": "#C0C9EE", // purple/blue accent
          "info": "#8CCDEB", // blue info
          "success": "#1F7D53", // green (for success, not main theme)
          "warning": "#FFB26F", // orange (for warning, not main theme)
          "error": "#E53888", // pink (for error, not main theme)
        },
      },
    ],
  },
}