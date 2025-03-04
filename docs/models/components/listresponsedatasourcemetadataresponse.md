# ListResponseDataSourceMetadataResponse

## Example Usage

```typescript
import { ListResponseDataSourceMetadataResponse } from "syllable-sdk/models/components";

let value: ListResponseDataSourceMetadataResponse = {
  items: [
    {
      name: "Rain",
      description: "Information about rain.",
      labels: [
        "Weather Info",
      ],
      chunk: false,
      id: 1,
      editComments: "Added new info",
      updatedAt: new Date("2023-05-31T01:01:29.087Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 822118,
  pageSize: 189848,
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