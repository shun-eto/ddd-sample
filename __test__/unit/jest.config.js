const { defaults } = require("jest-config");
const path = require("path");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "d.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  rootDir: path.resolve("./"),
  transformIgnorePatterns: [path.resolve("./node_modules")],
  globalSetup: path.resolve("./__test__/setup.js"),
  globalTeardown: path.resolve("./__test__/teardown.js"),
  moduleNameMapper: {
    "^~src(.*)$": path.resolve("./src/$1"),
    "^~__test__(.*)$": path.resolve("./__test__/$1")
  }
};
