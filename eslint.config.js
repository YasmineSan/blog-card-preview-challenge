import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules', '.nuxt', 'dist'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue,
      prettier,
    },
    processor: vue.processors['.vue'],
    rules: {
      ...vue.configs['vue3-recommended'].rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },
]
