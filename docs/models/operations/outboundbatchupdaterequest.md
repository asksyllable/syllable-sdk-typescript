# OutboundBatchUpdateRequest

## Example Usage

```typescript
import { OutboundBatchUpdateRequest } from "syllable-sdk/models/operations";

let value: OutboundBatchUpdateRequest = {
  batchId: "<id>",
  communicationBatch: {
    batchId: "20250407.9",
    campaignId: 1,
    expiresOn: "2025-04-07T00:00:00Z",
    count: 152,
    createdAt: "2025-04-07T00:00:00Z",
    deletedAt: "2025-04-07T00:00:00Z",
    deletedReason: "User request",
    lastWorkedOn: "2025-04-07T00:00:00Z",
    lastUpdatedBy: "user@email.com",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `batchId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `communicationBatch`                                                           | [components.CommunicationBatch](../../models/components/communicationbatch.md) | :heavy_check_mark:                                                             | N/A                                                                            |