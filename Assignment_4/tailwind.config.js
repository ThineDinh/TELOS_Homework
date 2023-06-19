/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        gray:{
          900:"#18191F"
        },
        purple:{
          brand:"#8C30F5"
        },
      },
      fontSize:{
        h2: ["48px", "64px"],
        h3: ["40px", "54px"],
        h5: ["24px", "32px"],
        body1: ["16px", "26px"],
        body2: ["14px", "24px"],
        lead1: ["18px", "32px"],
        subtitle1: ["18px", "28px"],
        subtitle2: ["14px", "24px"],
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}

