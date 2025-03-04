# ListResponseDashboardResponse

## Example Usage

```typescript
import { ListResponseDashboardResponse } from "syllable-sdk/models/components";

let value: ListResponseDashboardResponse = {
  items: [
    {
      name: "<value>",
      displayName: "Sincere43",
      rank: 923456,
      label: "<value>",
    },
  ],
  page: 299153,
  pageSize: 388404,
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