# ListResponseInsightToolOutput

## Example Usage

```typescript
import { ListResponseInsightToolOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightToolOutput = {
  items: [
    {
      name: "summary-tool",
      description: "This tool uses GPT4.1 to generate a summary of the call",
      version: 1,
      toolArguments: {
        "prompt":
          "Provide a concise, accurate summary of the conversation's key points, focusing on the user's goal and how the agent responded",
      },
      insightToolDefinitionId: 1,
      id: 1,
      insightToolDefinition: {
        id: 1,
        name: "llm_tool",
        type: "<value>",
        description: "An LLM tool evaluates a transcript with a given prompt",
        toolParameters: {
          "prompt": "string",
        },
        toolResultSet: {
          "summary": "string",
        },
      },
      createdAt: new Date("2025-05-08T00:00:00Z"),
      updatedAt: new Date("2025-05-09T00:00:00Z"),
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