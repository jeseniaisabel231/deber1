/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        neon: {
          "0%, 100%": {
            boxShadow:
              "0 0 2px #6b6b6b, 0 0 3px #6b6b6b, 0 0 4px #6b6b6b, 0 0 5px #6b6b6b",
          },
          "25%": {
            boxShadow:
              "0 0 2px #04f, 0 0 3px #04f, 0 0 3px #04f, 0 0 5px #04f",
          },
          "50%": {
            boxShadow:
              "0 0 2px #ffffff, 0 0 3px #ffffff, 0 0 4px #ffffff, 0 0 5px #ffffff",
          },
          
        },
      },
      animation: {
        neon: "neon 2s infinite",
      },
    },
  },
  plugins: [],
};
