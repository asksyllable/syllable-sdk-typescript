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
      description:
        "firm lieu limply decide seemingly almost recount venture bus questioningly",
      id: 886961,
      lastUpdated: new Date("2024-11-09T05:36:12.706Z"),
      lastUpdatedBy: "<value>",
      tools: [
        "<value>",
      ],
    },
  ],
  page: 133461,
  pageSize: 980581,
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