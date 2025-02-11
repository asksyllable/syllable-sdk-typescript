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
      displayName: "Mack_Krajcik26",
      rank: 483753,
      label: "<value>",
    },
  ],
  page: 256114,
  pageSize: 823718,
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