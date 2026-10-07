// @ts-check

/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  printWidth: 100,

  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[./]'],
  importOrderTypeScriptVersion: '6.0.0',

  tailwindStylesheet: './src/app/globals.css',
  tailwindFunctions: ['cn', 'cva'],

  // prettier-plugin-tailwindcss must be listed last.
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
