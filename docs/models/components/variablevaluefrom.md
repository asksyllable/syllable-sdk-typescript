# VariableValueFrom

Expression to compute initial value (mutually exclusive with value).


## Supported Types

### `components.One`

```typescript
const value: components.One = {
  expression: "<value>",
  type: "cel",
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

