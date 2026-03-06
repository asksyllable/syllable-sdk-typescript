# Enter


## Supported Types

### `components.CallAction`

```typescript
const value: components.CallAction = {
  if: "inputs.can_sign_consent == `true`",
  action: "call",
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

### `components.SayAction`

```typescript
const value: components.SayAction = {
  if: "inputs.can_sign_consent == `true`",
  text: "<value>",
  action: "say",
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

