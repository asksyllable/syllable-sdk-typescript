---
title: 'ListResponseSessionLabel'
---

## Example Usage

```typescript
import { ListResponseSessionLabel } from "syllable-sdk/models/components";

let value: ListResponseSessionLabel = {
  items: [
    {
      sessionId: 357758,
      type: "auto-rating",
      code: "OK",
      userEmail: "<value>",
      issueCategories: [
        "Silent treatment",
      ],
      id: 522062,
      timestamp: "<value>",
    },
  ],
  page: 35160,
  pageSize: 906232,
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