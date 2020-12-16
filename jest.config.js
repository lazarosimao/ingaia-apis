const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  verbose: true,
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  maxConcurrency: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    '@src/**',
  ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
};