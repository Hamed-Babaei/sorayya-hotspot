import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          light : '#000000',
          dark : '#ffffff',
        },
        bg: {
          light : "#000000",
          dark : "#EAEAEA",
        },
        primary: '#1e293b', // رنگ اصلی برای حالت روشن
        secondary: '#64748b', // رنگ دوم برای حالت روشن
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Peyda: ['Peyda'],
      }, //end of fontFamily
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
    backgroundImage : {
      'bg-light' : 'url(/backgrounds/bg-desktop.light.jpg)',
      'bg-dark' :  'url(/backgrounds/bg-desktop-dark.webp)'
    }
  },
  plugins: [],
};
export default config;
