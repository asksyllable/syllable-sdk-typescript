# ListResponseInsightsOutput

## Example Usage

```typescript
import { ListResponseInsightsOutput } from "syllable-sdk/models/components";

let value: ListResponseInsightsOutput = {
  items: [
    {
      id: 1,
      sessionId: 12341,
      uploadFileId: 12535,
      insightToolId: 34531,
      insightToolVersion: 1,
      insightKey: "summary",
      stringValue: "This is a summary of the call",
      numericValue: 1,
      jsonValue: {
        "content":
          " was there anything else that I can assist you with other than this",
        "role": "assistant",
        "start_time": 289,
      },
      createdAt: new Date("2025-06-03T00:00:00Z"),
      updatedAt: new Date("2025-06-04T00:00:00Z"),
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.InsightsOutput](../../models/components/insightsoutput.md)[] | :heavy_check_mark:                                                       | List of items returned from the query                                    |                                                                          |
| `page`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | The page number of the results (0-based)                                 | 0                                                                        |
| `pageSize`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | The number of items returned per page                                    | 25                                                                       |
| `totalPages`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pages of results given the indicated page size       | 4                                                                        |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of items returned from the query                        | 100                                                                      |