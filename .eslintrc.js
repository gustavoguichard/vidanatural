module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': [0, 'as-needed'],
    camelcase: 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'no-unused-expressions': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/jsx-closing-bracket-location': ['warn'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'react/react-in-jsx-scope': 0,
    semi: ['error', 'never'],
    'sort-keys': 0,

    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
}
