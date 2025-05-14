# InsightsFolderFileMove

Request model to move files between insight upload folders.

## Example Usage

```typescript
import { InsightsFolderFileMove } from "syllable-sdk/models/components";

let value: InsightsFolderFileMove = {
  destinationFolderId: 182764,
  fileIdList: [
    [12334, 23445, 34556],
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `destinationFolderId`                                 | *number*                                              | :heavy_check_mark:                                    | System-assign folder ID                               | 182764                                                |
| `fileIdList`                                          | *number*[]                                            | :heavy_check_mark:                                    | List of system-assigned IDs for the files to be moved | [12334,23445,34556]                                   |