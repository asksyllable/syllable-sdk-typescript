# InsightsUploadFile

Response model for an insight upload file.

## Example Usage

```typescript
import { InsightsUploadFile } from "syllable-sdk/models/components";

let value: InsightsUploadFile = {
  id: 182764,
  folderId: 182764,
  filename: "customer-complaints.wav",
  objectKey:
    "UPLOAD_CALL_ID/recording/2025/04/22/15/00/ce7d212e-80b0-4f0b-9e01-74322f146611.mp3",
  callId: "12345",
  agentNumber: "1234567890",
  customerNumber: "0987654321",
  duration: 305.5,
  startTime: new Date("2025-06-04T00:00:00Z"),
  endTime: new Date("2025-06-05T00:00:00Z"),
  errorMessage: "File not found",
  metadata: {
    "duration": "00:10:00",
    "size": "10MB",
  },
  createdAt: new Date("2025-06-04T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | System-assigned ID for the upload file                                                        | 182764                                                                                        |
| `folderId`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | System-assigned ID for the folder to which the file belongs                                   | 182764                                                                                        |
| `filename`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the uploaded file                                                                     | customer-complaints.wav                                                                       |
| `objectKey`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Object-store key of the uploaded file                                                         | UPLOAD_CALL_ID/recording/2025/04/22/15/00/ce7d212e-80b0-4f0b-9e01-74322f146611.mp3            |
| `callId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the call associated with the uploaded file                              | 12345                                                                                         |
| `agentNumber`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Agent number associated with the uploaded file                                                | 1234567890                                                                                    |
| `customerNumber`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Customer number associated with the uploaded file                                             | 0987654321                                                                                    |
| `duration`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Length in seconds of the uploaded recording                                                   | 305.5                                                                                         |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start time of the uploaded file                                                               | 2025-06-04T00:00:00Z                                                                          |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End time of the uploaded file                                                                 | 2025-06-05T00:00:00Z                                                                          |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message associated with the uploaded file                                               | File not found                                                                                |
| `metadata`                                                                                    | Record<string, *components.Metadata*>                                                         | :heavy_minus_sign:                                                                            | Meta-data associated with the uploaded file                                                   | {<br/>"duration": "00:10:00",<br/>"size": "10MB"<br/>}                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp at which insight upload file was created                                            | 2025-06-04T00:00:00Z                                                                          |