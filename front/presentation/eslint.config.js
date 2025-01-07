import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,vue}'],
    ignores: ['*.d.ts', '**/coverage', '**/dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
    },
    plugins: {
      vue: eslintPluginVue,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...eslintPluginVue.configs['base'].rules,
      ...eslintPluginVue.configs['vue3-recommended'].rules,
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: 'props' },
      ],
    },
  },
];