# ListResponseCommunicationBatch

## Example Usage

```typescript
import { ListResponseCommunicationBatch } from "syllable-sdk/models/components";

let value: ListResponseCommunicationBatch = {
  items: [
    {
      batchId: "20250409.9",
      campaignId: 1,
      expiresOn: "2025-04-10T00:00:00Z",
      count: 152,
      createdAt: "2025-04-09T00:00:00Z",
      deletedAt: "2025-04-09T00:00:00Z",
      deletedReason: "User request",
      lastWorkedOn: "2025-04-09T00:00:00Z",
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.CommunicationBatch](../../models/components/communicationbatch.md)[] | :heavy_check_mark:                                                               | List of items returned from the query                                            |                                                                                  |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | The page number of the results (0-based)                                         | 0                                                                                |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | The number of items returned per page                                            | 25                                                                               |
| `totalPages`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of pages of results given the indicated page size               | 4                                                                                |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of items returned from the query                                | 100                                                                              |