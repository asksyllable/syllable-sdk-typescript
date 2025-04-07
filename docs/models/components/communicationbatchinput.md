# CommunicationBatchInput

## Example Usage

```typescript
import { CommunicationBatchInput } from "syllable-sdk/models/components";

let value: CommunicationBatchInput = {
  batchId: "20250407.9",
  campaignId: 1,
  expiresOn: "2025-04-07T00:00:00Z",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `batchId`                        | *string*                         | :heavy_check_mark:               | Unique ID for conversation batch | 20250407.9                       |
| `campaignId`                     | *number*                         | :heavy_check_mark:               | Unique ID for campaign           | 1                                |
| `expiresOn`                      | *string*                         | :heavy_minus_sign:               | Timestamp of batch expiration    | 2025-04-07T00:00:00Z             |