/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1a1a2e",
          50: "#f8f8fb",
          100: "#f0f0f6",
          200: "#e1e1ed",
          300: "#ccccdd",
          400: "#b3b3cc",
          500: "#9999bb",
          600: "#8080aa",
          700: "#666699",
          800: "#4d4d88",
          900: "#333377",
          950: "#1a1a2e",
        },
        accent: {
          DEFAULT: "#ff6b35",
          50: "#fff7f3",
          100: "#ffede6",
          200: "#ffdccd",
          300: "#ffbfa4",
          400: "#ff9a70",
          500: "#ff6b35",
          600: "#e55a2b",
          700: "#cc4a21",
          800: "#b33b18",
          900: "#802b11",
          950: "#4d1a09",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        mono: ["SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "source-code-pro", "Menlo", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            a: {
              color: "#ff6b35",
              textDecoration: "underline",
              textDecorationColor: "#ff6b35",
              "&:hover": {
                textDecorationColor: "#e55a2b",
              },
            },
            strong: {
              color: "hsl(var(--foreground))",
            },
            h1: {
              color: "hsl(var(--foreground))",
            },
            h2: {
              color: "hsl(var(--foreground))",
            },
            h3: {
              color: "hsl(var(--foreground))",
            },
            h4: {
              color: "hsl(var(--foreground))",
            },
            code: {
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--foreground) / 0.1)",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
              fontWeight: "500",
            },
            blockquote: {
              color: "hsl(var(--foreground) / 0.8)",
              borderLeftColor: "#ff6b35",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};