# ListResponseServiceResponse

## Example Usage

```typescript
import { ListResponseServiceResponse } from "syllable-sdk/models/components";

let value: ListResponseServiceResponse = {
  items: [
    {
      name: "Weather tools",
      description: "Service containing tools for fetching weather information",
      id: 1,
      lastUpdatedComments: "Updated description to correct typo",
      lastUpdated: new Date("2024-01-01T12:00:00Z"),
      lastUpdatedBy: "user@email.com",
      tools: [
        "hangup",
        "summary",
      ],
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ServiceResponse](../../models/components/serviceresponse.md)[] | :heavy_check_mark:                                                         | List of items returned from the query                                      |                                                                            |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The page number of the results (0-based)                                   | 0                                                                          |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | The number of items returned per page                                      | 25                                                                         |
| `totalPages`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of pages of results given the indicated page size         | 4                                                                          |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | The total number of items returned from the query                          | 100                                                                        |