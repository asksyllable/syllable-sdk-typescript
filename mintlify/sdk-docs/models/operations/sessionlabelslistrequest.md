# SessionLabelsListRequest

## Example Usage

```typescript
import { SessionLabelsListRequest } from "syllable-sdk/models/operations";

let value: SessionLabelsListRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `page`                                                                                   | *number*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `searchFields`                                                                           | [components.SessionLabelProperties](../../models/components/sessionlabelproperties.md)[] | FALSE                                                                       | N/A                                                                                      |
| `searchFieldValues`                                                                      | *string*[]                                                                               | FALSE                                                                       | N/A                                                                                      |
| `orderBy`                                                                                | [components.SessionLabelProperties](../../models/components/sessionlabelproperties.md)   | FALSE                                                                       | N/A                                                                                      |
| `orderByDirection`                                                                       | [components.OrderByDirection](../../models/components/orderbydirection.md)               | FALSE                                                                       | N/A                                                                                      |
| `fields`                                                                                 | [components.SessionLabelProperties](../../models/components/sessionlabelproperties.md)[] | FALSE                                                                       | N/A                                                                                      |
| `startDatetime`                                                                          | *string*                                                                                 | FALSE                                                                       | N/A                                                                                      |
| `endDatetime`                                                                            | *string*                                                                                 | FALSE                                                                       | N/A                                                                                      |