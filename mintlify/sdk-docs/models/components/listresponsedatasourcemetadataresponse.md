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
      updatedAt: new Date("2025-11-06T10:52:56.298Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 941378,
  pageSize: 799203,
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