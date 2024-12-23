---
title: 'ListResponseSessionLabel'
---

## Example Usage

```typescript
import { ListResponseSessionLabel } from "syllable-sdk/models/components";

let value: ListResponseSessionLabel = {
  items: [
    {
      sessionId: 159414,
      type: "<value>",
      code: "<value>",
      userEmail: "<value>",
      id: 628899,
      timestamp: "<value>",
    },
  ],
  page: 398434,
  pageSize: 62713,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.SessionLabel](/sdk-docs/models/components/sessionlabel)[] | TRUE                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |