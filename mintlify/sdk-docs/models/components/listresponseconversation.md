---
title: 'ListResponseConversation'
---

## Example Usage

```typescript
import { ListResponseConversation } from "syllable-sdk/models/components";

let value: ListResponseConversation = {
  items: [
    {
      timestamp: new Date("2023-05-09T19:33:28.581Z"),
      conversationId: "<id>",
    },
  ],
  page: 517379,
  pageSize: 132068,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Conversation](/sdk-docs/models/components/conversation)[] | TRUE                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | TRUE                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | FALSE                                                   | N/A                                                                  |