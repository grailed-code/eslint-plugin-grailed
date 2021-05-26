/**
 * @fileoverview Prevents usage of && condition in JSX Embeds.
 * @author Anees Iqbal <i@steelbrain.me>
 * @see: https://github.com/yannickcr/eslint-plugin-react/blob/ee232bbaef4fb04740413d5048877559abf06222/lib/rules/jsx-embed-condition.js
 * @see: https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx
 */
 'use strict';
 
 module.exports = {
    // NOTE [@niculistana]: this is a slimmed down version of the export which does not include docs

   create(context) {
     return {
       JSXExpressionContainer(node) {
         if (
           node.parent == null
           || node.parent.type !== 'JSXElement'
           || node.expression == null
           || node.expression.type !== 'LogicalExpression'
           || node.expression.operator === '??'
         ) {
           return;
         }
         context.report({
           node,
           message: 'Using && to condition JSX embeds is forbidden. Convert it to a ternary operation instead'
         });
       }
     };
   }
 };