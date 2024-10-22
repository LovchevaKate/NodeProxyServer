import standard from 'eslint-config-standard'
import promisePlugin from 'eslint-plugin-promise'
import securityPlugin from 'eslint-plugin-security'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import pluginN from 'eslint-plugin-n'
import globals from 'globals'

export default [
  securityPlugin.configs.recommended, // Include Security plugin's recommended rules
  prettierConfig, // Prettier configuration (to prevent formatting conflicts)
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
      promise: promisePlugin, // Promises plugin
      security: securityPlugin, // Security plugin
      import: importPlugin // Import/export management
    },
    rules: { ...standard.rules }
  }
]
