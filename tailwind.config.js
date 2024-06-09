/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

