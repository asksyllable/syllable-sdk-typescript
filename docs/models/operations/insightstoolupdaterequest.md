# InsightsToolUpdateRequest

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 183280,
  insightToolInput: {
    name: "summary-tool",
    description: "Default tool - generates a summary of the call",
    version: 1,
    toolArguments: {},
    insightToolDefinitionId: 1,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](../../models/components/insighttoolinput.md) | :heavy_check_mark:                                                         | N/A                                                                        |