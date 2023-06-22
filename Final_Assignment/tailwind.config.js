/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        gray:{
          900:"#18191F",
          200:"#EEEFF4",
          100:"#F4F5F7",
          300:"#D9DBE1",
        },
        purple:{
          brand:"#8C30F5",
          800:"#D6B1FF",
        },
        Turquoise:{
          100:"#D5FAFC",
        },
        Black:{
          default:"#0B0D17",
        },
      },
      fontSize:{
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        h3: ["40px", "54px"],
        h5: ["24px", "32px"],
        body1: ["16px", "26px"],
        body2: ["14px", "24px"],
        lead1: ["18px", "32px"],
        title: ["48px", "64px"],
        subtitle1: ["18px", "28px"],
        subtitle2: ["14px", "24px"],
        medium_label: ["14px", "20px"],
        large_label: ["16px", "24px"],
      },
      fontFamily: {
        inter: "Inter",
      },
      dropShadow: {
        '2xl': '0 20px 10px rgba(0, 0, 0, 0.4)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

