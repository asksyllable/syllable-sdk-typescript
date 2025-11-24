# NextStep

Represents a conditional transition to the next step.

## Example Usage

```typescript
import { NextStep } from "syllable-sdk/models/components";

let value: NextStep = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `if`                                                                                                                              | *components.NextStepIf*                                                                                                           | :heavy_minus_sign:                                                                                                                | An expression that must evaluate to true for the action to be applied.                                                            |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The identifier of the next step.                                                                                                  |
| `requires`                                                                                                                        | *string*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                | List of input field names required for this transition. Validates that specified inputs are collected before allowing transition. |