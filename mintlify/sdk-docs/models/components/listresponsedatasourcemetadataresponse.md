---
title: 'ListResponseDataSourceMetadataResponse'
---

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
      chunkDelimiter: null,
      id: 1,
      editComments: "Added new info",
      updatedAt: new Date("2023-11-27T13:15:01.733Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 262118,
  pageSize: 456141,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `items`                                                                                          | [components.DataSourceMetadataResponse](/sdk-docs/models/components/datasourcemetadataresponse)[] | TRUE                                                                               | N/A                                                                                              |
| `page`                                                                                           | *number*                                                                                         | TRUE                                                                               | N/A                                                                                              |
| `pageSize`                                                                                       | *number*                                                                                         | TRUE                                                                               | N/A                                                                                              |
| `totalPages`                                                                                     | *number*                                                                                         | FALSE                                                                               | N/A                                                                                              |
| `totalCount`                                                                                     | *number*                                                                                         | FALSE                                                                               | N/A                                                                                              |