# StepEventActions

Actions to perform when events occur (enter, submit).

## Example Usage

```typescript
import { StepEventActions } from "syllable-sdk/models/components";

let value: StepEventActions = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `start`                                                             | *components.StepEventActionsStart*[]                                | :heavy_minus_sign:                                                  | Actions to execute on the first input from the user.                |
| `enter`                                                             | *components.Enter*[]                                                | :heavy_minus_sign:                                                  | Actions to execute when entering a step (before collecting inputs). |
| `submit`                                                            | *components.StepEventActionsSubmit*[]                               | :heavy_minus_sign:                                                  | Actions to execute when the tool/step is submitted by the LLM.      |