# ValueFrom

Expression to compute initial value (mutually exclusive with value).


## Supported Types

### `components.ValueFrom1`

```typescript
const value: components.ValueFrom1 = {
  expression: "<value>",
  type: "jmespath",
};
```

### `components.CaseExpression`

```typescript
const value: components.CaseExpression = {
  case: [
    {},
  ],
};
```

### `string`

```typescript
const value: string = "<value>";
```

