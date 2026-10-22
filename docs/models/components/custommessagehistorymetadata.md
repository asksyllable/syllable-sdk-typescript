# CustomMessageHistoryMetadata

Metadata for a saved Message version, without its content.

## Example Usage

```typescript
import { CustomMessageHistoryMetadata } from "syllable-sdk/models/components";

let value: CustomMessageHistoryMetadata = {
  customMessageId: 92955,
  versionNumber: 290329,
  snapshotSchemaVersion: 445465,
  operation: "<value>",
  createdAt: new Date("2025-05-17T14:41:12.216Z"),
  updatedBy: "<value>",
  comments:
    "apostrophize loftily excluding intensely alive graffiti really for gut why vol",
  restoredFromVersion: 754556,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customMessageId`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `versionNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `snapshotSchemaVersion`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operation`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `comments`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `restoredFromVersion`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |