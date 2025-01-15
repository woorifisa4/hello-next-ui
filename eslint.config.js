import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      tailwindcss: {
        // TailwindCSS 설정 예시
        classRegex: [
          'tw`([^`]*)', // tailwind.macro
          'tw\\(([^)]*)', // tailwind.macro
          'clsx\\(([^)]*)', // clsx 사용
          'className="([^"]*)', // JSX className
        ],
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss, // TailwindCSS 추가
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'warn', // Prettier 규칙 적용
      'tailwindcss/classnames-order': 'warn', // TailwindCSS 클래스 순서 정렬
      'tailwindcss/no-custom-classname': 'off', // 사용자 정의 클래스 허용
    },
  },
];
