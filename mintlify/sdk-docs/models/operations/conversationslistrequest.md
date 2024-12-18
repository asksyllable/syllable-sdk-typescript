# ConversationsListRequest

## Example Usage

```typescript
import { ConversationsListRequest } from "syllable-sdk/models/operations";

let value: ConversationsListRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `page`                                                                                   | *number*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `searchFields`                                                                           | [components.ConversationProperties](../../models/components/conversationproperties.md)[] | FALSE                                                                       | N/A                                                                                      |
| `searchFieldValues`                                                                      | *string*[]                                                                               | FALSE                                                                       | N/A                                                                                      |
| `orderBy`                                                                                | [components.ConversationProperties](../../models/components/conversationproperties.md)   | FALSE                                                                       | N/A                                                                                      |
| `orderByDirection`                                                                       | [components.OrderByDirection](../../models/components/orderbydirection.md)               | FALSE                                                                       | N/A                                                                                      |
| `fields`                                                                                 | [components.ConversationProperties](../../models/components/conversationproperties.md)[] | FALSE                                                                       | N/A                                                                                      |
| `startDatetime`                                                                          | *string*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `endDatetime`                                                                            | *string*                                                                                 | FALSE                                                                       | N/A                                                                                      |