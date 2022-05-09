module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        'koulen': ['"Koulen"', "cursive"],
        'coding': ['"Nanum Gothic Coding"', "monospace"],
      },
      colors: {
        'dark-blue': '#355C7D',
        'dark-purple': '#6C587B',
        'purple': '#C16B86',
        'pink': '#F27280',
        'orange': '#F9AE93',
        'nav': {
          0: '#F9B294',
          50: '#F9B294',
          100: '#E3A891',
          200:'#CD9F8F',
          300:'#B8958C',
          400:'#A28C8A',
          500:'#8C8287',
          600:'#767985',
          700:'#616F82',
          800:'#4B6680',
          900:'#355C7D',
          1000:'#355C7D',
        }
      },
    },
  },
  plugins: [],
}
