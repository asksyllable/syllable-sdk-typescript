# ListResponseDataSourceMetadataResponse

## Example Usage

```typescript
import { ListResponseDataSourceMetadataResponse } from "syllable-sdk/models/components";

let value: ListResponseDataSourceMetadataResponse = {
  items: [
    {
      name: "<value>",
      labels: [
        "Location Info",
      ],
      chunk: false,
      updatedAt: new Date("2024-09-11T16:50:31.874Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 183280,
  pageSize: 144847,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `items`                                                                                          | [components.DataSourceMetadataResponse](../../models/components/datasourcemetadataresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `page`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `totalPages`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `totalCount`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |