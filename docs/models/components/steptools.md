# StepTools

Configuration for tools available in a step.

## Example Usage

```typescript
import { StepTools } from "syllable-sdk/models/components";

let value: StepTools = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `call`                                                                          | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether to force immediate tool call without user interaction.                  |
| `allow`                                                                         | *string*[]                                                                      | :heavy_minus_sign:                                                              | List of allowed tool names for this step.                                       |
| `allowGoToStep`                                                                 | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether to expose the go_to_step escape hatch to the LLM. Defaults to disabled. |