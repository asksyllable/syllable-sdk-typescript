# OutboundBatchUploadRequest

## Example Usage

```typescript
import { OutboundBatchUploadRequest } from "syllable-sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `batchId`                                                                                                                                     | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `validateOnly`                                                                                                                                | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Check the file and return the results with status 200, also when the file is not accepted. The file is not saved and no requests are created. |
| `bodyOutboundBatchUpload`                                                                                                                     | [components.BodyOutboundBatchUpload](../../models/components/bodyoutboundbatchupload.md)                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |