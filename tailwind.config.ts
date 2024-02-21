import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary_blue": "#45ae6c",
        "primary_brown": "#ad3637",
        "extra-light-blue": "#7077A1",
        "orange": "#F6B17A",
      },
      screens: {
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "550px": "550px",
        "600px": "600px",
        "650px": "650px",
        "700px": "700px",
        "750px": "750px",
        "800px": "800px",
        "850px": "850px",
        "900px": "900px",
        "950px": "950px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1240px": "1240px",
        "1300px": "1300px",
        "1400px": "1400px",
      }
    },
  },
  plugins: [],
};
export default config;
