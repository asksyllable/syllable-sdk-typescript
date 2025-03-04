# ListResponseConversation

## Example Usage

```typescript
import { ListResponseConversation } from "syllable-sdk/models/components";

let value: ListResponseConversation = {
  items: [
    {
      timestamp: new Date("2025-08-01T03:56:17.075Z"),
      conversationId: "<id>",
    },
  ],
  page: 727044,
  pageSize: 270328,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Conversation](../../models/components/conversation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |