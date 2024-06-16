module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/src/test.ts",
  ],
  moduleNameMapper: {
    "@modules/(.*)": "<rootDir>/src/app/modules/$1",
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
    "@enviroments/(.*)": "<rootDir>/src/environments/$1",
    "@core": "<rootDir>/src/app/core",
  },
  collectCoverage: true,
  coverageReporters: ["html", "lcov"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/app/**/*.module.ts",
    "!src/app/**/index.ts",
    "!src/app/**/*.interface.ts",
    "!src/app/**/*.model.ts",
    "!src/app/**/*.enum",
    "!src/app/**/*.mock.ts",
    "!src/app/**/*.routes.ts",
  ],

};
