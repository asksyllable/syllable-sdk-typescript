# BatchDetails

## Example Usage

```typescript
import { BatchDetails } from "syllable-sdk/models/components";

let value: BatchDetails = {
  batchId: "20250904.9",
  campaignId: 1,
  expiresOn: new Date("2025-09-05T00:00:00Z"),
  paused: true,
  uploadFilename: "LATE_PAYMENTS_20250401.csv",
  createdAt: new Date("2025-09-04T00:00:00Z"),
  deletedAt: new Date("2025-09-04T00:00:00Z"),
  deletedReason: "User request",
  lastUpdatedAt: new Date("2025-09-04T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
  errorMessage: "Missing required fields",
  statusCounts: {
    "CANCELED": 7,
    "CONNECTED": 100,
    "DUPLICATE": 5,
    "FAILED": 10,
    "INITIATED": 20,
    "PENDING": 10,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `batchId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | Unique ID for conversation batch                                                                  | 20250904.9                                                                                        |
| `campaignId`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Unique ID for campaign                                                                            | 1                                                                                                 |
| `expiresOn`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Timestamp of batch expiration                                                                     | 2025-09-05T00:00:00Z                                                                              |
| `paused`                                                                                          | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Whether the batch is on HOLD. When on HOLD, no outreach will be made.                             | true                                                                                              |
| `status`                                                                                          | [components.BatchStatus](../../models/components/batchstatus.md)                                  | :heavy_minus_sign:                                                                                | Status of a communication batch.                                                                  |                                                                                                   |
| `uploadFilename`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | Name of file used to create batch                                                                 | LATE_PAYMENTS_20250401.csv                                                                        |
| `createdAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Timestamp of batch creation                                                                       | 2025-09-04T00:00:00Z                                                                              |
| `deletedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Timestamp of batch deletion                                                                       | 2025-09-04T00:00:00Z                                                                              |
| `deletedReason`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | Reason for batch deletion                                                                         | User request                                                                                      |
| `lastUpdatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Timestamp of last change to batch                                                                 | 2025-09-04T00:00:00Z                                                                              |
| `lastUpdatedBy`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | Email of user who last updated campaign                                                           | user@email.com                                                                                    |
| `errorMessage`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | Error message if batch upload failed                                                              | Invalid file format                                                                               |
| `statusCounts`                                                                                    | Record<string, *number*>                                                                          | :heavy_minus_sign:                                                                                | Counts of requests by status                                                                      | {<br/>"CANCELED": 7,<br/>"CONNECTED": 100,<br/>"DUPLICATE": 5,<br/>"FAILED": 10,<br/>"INITIATED": 20,<br/>"PENDING": 10<br/>} |