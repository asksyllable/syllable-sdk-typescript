# Step

## Example Usage

```typescript
import { Step } from "syllable-sdk/models/components";

let value: Step = {
  id: "<id>",
  goal: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The unique identifier of the step.                                         |
| `goal`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The goal of the step.                                                      |
| `instructions`                                                             | *components.Instructions*[]                                                | :heavy_minus_sign:                                                         | The instructions for the step.                                             |
| `tools`                                                                    | [components.StepTools](../../models/components/steptools.md)               | :heavy_minus_sign:                                                         | Configuration for tools available in a step.                               |
| `inputs`                                                                   | [components.InputParameter](../../models/components/inputparameter.md)[]   | :heavy_minus_sign:                                                         | The inputs for the step.                                                   |
| `on`                                                                       | [components.StepEventActions](../../models/components/stepeventactions.md) | :heavy_minus_sign:                                                         | Actions to perform when events occur (enter, submit).                      |
| `next`                                                                     | *components.Next*[]                                                        | :heavy_minus_sign:                                                         | The next steps to execute.                                                 |