# Task1


## Supported Types

### `components.EventTask`

```typescript
const value: components.EventTask = {
  variables: null,
  type: "event",
  on: {
    start: [
      {
        action: "set",
        name: "<value>",
      },
    ],
  },
};
```

### `components.ExpressionTask`

```typescript
const value: components.ExpressionTask = {
  variables: [
    {
      valueFrom: "inputs.provided_dob == patient_dob",
      name: "<value>",
    },
  ],
  type: "expression",
  expression: "inputs.can_sign_consent == `true`",
  on: {
    start: [
      {
        action: "set",
        name: "<value>",
      },
    ],
    submit: [
      {
        action: "inc",
        name: "<value>",
        by: 1,
      },
    ],
  },
};
```

### `components.LoadToolFromFileTask`

```typescript
const value: components.LoadToolFromFileTask = {
  variables: [
    {
      valueFrom: "inputs.provided_dob == patient_dob",
      name: "<value>",
    },
  ],
  type: "import",
  file: "<value>",
};
```

### `components.StepsTask`

```typescript
const value: components.StepsTask = {
  variables: [
    {
      valueFrom: "inputs.provided_dob == patient_dob",
      name: "<value>",
    },
  ],
  type: "steps",
  steps: [
    {
      id: "<id>",
      goal: "<value>",
      instructions: [
        "<value>",
      ],
      on: {
        start: [
          {
            text: "<value>",
            action: "say",
            role: "assistant",
          },
        ],
        enter: [
          {
            action: "inc",
            name: "<value>",
            by: 1,
          },
        ],
        presubmit: [
          {
            action: "load",
            overwrite: false,
          },
        ],
        submit: [
          {
            action: "set",
            name: "<value>",
          },
        ],
      },
      next: [
        "<value>",
      ],
    },
  ],
};
```

