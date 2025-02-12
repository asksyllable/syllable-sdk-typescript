---
title: 'ListResponseToolResponse'
---

## Example Usage

```typescript
import { ListResponseToolResponse } from "syllable-sdk/models/components";

let value: ListResponseToolResponse = {
  items: [
    {
      name: "Weather Fetcher",
      definition: {
        tool: {
          function: {
            name: "weather_fetcher",
            description: "Fetches weather data",
            parameters: "<value>",
          },
        },
        endpoint: {
          url: "https://api.example.com",
          method: "get",
          argumentLocation: "path",
        },
        defaults: "<value>",
      },
      serviceId: 456520,
      id: 337477,
      lastUpdated: new Date("2025-11-29T15:51:58.019Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 133439,
  pageSize: 96804,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.ToolResponse](/sdk-docs/models/components/toolresponse)[] | TRUE                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |