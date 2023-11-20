import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({

    addCommonColors: true,
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          // ... rest of the colors
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },


    }
  )],
}
export default config
