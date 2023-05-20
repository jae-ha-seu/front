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
        'import',
        '@typescript-eslint',
        'react'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
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
        'react/react-in-jsx-scope': 'off'
    },
    ignorePatterns: [
        '**/test/*',
        'dist'
    ]
};
