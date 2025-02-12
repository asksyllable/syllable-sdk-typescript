---
title: 'ListResponseDataSourceMetadataResponse'
---

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
| `items`                                                                                          | [components.DataSourceMetadataResponse](/sdk-docs/models/components/datasourcemetadataresponse)[] | TRUE                                                                               | N/A                                                                                              |
| `page`                                                                                           | *number*                                                                                         | TRUE                                                                               | N/A                                                                                              |
| `pageSize`                                                                                       | *number*                                                                                         | TRUE                                                                               | N/A                                                                                              |
| `totalPages`                                                                                     | *number*                                                                                         | FALSE                                                                               | N/A                                                                                              |
| `totalCount`                                                                                     | *number*                                                                                         | FALSE                                                                               | N/A                                                                                              |