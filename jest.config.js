"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "coverage",
    setupFilesAfterEnv: ["<rootDir>/src/utils/jest.ts"],
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map