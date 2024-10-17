# ConversationListResponse

## Example Usage

```typescript
import { ConversationListResponse } from "syllable-sdk/models/components";

let value: ConversationListResponse = {
  conversations: [
    {
      timestamp: new Date("2022-10-17T22:52:14.955Z"),
      conversationId: "<id>",
    },
  ],
  page: 774234,
  pageSize: 456150,
  totalPages: 568434,
  totalCount: 18789,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conversations`                                                      | [components.Conversation](../../models/components/conversation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |