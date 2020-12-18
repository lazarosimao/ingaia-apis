const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  verbose: true,
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  clearMocks: true,
  preset: '@shelf/jest-mongodb',
  maxConcurrency: 1,
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  collectCoverage: true,
  coverageReporters: ["text","html", "json"],
  coverageDirectory: "<rootDir>/coverage/",
    collectCoverageFrom: [
      "**/app_modules/**",
      "**/src/**",
      "!**/dist/**",
      "!**src/config/**"

  ],  
  testEnvironment: "node",
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
  testMatch: [
    "<rootDir>/tests/**/*.test.ts",
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};