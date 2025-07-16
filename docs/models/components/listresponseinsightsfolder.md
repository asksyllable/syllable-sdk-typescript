# ListResponseInsightsFolder

## Example Usage

```typescript
import { ListResponseInsightsFolder } from "syllable-sdk/models/components";

let value: ListResponseInsightsFolder = {
  items: [
    {
      name: "customer-complaints",
      label: "support",
      description: "Call recordings related to customer complaints",
      id: 182764,
      createdAt: new Date("2025-07-15T00:00:00Z"),
      updatedAt: new Date("2025-07-16T00:00:00Z"),
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.InsightsFolder](../../models/components/insightsfolder.md)[] | :heavy_check_mark:                                                       | List of items returned from the query                                    |                                                                          |
| `page`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | The page number of the results (0-based)                                 | 0                                                                        |
| `pageSize`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | The number of items returned per page                                    | 25                                                                       |
| `totalPages`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of pages of results given the indicated page size       | 4                                                                        |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The total number of items returned from the query                        | 100                                                                      |