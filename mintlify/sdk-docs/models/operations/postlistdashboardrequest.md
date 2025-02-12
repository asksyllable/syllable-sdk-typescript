---
title: 'PostListDashboardRequest'
---

## Example Usage

```typescript
import { PostListDashboardRequest } from "syllable-sdk/models/operations";

let value: PostListDashboardRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `page`                                                                             | *number*                                                                           | FALSE                                                                 | N/A                                                                                |
| `limit`                                                                            | *number*                                                                           | FALSE                                                                 | N/A                                                                                |
| `searchFields`                                                                     | [components.DashboardProperties](/sdk-docs/models/components/dashboardproperties)[] | FALSE                                                                 | N/A                                                                                |
| `searchFieldValues`                                                                | *string*[]                                                                         | FALSE                                                                 | N/A                                                                                |
| `orderBy`                                                                          | [components.DashboardProperties](/sdk-docs/models/components/dashboardproperties)   | FALSE                                                                 | N/A                                                                                |
| `orderByDirection`                                                                 | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)         | FALSE                                                                 | N/A                                                                                |
| `fields`                                                                           | [components.DashboardProperties](/sdk-docs/models/components/dashboardproperties)[] | FALSE                                                                 | N/A                                                                                |
| `startDatetime`                                                                    | *string*                                                                           | FALSE                                                                 | N/A                                                                                |
| `endDatetime`                                                                      | *string*                                                                           | FALSE                                                                 | N/A                                                                                |