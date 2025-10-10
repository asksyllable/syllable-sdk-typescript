# PronunciationsCsvUploadResponse

Placeholder response returned after accepting a pronunciations CSV upload.

## Example Usage

```typescript
import { PronunciationsCsvUploadResponse } from "syllable-sdk/models/components";

let value: PronunciationsCsvUploadResponse = {
  revision: 759782,
  hash: "<value>",
  entries: 480091,
  uploadedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `revision`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `entries`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `uploadedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |