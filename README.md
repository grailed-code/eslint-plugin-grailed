# eslint-plugin-grailed
Custom lint rules for grailed

## Rules
| Rule              | Description                                         | Recommended | Fixable |
| ----------------- | ----------------------------------------------------| ----------- | ------- |
| jsx-no-ampersands | Enforces ternary returns for jsx ampersands returns | ----------- | ------- |

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