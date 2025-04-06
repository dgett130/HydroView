import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default defineConfig([
    {
        ignores: [
            'tailwind.config.js',
            'scripts/generate-changelog.mjs',
        ]
    },
    js.configs.recommended, // regole JS base
    tseslint.configs.recommended, // supporto TypeScript
    {
        settings: {
            react: {
                version: 'detect',
            },
        }
    },
    pluginReact.configs.flat.recommended, // regole React consigliate

    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
        },
    },
]);