// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      // Устанавливаем module глобально для корректного парсинга импортов
      sourceType: 'module',
      parserOptions: {
        // Проектный сервис автоматически найдет tsconfig.json
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // Позволяет ESLint корректно понимать декораторы class-validator
        ecmaFeatures: {
          experimentalDecorators: true,
        },
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);
