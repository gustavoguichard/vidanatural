module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@next/next/no-img-element': 0,
    'import/no-anonymous-default-export': 0,
    'react/display-name': 0,
    'react-hooks/exhaustive-deps': 0,
  },
}
