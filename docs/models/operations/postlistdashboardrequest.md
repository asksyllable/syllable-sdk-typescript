# PostListDashboardRequest

## Example Usage

```typescript
import { PostListDashboardRequest } from "syllable-sdk/models/operations";

let value: PostListDashboardRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `page`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `limit`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `searchFields`                                                                     | [components.DashboardProperties](../../models/components/dashboardproperties.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `searchFieldValues`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `orderBy`                                                                          | [components.DashboardProperties](../../models/components/dashboardproperties.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `orderByDirection`                                                                 | [components.OrderByDirection](../../models/components/orderbydirection.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `fields`                                                                           | [components.DashboardProperties](../../models/components/dashboardproperties.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `startDatetime`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `endDatetime`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |