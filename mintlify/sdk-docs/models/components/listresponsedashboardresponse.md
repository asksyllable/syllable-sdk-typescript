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
      displayName: "Marlene.Stoltenberg",
      rank: 241557,
      label: "<value>",
    },
  ],
  page: 169025,
  pageSize: 859581,
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