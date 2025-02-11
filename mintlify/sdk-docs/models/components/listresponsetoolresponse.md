---
title: 'ListResponseToolResponse'
---

## Example Usage

```typescript
import { ListResponseToolResponse } from "syllable-sdk/models/components";

let value: ListResponseToolResponse = {
  items: [
    {
      name: "<value>",
      definition: {
        tool: {
          function: {
            name: "<value>",
            description: "burgeon pupil great vice",
            parameters: "<value>",
          },
        },
      },
      serviceId: 117320,
      id: 107004,
      lastUpdated: new Date("2024-10-08T07:19:47.979Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 745398,
  pageSize: 848151,
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