# StepsTask

## Example Usage

```typescript
import { StepsTask } from "syllable-sdk/models/components";

let value: StepsTask = {
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

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A unique identifier for the task.                                                                                                |
| `config`                                                                                                                         | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `variables`                                                                                                                      | [components.Variable](../../models/components/variable.md)[]                                                                     | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `metadata`                                                                                                                       | [components.ContextTaskMetadata](../../models/components/contexttaskmetadata.md)                                                 | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `tool`                                                                                                                           | [components.ContextToolInfo](../../models/components/contexttoolinfo.md)                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | *"steps"*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `version`                                                                                                                        | *"v1alpha"*                                                                                                                      | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `start`                                                                                                                          | [components.StepsTaskStart](../../models/components/stepstaskstart.md)                                                           | :heavy_minus_sign:                                                                                                               | Controls when the workflow activation lifecycle runs. `auto` activates at session start; `manual` activates on first invocation. |
| `steps`                                                                                                                          | [components.Step](../../models/components/step.md)[]                                                                             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |