// @ts-check
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import betterTailwind from 'eslint-plugin-better-tailwindcss';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'playwright-report/**', 'next-env.d.ts']),

  js.configs.recommended,
  ...nextVitals,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Top-level `import type` is fully erased under verbatimModuleSyntax.
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      // Import ordering is handled by Prettier (`import/order` crashes on ESLint 10).
      'import/no-duplicates': 'error',
    },
  },

  {
    files: ['src/**/*.{ts,tsx}'],
    // Correctness only: class ordering is Prettier's job.
    extends: [betterTailwind.configs['correctness-error']],
    settings: {
      'better-tailwindcss': { entryPoint: 'src/app/globals.css' },
    },
  },

  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  prettier,
]);
