const path = require('path')

module.exports = {
  verbose: true,
  testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'],
  preset: 'jest-playwright-preset',
  collectCoverageFrom: ['test/*.{js,jsx,ts,tsx}$'],
  moduleDirectories: ['node_modules', './'],
  transform: {
    '^.+\\.jsx?$': path.join(__dirname, 'node_modules', 'babel-jest'),
    '^.+\\.tsx?$': path.join(__dirname, 'node_modules', 'ts-jest'),
  },
  transformIgnorePatterns: ['/node_modules/'],
}
