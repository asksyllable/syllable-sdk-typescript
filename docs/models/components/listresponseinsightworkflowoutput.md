# ListResponseInsightWorkflowOutput

## Example Usage

```typescript
import { ListResponseInsightWorkflowOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightWorkflowOutput = {
  items: [
    {
      name: "<value>",
      description: "duh redact indeed beside motivate zowie tag even",
      insightToolIds: [
        796392,
      ],
      conditions: {},
      status: "<value>",
      id: 959167,
      insightTools: [
        {
          name: "<value>",
          description: "untrue disk finally helplessly hence why",
          version: 990345,
          toolArguments: {},
          insightToolDefinitionId: 409054,
          id: 162954,
          lastUpdatedBy: "<value>",
        },
      ],
      lastUpdatedBy: "<value>",
    },
  ],
  page: 638762,
  pageSize: 490305,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |