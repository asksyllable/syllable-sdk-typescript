# ConversationsListRequest

## Example Usage

```typescript
import { ConversationsListRequest } from "syllable-sdk/models/operations";

let value: ConversationsListRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `page`                                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `searchFields`                                                                           | [components.ConversationProperties](../../models/components/conversationproperties.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `searchFieldValues`                                                                      | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `orderBy`                                                                                | [components.ConversationProperties](../../models/components/conversationproperties.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `orderByDirection`                                                                       | [components.OrderByDirection](../../models/components/orderbydirection.md)               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fields`                                                                                 | [components.ConversationProperties](../../models/components/conversationproperties.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `startDatetime`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `endDatetime`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |