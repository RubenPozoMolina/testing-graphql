module.exports = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'node',
  collectCoverage: true,
  testMatch: [
    '**/test/**/*.test.+(ts|tsx)'
  ],
};