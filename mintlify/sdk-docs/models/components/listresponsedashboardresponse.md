---
title: 'ListResponseDashboardResponse'
---

## Example Usage

```typescript
import { ListResponseDashboardResponse } from "syllable-sdk/models/components";

let value: ListResponseDashboardResponse = {
  items: [
    {
      name: "<value>",
      displayName: "Russell_Macejkovic45",
      rank: 199596,
      label: "<value>",
    },
  ],
  page: 432984,
  pageSize: 528234,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.DashboardResponse](/sdk-docs/models/components/dashboardresponse)[] | TRUE                                                             | N/A                                                                            |
| `page`                                                                         | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `pageSize`                                                                     | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `totalPages`                                                                   | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | FALSE                                                             | N/A                                                                            |