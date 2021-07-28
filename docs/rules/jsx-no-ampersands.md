## Disallow && condition inside JSX Embed. (react/jsx-embed-condition)
This rule disallows use of && inside JSX Embeds to avoid conditional numbers from being rendered.

## Why?
Here is an [article](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx) explaining the problems that can happen when you use && to conditionally render content in JSX.

## Rule Details
Examples of incorrect code for this rule:

```
<div>
  {x && <MyProfile />}
</div>

<div>
  {x || y && <strong>Hello</strong>}
</div>
```

Examples of correct code for this rule:
```
<div>
  {x ? <MyProfile /> : null}
</div>

<div>
  {x || y ? <strong>Hello</strong> : null}
</div>
```
