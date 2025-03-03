# ListResponseConversation

## Example Usage

```typescript
import { ListResponseConversation } from "syllable-sdk/models/components";

let value: ListResponseConversation = {
  items: [
    {
      timestamp: new Date("2023-03-29T03:44:55.897Z"),
      conversationId: "<id>",
    },
  ],
  page: 89603,
  pageSize: 672048,
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