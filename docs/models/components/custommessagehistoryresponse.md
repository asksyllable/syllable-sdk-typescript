# CustomMessageHistoryResponse

Complete immutable Message configuration; legacy values remain readable.

## Example Usage

```typescript
import { CustomMessageHistoryResponse } from "syllable-sdk/models/components";

let value: CustomMessageHistoryResponse = {
  customMessageId: 805174,
  versionNumber: 518983,
  snapshotSchemaVersion: 324615,
  operation: "<value>",
  createdAt: new Date("2025-10-04T11:23:18.594Z"),
  updatedBy: "<value>",
  comments: "content wherever terrorise easily unripe and",
  restoredFromVersion: 618639,
  name: "<value>",
  type: "<value>",
  preamble: "<value>",
  text: "<value>",
  label: "<value>",
  repeatAfterLanguageChange: true,
  rules: [
    {},
  ],
  typeConfig: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `customMessageId`                                                                                                      | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `versionNumber`                                                                                                        | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `snapshotSchemaVersion`                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `operation`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedBy`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `comments`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `restoredFromVersion`                                                                                                  | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `preamble`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `text`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `label`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `repeatAfterLanguageChange`                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `rules`                                                                                                                | [components.Rules](../../models/components/rules.md)[]                                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `typeConfig`                                                                                                           | [components.CustomMessageHistoryResponseTypeConfig](../../models/components/custommessagehistoryresponsetypeconfig.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |