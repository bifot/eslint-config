module.exports = {
  extends: 'airbnb-base',
  rules: {
    'newline-after-var': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': ['error', {
      allow: ['error'],
    }],
    'no-restricted-globals': 'off',
  },
  globals: {
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    it: true,
    describe: true,
  },
}
