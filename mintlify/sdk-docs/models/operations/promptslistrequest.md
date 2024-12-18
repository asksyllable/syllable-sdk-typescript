# PromptsListRequest

## Example Usage

```typescript
import { PromptsListRequest } from "syllable-sdk/models/operations";

let value: PromptsListRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `page`                                                                       | *number*                                                                     | FALSE                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | FALSE                                                           | N/A                                                                          |
| `searchFields`                                                               | [components.PromptProperties](../../models/components/promptproperties.md)[] | FALSE                                                           | N/A                                                                          |
| `searchFieldValues`                                                          | *string*[]                                                                   | FALSE                                                           | N/A                                                                          |
| `orderBy`                                                                    | [components.PromptProperties](../../models/components/promptproperties.md)   | FALSE                                                           | N/A                                                                          |
| `orderByDirection`                                                           | [components.OrderByDirection](../../models/components/orderbydirection.md)   | FALSE                                                           | N/A                                                                          |
| `fields`                                                                     | [components.PromptProperties](../../models/components/promptproperties.md)[] | FALSE                                                           | N/A                                                                          |
| `startDatetime`                                                              | *string*                                                                     | FALSE                                                           | N/A                                                                          |
| `endDatetime`                                                                | *string*                                                                     | FALSE                                                           | N/A                                                                          |