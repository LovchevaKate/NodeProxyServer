import standard from 'eslint-config-standard'
import promisePlugin from 'eslint-plugin-promise'
import securityPlugin from 'eslint-plugin-security'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import pluginN from 'eslint-plugin-n'
import globals from 'globals'

export default [
  securityPlugin.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      n: pluginN,
      promise: promisePlugin,
      security: securityPlugin,
      import: importPlugin
    },
    rules: { ...standard.rules }
  }
]
