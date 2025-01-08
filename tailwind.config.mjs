/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        ltor: {
          '0%, 100%': { transform: 'translateX(30px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        ttob: {
          '0%, 100%': { transform: 'translateY(30px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        
      },
      animation: {
        ttob: 'ttob 1s ease-in-out infinite',
        ltor: 'ltor 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
