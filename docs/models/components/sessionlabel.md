# SessionLabel

## Example Usage

```typescript
import { SessionLabel } from "syllable-sdk/models/components";

let value: SessionLabel = {
  sessionId: 820767,
  type: "<value>",
  code: "<value>",
  userEmail: "<value>",
  id: 908844,
  timestamp: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `sessionId`                         | *number*                            | :heavy_check_mark:                  | N/A                                 |
| `type`                              | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `code`                              | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `userEmail`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `comments`                          | *string*                            | :heavy_minus_sign:                  | N/A                                 |
| `issueCategories`                   | *string*[]                          | :heavy_minus_sign:                  | N/A                                 |
| `id`                                | *number*                            | :heavy_check_mark:                  | The label ID                        |
| `timestamp`                         | *string*                            | :heavy_check_mark:                  | The timestamp of the label creation |