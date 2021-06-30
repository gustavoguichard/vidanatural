module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}$',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', './test'],
  moduleDirectories: ['node_modules', './'],
  transform: {
    '^.+\\.jsx?$': './node_modules/babel-jest',
    '^.+\\.css$': './config/jest/cssTransform.js',
    '^.+\\.tsx?$': './node_modules/ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
}
