---
title: 'ListResponseInsightWorkflowOutput'
---

## Example Usage

```typescript
import { ListResponseInsightWorkflowOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightWorkflowOutput = {
  items: [
    {
      name: "<value>",
      description: "couch so pleasure provided rotating than optimistic as by",
      insightToolIds: [
        16328,
      ],
      conditions: {},
      status: "<value>",
      id: 185232,
      insightTools: [
        {
          name: "<value>",
          description: "furthermore geez um scenario hippodrome vain",
          version: 46007,
          toolArguments: {},
          insightToolDefinitionId: 232627,
          id: 348519,
          lastUpdatedBy: "<value>",
        },
      ],
      lastUpdatedBy: "<value>",
    },
  ],
  page: 814967,
  pageSize: 985492,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.InsightWorkflowOutput](/sdk-docs/models/components/insightworkflowoutput)[] | TRUE                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |