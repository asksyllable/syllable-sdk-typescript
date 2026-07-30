# From

Expression evaluated against the parsed tool response body (the JSON the external tool returned). Supported forms: (1) JMESPath string (default for plain strings) — a bare field name for raw passthrough, or a boolean/computed expression for derived values, (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object {"type":"cel","expression":"..."}.


## Supported Types

### `components.From1`

```typescript
const value: components.From1 = {
  expression: "inputs.can_sign_consent == `true`",
  type: "jp",
};
```

### `components.CaseExpression`

```typescript
const value: components.CaseExpression = {
  case: [
    {
      valueFrom: "inputs.provided_dob == patient_dob",
      if: "inputs.can_sign_consent == `true`",
    },
  ],
};
```

### `string`

```typescript
const value: string = "is_valid";
```

