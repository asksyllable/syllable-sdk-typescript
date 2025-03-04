---
title: 'ListResponseInsightToolOutput'
---

## Example Usage

```typescript
import { ListResponseInsightToolOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightToolOutput = {
  items: [
    {
      name: "<value>",
      description: "foot whereas besides vice fuel birdbath",
      version: 85311,
      toolArguments: {},
      insightToolDefinitionId: 221396,
      id: 100014,
      lastUpdatedBy: "<value>",
    },
  ],
  page: 265039,
  pageSize: 66149,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.InsightToolOutput](/sdk-docs/models/components/insighttooloutput)[] | TRUE                                                             | N/A                                                                            |
| `page`                                                                         | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `pageSize`                                                                     | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `totalPages`                                                                   | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | FALSE                                                             | N/A                                                                            |