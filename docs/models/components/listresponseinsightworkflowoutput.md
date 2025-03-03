# ListResponseInsightWorkflowOutput

## Example Usage

```typescript
import { ListResponseInsightWorkflowOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightWorkflowOutput = {
  items: [
    {
      name: "<value>",
      description: "sarong in-joke oof behind gah",
      insightToolIds: [
        882042,
      ],
      conditions: {},
      status: "<value>",
      id: 458604,
      insightTools: [
        {
          name: "<value>",
          description: "ownership toward curly about travel gee fondly handful",
          version: 162954,
          toolArguments: {},
          insightToolDefinitionId: 638762,
          id: 490305,
          lastUpdatedBy: "<value>",
        },
      ],
      lastUpdatedBy: "<value>",
    },
  ],
  page: 989410,
  pageSize: 65304,
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