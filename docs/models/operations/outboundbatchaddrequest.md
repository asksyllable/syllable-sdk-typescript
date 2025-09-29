# OutboundBatchAddRequest

## Example Usage

```typescript
import { OutboundBatchAddRequest } from "syllable-sdk/models/operations";

let value: OutboundBatchAddRequest = {
  batchId: "<id>",
  communicationRequest: {
    referenceId: "12345",
    target: "512-555-1234",
    requestVariables: {},
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `batchId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `communicationRequest`                                                             | [components.CommunicationRequest](../../models/components/communicationrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |