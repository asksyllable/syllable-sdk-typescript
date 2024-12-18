# DirectoryMemberListRequest

## Example Usage

```typescript
import { DirectoryMemberListRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberListRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `page`                                                                                         | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `searchFields`                                                                                 | [components.DirectoryMemberProperties](../../models/components/directorymemberproperties.md)[] | FALSE                                                                             | N/A                                                                                            |
| `searchFieldValues`                                                                            | *string*[]                                                                                     | FALSE                                                                             | N/A                                                                                            |
| `orderBy`                                                                                      | [components.DirectoryMemberProperties](../../models/components/directorymemberproperties.md)   | FALSE                                                                             | N/A                                                                                            |
| `orderByDirection`                                                                             | [components.OrderByDirection](../../models/components/orderbydirection.md)                     | FALSE                                                                             | N/A                                                                                            |
| `fields`                                                                                       | [components.DirectoryMemberProperties](../../models/components/directorymemberproperties.md)[] | FALSE                                                                             | N/A                                                                                            |
| `startDatetime`                                                                                | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `endDatetime`                                                                                  | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |