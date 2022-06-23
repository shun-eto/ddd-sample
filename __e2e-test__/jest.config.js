const path = require("path");

module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "../",
  roots: ["<rootDir>/src/", "<rootDir>/__e2e-test__/"],
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(e2e-spec|e2e-test).[jt]s"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globalSetup: "./__e2e-test__/setup.js",
  globalTeardown: "./__e2e-test__/teardown.js",
  testTimeout: 10000,
  moduleNameMapper: {
    "^~src(.*)$": path.resolve("./src/$1")
  }
};
