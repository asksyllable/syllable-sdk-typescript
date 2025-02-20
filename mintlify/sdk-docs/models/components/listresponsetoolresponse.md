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
          method: "post",
          argumentLocation: "path",
        },
        defaults: {
          "key": {
            transform: {
              action: "default",
              when: {
                key: "key",
                value: "value",
              },
            },
          },
        },
      },
      serviceId: 959143,
      id: 103298,
      promptsInfo: [
        {
          id: 1,
          name: "Test Prompt",
        },
      ],
      lastUpdated: new Date("2025-08-08T09:57:53.832Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 29190,
  pageSize: 534917,
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