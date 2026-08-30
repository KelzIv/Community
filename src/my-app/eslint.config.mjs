import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Your custom ESLint rules can go here
  {
    rules: {
      // Example:
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Override default ignores
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // MUST be last
  eslintConfigPrettier,
]);