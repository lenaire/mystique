/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/**/*.{tsx,ts}"],
  coverageReporters: ["lcov", "json", "text", "json-summary"],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 60,
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".stories.tsx",
    "index.ts",
  ],
  globals: {
    "ts-jest": {
      compiler: "ttypescript",
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts",
  },
};
