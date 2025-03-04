# ListResponseInsightWorkflowOutput

## Example Usage

```typescript
import { ListResponseInsightWorkflowOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightWorkflowOutput = {
  items: [
    {
      name: "<value>",
      description: "abaft knottily ethyl covenant jaggedly",
      insightToolIds: [
        587600,
      ],
      conditions: {},
      status: "<value>",
      id: 272822,
      insightTools: [
        {
          name: "<value>",
          description: "beside motivate zowie tag even",
          version: 796392,
          toolArguments: {},
          insightToolDefinitionId: 959167,
          id: 458139,
          lastUpdatedBy: "<value>",
        },
      ],
      lastUpdatedBy: "<value>",
    },
  ],
  page: 590984,
  pageSize: 857723,
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