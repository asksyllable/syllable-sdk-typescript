# ListResponseDashboardResponse

## Example Usage

```typescript
import { ListResponseDashboardResponse } from "syllable-sdk/models/components";

let value: ListResponseDashboardResponse = {
  items: [
    {
      name: "<value>",
      displayName: "Brooks70",
      rank: 524577,
      label: "<value>",
    },
  ],
  page: 354225,
  pageSize: 120277,
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