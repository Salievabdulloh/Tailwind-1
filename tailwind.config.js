export default {
  content: ["./src/**/*.{html,js}", "./*.html"], // ✅ Detects all HTML files
  theme: {
    extend: {},
    screens: {
      'tel': '390px',
      'tab': '768px',
      'lap': '1024px'
    }
  },
  plugins: [],
}
