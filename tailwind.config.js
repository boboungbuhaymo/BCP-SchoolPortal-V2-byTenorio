module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00ffff', // Neon cyan (matches style.css)
        'secondary': '#ff00ff', // Neon magenta (matches style.css)
        'background': '#000000', // Black
        'terminal': 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
      },
      boxShadow: {
        'neon': '0 0 10px #00ffff, 0 0 20px #00ffff',
        'neon-sm': '0 0 5px #00ffff',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 1.5s infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: 1,
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
          },
          '20%, 24%, 55%': {
            opacity: 0.8,
            textShadow: 'none'
          }
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-neon': {
          textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  darkMode: 'class' // Enable class-based dark mode as expected by index.html
}
