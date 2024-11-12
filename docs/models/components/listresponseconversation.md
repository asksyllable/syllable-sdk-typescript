# ListResponseConversation

## Example Usage

```typescript
import { ListResponseConversation } from "syllable-sdk/models/components";

let value: ListResponseConversation = {
  items: [
    {
      timestamp: new Date("2022-08-19T13:54:10.391Z"),
      conversationId: "<id>",
    },
  ],
  page: 128926,
  pageSize: 315428,
  totalPages: 363711,
  totalCount: 570197,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Conversation](../../models/components/conversation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |