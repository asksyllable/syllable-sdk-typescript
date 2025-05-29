# InsightsUploadMoveFilesRequest

## Example Usage

```typescript
import { InsightsUploadMoveFilesRequest } from "syllable-sdk/models/operations";

let value: InsightsUploadMoveFilesRequest = {
  folderId: 240829,
  insightsFolderFileMove: {
    destinationFolderId: 182764,
    fileIdList: [
      [12334, 23445, 34556],
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `folderId`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `insightsFolderFileMove`                                                               | [components.InsightsFolderFileMove](../../models/components/insightsfolderfilemove.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |