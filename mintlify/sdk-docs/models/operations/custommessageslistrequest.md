# CustomMessagesListRequest

## Example Usage

```typescript
import { CustomMessagesListRequest } from "syllable-sdk/models/operations";

let value: CustomMessagesListRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `page`                                                                                     | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `searchFields`                                                                             | [components.CustomMessageProperties](../../models/components/custommessageproperties.md)[] | FALSE                                                                         | N/A                                                                                        |
| `searchFieldValues`                                                                        | *string*[]                                                                                 | FALSE                                                                         | N/A                                                                                        |
| `orderBy`                                                                                  | [components.CustomMessageProperties](../../models/components/custommessageproperties.md)   | FALSE                                                                         | N/A                                                                                        |
| `orderByDirection`                                                                         | [components.OrderByDirection](../../models/components/orderbydirection.md)                 | FALSE                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [components.CustomMessageProperties](../../models/components/custommessageproperties.md)[] | FALSE                                                                         | N/A                                                                                        |
| `startDatetime`                                                                            | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `endDatetime`                                                                              | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |