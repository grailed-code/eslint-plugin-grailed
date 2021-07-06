# eslint-plugin-grailed
Custom lint rules for grailed

## Rules
| Rule              | Description                                         | Recommended | Fixable |
| ----------------- | ----------------------------------------------------| ----------- | ------- |
| [jsx-no-ampersands](https://github.com/grailed-code/eslint-plugin-grailed/blob/main/docs/rules/jsx-no-ampersands.md) | Enforces ternary returns for jsx ampersands returns |             |         |

## How To Test Locally
1. Installation
```
npm install --save -D ~/path/to/parent/eslint-plugin-grailed
```

or add the following to your `package.json` and run `npm install`

```json
"devDependencies": {
    "eslint-plugin-grailed": "file:~/path/to/parent/eslint-plugin-grailed"
}
```

2. Modify `.eslintrc` in your project directory to include one of our rules
```json
{
  "plugins": [
    "grailed"
  ],
  "rules": {
    "grailed/jsx-no-ampersands": "warn"
  }
}
```

## Unit Testing Lint rules
All tests live in `tests/lib/rules`. Run this command to test all lint rules:
``` npm test ```
