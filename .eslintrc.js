module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/typescript'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'parser': '@typescript-eslint/parser'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': [
            'warn',
            4
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ]
    }
};