import config from '@adonisjs/prettier-config' assert { type: 'json' }

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: ['prettier-plugin-tailwindcss'],
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme'],
}
