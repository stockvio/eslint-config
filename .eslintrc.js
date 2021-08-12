// eslint config used to lint this project
// this is not what is being shipped to the final package
module.exports = {
    globals: {
        module: true
    },
    ignorePatterns: ['node_modules'],
    extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                trailingComma: 'none',
                tabWidth: 4,
                singleQuote: true
            }
        ]
    }
};
