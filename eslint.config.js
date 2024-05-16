import config from '@antfu/eslint-config'

export default config({
  unocss: true,
  rules: {
    'no-console': 0,
  },
  formatters: {
    css: true,
  },
})
