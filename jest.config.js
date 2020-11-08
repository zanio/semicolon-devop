module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],

  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/tests/unit/factories/$1"
  },

  snapshotSerializers: ["jest-serializer-vue"],

  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],

  testURL: "http://localhost/",
  collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js'],

  setupFiles: ["jest-date-mock","<rootDir>/tests/unit/index.js"],
  preset: "@vue/cli-plugin-unit-jest"
};
