# GetValueActionIf

Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string (default for plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent == `true`".


## Supported Types

### `components.GetValueActionIf1`

```typescript
const value: components.GetValueActionIf1 = {
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
const value: string = "inputs.can_sign_consent == `true`";
```

