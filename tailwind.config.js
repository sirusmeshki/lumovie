/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        limit: "87.5rem",
      },
      aspectRatio: {
        "21/9": "21 / 9",
        "32/9": "32 / 9",
      },
      borderRadius: {
        sm: "0.75rem",
        md: "2.25rem",
        lg: "1.875rem",
      },
      colors: {
        primary: "#E2FCFC",
        background: "#020202",
      },
      backgroundColor: {
        blur: "rgba(2, 2, 2, 0.6);",
        linerBlur:
          "linear-gradient(98.4deg, rgba(5, 5, 5, 0.4) 0%, rgba(255, 255, 255, 0) 100%);",
      },
      keyframes: {
        lineShadow_lg: {
          "0%,100%": { boxShadow: "inset -30px 40px 120px -100px #B2DCE1" },
          "50%": { boxShadow: "inset 30px -40px 120px -100px #B2DCE1" },
        },
        lineShadow_md: {
          "0%,100%": { boxShadow: "inset -30px 40px 120px -110px #B2DCE1" },
          "50%": { boxShadow: "inset 30px -40px 120px -110px #B2DCE1" },
        },
        lineShadow_sm: {
          "0%,100%": { boxShadow: "inset -30px 40px 120px -120px #B2DCE1" },
          "50%": { boxShadow: "inset 30px -40px 120px -120px #B2DCE1" },
        },
      },
      animation: {
        lineShadow_lg: "lineShadow_lg 4s 2s ease-in-out infinite",
        lineShadow_md: "lineShadow_md 4s 1.5s ease-in-out infinite",
        lineShadow_sm: "lineShadow_sm 4s 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
