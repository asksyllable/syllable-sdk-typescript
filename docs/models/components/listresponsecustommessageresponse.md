# ListResponseCustomMessageResponse

## Example Usage

```typescript
import { ListResponseCustomMessageResponse } from "syllable-sdk/models/components";

let value: ListResponseCustomMessageResponse = {
  items: [
    {
      name: "Customer service greeting",
      preamble: "If this is an emergency, please hang up and call 911.",
      text:
        "Hello and thank you for calling customer service. How can I help you today?",
      label: "Customer service",
      rules: [
        {
          description: "Closed on New Year's Day",
          timeRangeStart: "09:00",
          timeRangeEnd: "17:00",
          date: "2025-01-01",
          invert: false,
          text: "Hello, thank you for calling. Sorry, we're closed today.",
        },
        {
          description: "Closed on weekends",
          timeRangeStart: "09:00",
          timeRangeEnd: "17:00",
          daysOfWeek: [
            "sa",
            "su",
          ],
          invert: false,
          text:
            "Hello, thank you for calling. Sorry, we're closed on weekends.",
        },
      ],
      id: 1,
      updatedAt: new Date("2024-01-01T00:00:00Z"),
      agentCount: 1,
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
| `items`                                                                                | [components.CustomMessageResponse](../../models/components/custommessageresponse.md)[] | :heavy_check_mark:                                                                     | List of items returned from the query                                                  |                                                                                        |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | The page number of the results (0-based)                                               | 0                                                                                      |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | The number of items returned per page                                                  | 25                                                                                     |
| `totalPages`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total number of pages of results given the indicated page size                     | 4                                                                                      |
| `totalCount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total number of items returned from the query                                      | 100                                                                                    |