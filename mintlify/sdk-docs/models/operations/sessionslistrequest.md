# SessionsListRequest

## Example Usage

```typescript
import { SessionsListRequest } from "syllable-sdk/models/operations";

let value: SessionsListRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page`                                                                         | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `searchFields`                                                                 | [components.SessionProperties](../../models/components/sessionproperties.md)[] | FALSE                                                             | N/A                                                                            |
| `searchFieldValues`                                                            | *string*[]                                                                     | FALSE                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.SessionProperties](../../models/components/sessionproperties.md)   | FALSE                                                             | N/A                                                                            |
| `orderByDirection`                                                             | [components.OrderByDirection](../../models/components/orderbydirection.md)     | FALSE                                                             | N/A                                                                            |
| `fields`                                                                       | [components.SessionProperties](../../models/components/sessionproperties.md)[] | FALSE                                                             | N/A                                                                            |
| `startDatetime`                                                                | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `endDatetime`                                                                  | *string*                                                                       | FALSE                                                             | N/A                                                                            |