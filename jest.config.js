import serverConfig from './server.config.js';

const { hostname, port } = serverConfig.test;
const TEST_HOST = `http://${hostname}:${port}`;
const sharedConfig = {
  errorOnDeprecated: true,
  globalSetup: './test/config/jest.setup.js',
  globalTeardown: './test/config/jest.teardown.js',
  resetModules: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/test/config/jest.setup-tests.js'],
  testEnvironment: 'jsdom',
  testURL: `${TEST_HOST}/_blank.html`,
};

process.env.TEST_HOST = TEST_HOST;

export default {
  transform: {},
  projects: [
    // Unit Tests
    {
      displayName: 'unit',
      ...sharedConfig,
      testMatch: ['<rootDir>/test/unit/*.test.js'],
    },
    // Integration Tests
    {
      displayName: 'integration',
      ...sharedConfig,
      testMatch: ['<rootDir>/test/integration/*.test.js'],
    },
  ],
};
