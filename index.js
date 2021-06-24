/**
 * Minimal configuration based on `eslint-plugin-react`
 * @see: https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js
 */

const allRules = {
  'jsx-no-ampersands': require('./lib/rules/jsx-no-ampersands'),
}

module.exports = {
  rules: allRules,
}
