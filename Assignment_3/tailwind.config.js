/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./BT_3.html"],
  theme: {
    extend: {
      colors:{
        gray:{
          900:"#18191F"
        }
      },
      fontSize:{
        h2: ["48px", "64px"],
        h5: ["24px", "32px"],
        body1: ["16px", "26px"],
        lead1: ["18px", "32px"]
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}

