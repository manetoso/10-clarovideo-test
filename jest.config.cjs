module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "<rootDir>/CSSStub.js"
  }
};
