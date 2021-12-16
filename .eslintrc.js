module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    BabelOptions: {
      configFile: './babel.config.json',
    } 
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  rules: {
    'semi': 'Off',
    'comma-dangle': 'Off'
  }
}