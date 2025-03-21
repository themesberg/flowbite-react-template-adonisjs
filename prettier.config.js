import config from '@adonisjs/prettier-config'

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme'],
}
