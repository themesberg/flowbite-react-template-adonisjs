/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@adonisjs/eslint-config/app', 'plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      callees: ['twMerge', 'createTheme'],
      classRegex: '^(class(Name)|theme)?$',
    },
  },
}
