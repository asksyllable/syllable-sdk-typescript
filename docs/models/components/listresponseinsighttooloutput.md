# ListResponseInsightToolOutput

## Example Usage

```typescript
import { ListResponseInsightToolOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightToolOutput = {
  items: [
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
        description: "An LLM tool evaluates a transcript with a given prompt",
        toolParameters: {},
        toolResultSet: {},
      },
      createdAt: new Date("2025-04-18T00:00:00Z"),
      updatedAt: new Date("2025-04-19T00:00:00Z"),
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.InsightToolOutput](../../models/components/insighttooloutput.md)[] | :heavy_check_mark:                                                             | List of items returned from the query                                          |                                                                                |
| `page`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | The page number of the results (0-based)                                       | 0                                                                              |
| `pageSize`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | The number of items returned per page                                          | 25                                                                             |
| `totalPages`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The total number of pages of results given the indicated page size             | 4                                                                              |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | The total number of items returned from the query                              | 100                                                                            |