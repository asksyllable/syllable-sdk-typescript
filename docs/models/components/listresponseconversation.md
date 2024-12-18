# ListResponseConversation

## Example Usage

```typescript
import { ListResponseConversation } from "syllable-sdk/models/components";

let value: ListResponseConversation = {
  items: [
    {
      timestamp: new Date("2022-05-25T10:48:39.501Z"),
      conversationId: "<id>",
    },
  ],
  page: 716327,
  pageSize: 289406,
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