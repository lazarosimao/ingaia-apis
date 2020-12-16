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
  collectCoverageFrom: [
    '@src/**',
  ],
  coverageDirectory: "coverage",
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