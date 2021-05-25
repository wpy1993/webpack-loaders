module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-plusplus': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'func-names': 0,
  },
};
