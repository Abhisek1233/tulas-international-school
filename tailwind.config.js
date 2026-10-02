/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          dark: "var(--primary-dark)",
          wine: "#7B1F38",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          light: "#90CCD0",
          soft: "#BEE2E4",
          cyan: "#05ABC4",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        cream: {
          DEFAULT: "#F8F5F0",
          card: "#FFFDF9",
        },
        brand: {
          crimson: "#B90124",
          teal: "#60BAB1",
          gold: "#C9A24D",
          cream: "#F8F5F0",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Barlow Semi Condensed"', 'sans-serif'],
        body: ['"Kumbh Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],

      },
      borderRadius: {
        '20': '20px',
        '24': '24px',
        '28': '28px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'lift': '0 20px 40px -15px rgba(185, 1, 36, 0.15)',
        'glow-teal': '0 0 25px rgba(96, 186, 177, 0.35)',
        'glow-crimson': '0 0 25px rgba(185, 1, 36, 0.35)',
      },
    },
  },
  plugins: [],
};
