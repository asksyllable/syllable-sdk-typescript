# InsightsToolUpdateRequest

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 63955,
  insightToolInput: {
    name: "summary-tool",
    description: "This tool uses GPT4.1 to generate a summary of the call",
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