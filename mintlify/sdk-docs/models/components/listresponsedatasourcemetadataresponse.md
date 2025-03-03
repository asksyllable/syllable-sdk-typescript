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
      id: 1,
      editComments: "Added new info",
      updatedAt: new Date("2024-09-02T21:01:43.273Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 860552,
  pageSize: 727044,
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