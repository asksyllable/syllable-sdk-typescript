# ListResponseCommunicationBatch

## Example Usage

```typescript
import { ListResponseCommunicationBatch } from "syllable-sdk/models/components";

let value: ListResponseCommunicationBatch = {
  items: [
    {
      batchId: "20250412.9",
      campaignId: 1,
      expiresOn: new Date("2025-04-13T00:00:00Z"),
      uploadFilename: "LATE_PAYMENTS_20250401.csv",
      createdAt: new Date("2025-04-12T00:00:00Z"),
      deletedAt: new Date("2025-04-12T00:00:00Z"),
      deletedReason: "User request",
      lastWorkedOn: new Date("2025-04-12T00:00:00Z"),
      lastUpdatedBy: "user@email.com",
      errorMessage: "Invalid file format",
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