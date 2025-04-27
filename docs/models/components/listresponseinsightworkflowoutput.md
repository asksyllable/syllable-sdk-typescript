# ListResponseInsightWorkflowOutput

## Example Usage

```typescript
import { ListResponseInsightWorkflowOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightWorkflowOutput = {
  items: [
    {
      name: "summary-workflow",
      source: "upload",
      description: "Default workflow - generates a summary of the call",
      insightToolIds: [
        1,
      ],
      conditions: {
        minDuration: 120,
        maxDuration: 600,
        sampleRate: 2,
        agentList: [
          866324,
          826325,
        ],
        promptList: [
          "123324",
        ],
        folderList: [
          16754,
          67535,
        ],
      },
      startDatetime: new Date("2025-04-26T00:00:00Z"),
      endDatetime: new Date("2025-04-27T00:00:00Z"),
      id: 1,
      insightTools: [
        {
          name: "summary-tool",
          description: "Default tool - generates a summary of the call",
          version: 1,
          toolArguments: {},
          insightToolDefinitionId: 1,
          id: 1,
          insightToolDefinition: {
            id: 1,
            name: "llm_tool",
            type: "<value>",
            description:
              "An LLM tool evaluates a transcript with a given prompt",
            toolParameters: {},
            toolResultSet: {},
          },
          createdAt: new Date("2025-04-26T00:00:00Z"),
          updatedAt: new Date("2025-04-27T00:00:00Z"),
          lastUpdatedBy: "user@email.com",
        },
      ],
      status: "INACTIVE",
      estimate: {
        backfillCount: 100,
        backfillDuration: 1000,
        estimatedDailyCount: 10,
        estimatedDailyDuration: 3674.11,
        estimatedDailyCost: 45.25,
        estimatedBackfillCost: 4561.00,
      },
      createdAt: new Date("2025-04-26T00:00:00Z"),
      updatedAt: new Date("2025-04-27T00:00:00Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.InsightWorkflowOutput](../../models/components/insightworkflowoutput.md)[] | :heavy_check_mark:                                                                     | List of items returned from the query                                                  |                                                                                        |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | The page number of the results (0-based)                                               | 0                                                                                      |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | The number of items returned per page                                                  | 25                                                                                     |
| `totalPages`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total number of pages of results given the indicated page size                     | 4                                                                                      |
| `totalCount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total number of items returned from the query                                      | 100                                                                                    |