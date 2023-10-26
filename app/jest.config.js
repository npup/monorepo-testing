export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif)$": "<rootDir>/__jest__/mocks/fileMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/__jest__/setupTests.js"],
};
