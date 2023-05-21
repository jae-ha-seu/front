module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2022: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import',
        'simple-import-sort'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'prettier'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        'array-bracket-newline': [
            'error',
            { multiline: true, minItems: 2 }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'array-bracket-spacing': [
            'error',
            'always',
            { objectsInArrays: false, arraysInArrays: false }
        ],
        semi: [
            'error',
            'always'
        ],
        quotes: [
            'error',
            'single'
        ],
        'no-multiple-empty-lines': 'error',
        'array-element-newline': [
            'error',
            { multiline : true, minItems: 2 }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        'react/react-in-jsx-scope': 'off',
        // simple-import-sort
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // Side effect imports.
                    [ '^\\u0000' ],
                    [
                        '^react',
                        '^@?\\w'
                    ],
                    [ '@/router' ],
                    [
                        '@/layout',
                        '@/pages',
                        '@/components'
                    ],
                    [
                        '@/store',
                        '@/services',
                        '@/hooks'
                    ],
                    [ '@/utils' ],
                    [
                        '@/assets',
                        '@/constants',
                        '@/types'
                    ],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
    ignorePatterns: [
        '**/test/*',
        'dist'
    ]
};
