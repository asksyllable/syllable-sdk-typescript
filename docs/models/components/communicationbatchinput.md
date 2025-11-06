# CommunicationBatchInput

## Example Usage

```typescript
import { CommunicationBatchInput } from "syllable-sdk/models/components";

let value: CommunicationBatchInput = {
  batchId: "20251106.9",
  campaignId: 1,
  expiresOn: new Date("2025-11-07T00:00:00Z"),
  paused: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `batchId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique ID for conversation batch                                                              | 20251106.9                                                                                    |
| `campaignId`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Unique ID for campaign                                                                        | 1                                                                                             |
| `expiresOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of batch expiration                                                                 | 2025-11-07T00:00:00Z                                                                          |
| `paused`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the batch is on HOLD. When on HOLD, no outreach will be made.                         | true                                                                                          |