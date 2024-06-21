import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './inertia/**/*.{js,ts,jsx,tsx,vue}',
    './resources/**/*.{js,ts,jsx,tsx,vue}',
    './resources/**/*.edge',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}
