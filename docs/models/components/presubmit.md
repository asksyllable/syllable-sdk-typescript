# Presubmit


## Supported Types

### `components.GetValueAction`

```typescript
const value: components.GetValueAction = {
  valueFrom: "inputs.provided_dob == patient_dob",
  if: "inputs.can_sign_consent == `true`",
};
```

### `components.IncrementAction`

```typescript
const value: components.IncrementAction = {
  if: "inputs.can_sign_consent == `true`",
  action: "inc",
  name: "<value>",
};
```

### `components.GetValueAction`

```typescript
const value: components.GetValueAction = {
  valueFrom: "inputs.provided_dob == patient_dob",
  if: "inputs.can_sign_consent == `true`",
};
```

### `components.SaveAction`

```typescript
const value: components.SaveAction = {
  if: "inputs.can_sign_consent == `true`",
  action: "save",
};
```

### `components.SetValueAction`

```typescript
const value: components.SetValueAction = {
  valueFrom: "inputs.provided_dob == patient_dob",
  if: "inputs.can_sign_consent == `true`",
  action: "set",
  name: "<value>",
};
```

