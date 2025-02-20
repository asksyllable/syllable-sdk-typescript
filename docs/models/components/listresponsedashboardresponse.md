# ListResponseDashboardResponse

## Example Usage

```typescript
import { ListResponseDashboardResponse } from "syllable-sdk/models/components";

let value: ListResponseDashboardResponse = {
  items: [
    {
      name: "<value>",
      displayName: "Rosina14",
      rank: 478370,
      label: "<value>",
    },
  ],
  page: 497391,
  pageSize: 639473,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.DashboardResponse](../../models/components/dashboardresponse.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `page`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pageSize`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalPages`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |