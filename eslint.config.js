import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/exhaustive-deps': 'error',  // 🔥 Catches missing useEffect deps!
      'no-console': 'off',
      'no-debugger': 'warn',
      'eqeqeq': ['error', 'always'],  // 🔥 Forces === instead of ==
      'no-var': 'error',  // 🔥 Forces let/const instead of var
      'prefer-const': 'error',  // 🔥 Forces const when variable never reassigned
      'array-callback-return': 'error',  // 🔥 Catches missing return in filter/map!
    },
  },
])
