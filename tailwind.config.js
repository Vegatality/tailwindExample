/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    /* 그냥 theme 밑에 쓰는 것은 기존 단위를 덮어쓰기도 하고 초기화 시킴. */
    // screens:{
    //   lg: "1000px",
    // },

    /* extend는 기존 것을 건드리지 않고 새로 커스텀 속성을 만듦. */
    extend: {
      colors: {
        mainColor: {
          100: "#FF8A3D",
          200: "#9da832"
        }
      },
    },
  },
  plugins: [],
}

