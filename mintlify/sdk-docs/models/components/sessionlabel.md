---
title: 'SessionLabel'
---

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
| `sessionId`                         | *number*                            | TRUE                  | N/A                                 |
| `type`                              | *string*                            | TRUE                  | N/A                                 |
| `code`                              | *string*                            | TRUE                  | N/A                                 |
| `userEmail`                         | *string*                            | TRUE                  | N/A                                 |
| `comments`                          | *string*                            | FALSE                  | N/A                                 |
| `issueCategories`                   | *string*[]                          | FALSE                  | N/A                                 |
| `id`                                | *number*                            | TRUE                  | The label ID                        |
| `timestamp`                         | *string*                            | TRUE                  | The timestamp of the label creation |