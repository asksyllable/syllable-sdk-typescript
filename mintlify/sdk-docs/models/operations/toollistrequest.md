# ToolListRequest

## Example Usage

```typescript
import { ToolListRequest } from "syllable-sdk/models/operations";

let value: ToolListRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `page`                                                                     | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `searchFields`                                                             | [components.ToolProperties](../../models/components/toolproperties.md)[]   | FALSE                                                         | N/A                                                                        |
| `searchFieldValues`                                                        | *string*[]                                                                 | FALSE                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.ToolProperties](../../models/components/toolproperties.md)     | FALSE                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [components.OrderByDirection](../../models/components/orderbydirection.md) | FALSE                                                         | N/A                                                                        |
| `fields`                                                                   | [components.ToolProperties](../../models/components/toolproperties.md)[]   | FALSE                                                         | N/A                                                                        |
| `startDatetime`                                                            | *string*                                                                   | FALSE                                                         | N/A                                                                        |
| `endDatetime`                                                              | *string*                                                                   | FALSE                                                         | N/A                                                                        |