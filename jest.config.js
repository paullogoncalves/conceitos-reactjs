module.exports = {
  verbose: true,
  collectCoverageFrom: [ 'src/**/*test.js' ],
  coverageReporters: ['text-summary', 'html'],
  testPathIgnorePatterns: ['/node_modules/'],
};