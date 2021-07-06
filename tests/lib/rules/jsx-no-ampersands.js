/**
 * @see: https://github.com/yannickcr/eslint-plugin-react/blob/ee232bbaef4fb04740413d5048877559abf06222/tests/lib/rules/jsx-embed-condition.js
 */

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/jsx-no-ampersands');

const parserOptions = {
  ecmaVersion: 2021,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('jsx-embed-condition', rule, {
  valid: [].concat({
    code: '<App>Test</App>'
  }, {
    code: '<App test>Another</App>'
  }, {
    code: '<App foo={e => bar(e)}>Hello World</App>'
  }, {
    code: '<App>{x ? <div></div> : null}</App>'
  }, {
    code: '<App>{x ? <div>Hello</div> : null}</App>'
  }, {
    code: '<App>{x ? <div>{y ? <y /> : <z />}</div> : null}</App>'
  }, {
    code: '<App x={x && y}>{x ? <div>{y ? <y /> : <z />}</div> : null}</App>'
  }),

  invalid: [{
    code: '<div>{x && <div />}</div>',
    output: '<div>{x && <div />}</div>',
    errors: [
      {message: 'Using && to condition JSX embeds is forbidden. Convert it to a ternary operation instead'}
    ]
  }, {
    code: '<div>{x ? <div>{y && <div />}</div> : null}</div>',
    output: '<div>{x ? <div>{y && <div />}</div> : null}</div>',
    errors: [
      {message: 'Using && to condition JSX embeds is forbidden. Convert it to a ternary operation instead'}
    ]
  }]
});
