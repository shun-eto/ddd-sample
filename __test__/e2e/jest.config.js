const { defaults } = require("jest-config");
const path = require("path");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "d.ts"],
  rootDir: path.resolve("./"),
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(e2e-spec|e2e-test).[jt]s"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globalSetup: "./__test__/setup.js",
  globalTeardown: "./__test__/teardown.js",
  testTimeout: 10000,
  moduleNameMapper: {
    "^~src(.*)$": path.resolve("./src/$1"),
    "^~__test__(.*)$": path.resolve("./__test__/$1")
  }
};
