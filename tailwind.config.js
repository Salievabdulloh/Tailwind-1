/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
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