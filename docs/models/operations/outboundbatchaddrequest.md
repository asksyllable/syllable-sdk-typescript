# OutboundBatchAddRequest

## Example Usage

```typescript
import { OutboundBatchAddRequest } from "syllable-sdk/models/operations";

let value: OutboundBatchAddRequest = {
  batchId: "<id>",
  communicationRequest: {
    batchId: "20250117.9",
    referenceId: "12345",
    target: "user@email.com",
    requestVariables: {},
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `batchId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `communicationRequest`                                                             | [components.CommunicationRequest](../../models/components/communicationrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |