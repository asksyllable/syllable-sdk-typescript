# PromptsListRequest

## Example Usage

```typescript
import { PromptsListRequest } from "syllable-sdk/models/operations";

let value: PromptsListRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `page`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `searchFields`                                                               | [components.PromptProperties](../../models/components/promptproperties.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `searchFieldValues`                                                          | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `orderBy`                                                                    | [components.PromptProperties](../../models/components/promptproperties.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `orderByDirection`                                                           | [components.OrderByDirection](../../models/components/orderbydirection.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `fields`                                                                     | [components.PromptProperties](../../models/components/promptproperties.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `startDatetime`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `endDatetime`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |