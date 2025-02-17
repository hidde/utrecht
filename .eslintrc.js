/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      extends: ['plugin:json/recommended'],
      files: ['*.json'],
    },
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
        './.eslintrc.react.json',
        'plugin:mdx/overrides',
      ],
      files: ['*.mdx'],
      plugins: ['import'],
      settings: {
        'mdx/code-blocks': true,
      },
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['*.js', '*.jsx'],
      plugins: ['import', 'jest'],
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import', 'jest'],
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['**/stencil.tsx', '**/*.stencil.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['packages/web-component-library-stencil/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'import'],
    },
    {
      excludedFiles: ['**/stencil.tsx', '**/*.stencil.tsx'],
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          'packages/component-library-angular/tsconfig.json',
          'packages/component-library-angular/tsconfig.spec.json',
          'packages/component-library-formio/tsconfig.json',
          'packages/component-library-react/tsconfig.json',
          'packages/component-library-react/tsconfig.test.json',
          'packages/component-library-vue/tsconfig.jest.json',
          'packages/component-library-vue/tsconfig.json',
          'packages/component-library-vue/tsconfig.lib.json',
          'packages/component-library-vue/tsconfig.vite-config.json',
          'packages/storybook/tsconfig.json',
          'packages/storybook-angular/tsconfig.json',
          'packages/storybook-css/tsconfig.json',
          'packages/storybook-helpers/tsconfig.json',
          'packages/storybook-html/tsconfig.json',
          'packages/storybook-react/tsconfig.json',
          'packages/storybook-react/tsconfig.node.json',
          'packages/storybook-vue/tsconfig.json',
          'packages/storybook-vue/tsconfig.node.json',
          'packages/storybook-web-component/tsconfig.json',
          'packages/web-component-library-angular/tsconfig.json',
          'packages/web-component-library-react/tsconfig.json',
          'packages/web-component-library-stencil/tsconfig.json',
          'packages/web-component-library-stencil/tsconfig.jest.json',
          'packages/web-component-library-vue/tsconfig.json',
          'packages/web-component-library-vue/tsconfig.app.json',
          'packages/web-component-library-vue/tsconfig.vite-config.json',
        ],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'import'],
    },
    {
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
      ],
      files: ['*.vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
        project: ['packages/component-library-vue/tsconfig.lib.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'vue/require-explicit-emits': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
      },
    },
  ],
};
