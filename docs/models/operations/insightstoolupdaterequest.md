# InsightsToolUpdateRequest

## Example Usage

```typescript
import { InsightsToolUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsToolUpdateRequest = {
  toolId: 382764,
  insightToolInput: {
    name: "<value>",
    description: "if while unless",
    version: 883078,
    toolArguments: {},
    insightToolDefinitionId: 966576,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `toolId`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `insightToolInput`                                                         | [components.InsightToolInput](../../models/components/insighttoolinput.md) | :heavy_check_mark:                                                         | N/A                                                                        |