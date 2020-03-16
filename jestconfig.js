module.exports = {
    setupFiles: ['<rootDir>/__tests__/setup.js'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testPathIgnorePatterns: ['/node_modules/'],
    testRegex: '.*\\.test\\.js$',
    collectCoverage: false,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$':
            'identity-obj-proxy',
        '^@pages(.*)$': '<rootDir>/src/pages$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};
