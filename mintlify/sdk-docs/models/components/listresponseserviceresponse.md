---
title: 'ListResponseServiceResponse'
---

## Example Usage

```typescript
import { ListResponseServiceResponse } from "syllable-sdk/models/components";

let value: ListResponseServiceResponse = {
  items: [
    {
      name: "<value>",
      description: "experience confiscate uniform from psst",
      id: 999809,
      lastUpdated: new Date("2023-08-05T04:42:47.563Z"),
      lastUpdatedBy: "<value>",
      tools: [
        "<value>",
      ],
    },
  ],
  page: 534908,
  pageSize: 290248,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ServiceResponse](/sdk-docs/models/components/serviceresponse)[] | TRUE                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | FALSE                                                         | N/A                                                                        |