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
      chunkDelimiter: "",
      id: 1,
      editComments: "Added new info",
      updatedAt: new Date("2024-09-12T23:53:04.745Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `items`                                                                                          | [components.DataSourceMetadataResponse](../../models/components/datasourcemetadataresponse.md)[] | :heavy_check_mark:                                                                               | List of items returned from the query                                                            |                                                                                                  |
| `page`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | The page number of the results (0-based)                                                         | 0                                                                                                |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | The number of items returned per page                                                            | 25                                                                                               |
| `totalPages`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | The total number of pages of results given the indicated page size                               | 4                                                                                                |
| `totalCount`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | The total number of items returned from the query                                                | 100                                                                                              |