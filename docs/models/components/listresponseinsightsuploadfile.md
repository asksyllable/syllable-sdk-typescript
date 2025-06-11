# ListResponseInsightsUploadFile

## Example Usage

```typescript
import { ListResponseInsightsUploadFile } from "syllable-sdk/models/components";

let value: ListResponseInsightsUploadFile = {
  items: [
    {
      id: 182764,
      folderId: 182764,
      filename: "customer-complaints.wav",
      objectKey:
        "UPLOAD_CALL_ID/recording/2025/04/22/15/00/ce7d212e-80b0-4f0b-9e01-74322f146611.mp3",
      callId: "12345",
      agentNumber: "1234567890",
      customerNumber: "0987654321",
      duration: 305.5,
      startTime: new Date("2025-06-10T00:00:00Z"),
      endTime: new Date("2025-06-11T00:00:00Z"),
      errorMessage: "File not found",
      metadata: {
        "duration": "00:10:00",
        "size": "10MB",
      },
      createdAt: new Date("2025-06-10T00:00:00Z"),
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.InsightsUploadFile](../../models/components/insightsuploadfile.md)[] | :heavy_check_mark:                                                               | List of items returned from the query                                            |                                                                                  |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | The page number of the results (0-based)                                         | 0                                                                                |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | The number of items returned per page                                            | 25                                                                               |
| `totalPages`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of pages of results given the indicated page size               | 4                                                                                |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | The total number of items returned from the query                                | 100                                                                              |