# CallResult

Deterministic result-capture configuration for a call action's tool response.

## Example Usage

```typescript
import { CallResult } from "syllable-sdk/models/components";

let value: CallResult = {
  save: [
    {
      from: "is_valid",
      to: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `save`                                                                                 | [components.CallResultSaveMapping](../../models/components/callresultsavemapping.md)[] | :heavy_minus_sign:                                                                     | Field mappings extracted from the tool response into workflow state.                   |