// jest.config.js
const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  // 别名设置
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // 测试文件
  testMatch: ["<rootDir>/tests/unit/*.spec.ts?(x)"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  reporters: [
    "default",
    [
      "<rootDir>/node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "<rootDir>/tests/test-report.html",
      },
    ],
  ],
};
