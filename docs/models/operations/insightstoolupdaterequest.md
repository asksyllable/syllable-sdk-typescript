# InsightsToolUpdateRequest

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 16429,
  insightToolInput: {
    name: "summary-tool",
    description: "Default tool - generates a summary of the call",
    version: 1,
    toolArguments: {
      "prompt":
        "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
    },
    insightToolDefinitionId: 1,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](../../models/components/insighttoolinput.md) | :heavy_check_mark:                                                         | N/A                                                                        |