# VariableValuefrom

Expression that computes the value. Supported expression forms: (1) JMESPath string (default for plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object {"type":"cel","expression":"..."}. Mutually exclusive with value.


## Supported Types

### `components.One`

```typescript
const value: components.One = {
  expression: "inputs.can_sign_consent == true",
  type: "cel",
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
const value: string = "inputs.provided_dob == patient_dob";
```

