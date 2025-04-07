# CommunicationBatch

## Example Usage

```typescript
import { CommunicationBatch } from "syllable-sdk/models/components";

let value: CommunicationBatch = {
  batchId: "20250407.9",
  campaignId: 1,
  expiresOn: "2025-04-07T00:00:00Z",
  count: 152,
  createdAt: "2025-04-07T00:00:00Z",
  deletedAt: "2025-04-07T00:00:00Z",
  deletedReason: "User request",
  lastWorkedOn: "2025-04-07T00:00:00Z",
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `batchId`                                                        | *string*                                                         | :heavy_check_mark:                                               | Unique ID for conversation batch                                 | 20250407.9                                                       |
| `campaignId`                                                     | *number*                                                         | :heavy_check_mark:                                               | Unique ID for campaign                                           | 1                                                                |
| `expiresOn`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Timestamp of batch expiration                                    | 2025-04-07T00:00:00Z                                             |
| `status`                                                         | [components.BatchStatus](../../models/components/batchstatus.md) | :heavy_minus_sign:                                               | Status of a communication batch.                                 |                                                                  |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Number of requests in batch                                      | 152                                                              |
| `createdAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Timestamp of batch creation                                      | 2025-04-07T00:00:00Z                                             |
| `deletedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Timestamp of batch deletion                                      | 2025-04-07T00:00:00Z                                             |
| `deletedReason`                                                  | *string*                                                         | :heavy_minus_sign:                                               | Reason for batch deletion                                        | User request                                                     |
| `lastWorkedOn`                                                   | *string*                                                         | :heavy_minus_sign:                                               | Timestamp of last batch activity                                 | 2025-04-07T00:00:00Z                                             |
| `lastUpdatedBy`                                                  | *string*                                                         | :heavy_check_mark:                                               | Email of user who last updated campaign                          | user@email.com                                                   |