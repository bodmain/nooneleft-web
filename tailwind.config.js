module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#e85c34",
        accent: "#f8b400",
        light: "#fdfaf6",
      },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
  extend: {
  colors: {
    brand: "#e85c34", // cam thương hiệu
    lightbg: "#fffaf6", // nền be sáng
    darkbg: "#1f1f1f", // nền tối dịu
    carddark: "#2b2b2b", // card tối
  }
}

};
