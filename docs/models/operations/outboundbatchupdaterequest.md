# OutboundBatchUpdateRequest

## Example Usage

```typescript
import { OutboundBatchUpdateRequest } from "syllable-sdk/models/operations";

let value: OutboundBatchUpdateRequest = {
  batchId: "<id>",
  communicationBatchUpdate: {
    paused: true,
    expiresOn: "2027-01-01T06:00:00Z",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `batchId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `communicationBatchUpdate`                                                                 | [components.CommunicationBatchUpdate](../../models/components/communicationbatchupdate.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |