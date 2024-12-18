# AvailableTargetsRequest

## Example Usage

```typescript
import { AvailableTargetsRequest } from "syllable-sdk/models/operations";

let value: AvailableTargetsRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `page`                                                                                         | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `searchFields`                                                                                 | [components.AvailableTargetProperties](../../models/components/availabletargetproperties.md)[] | FALSE                                                                             | N/A                                                                                            |
| `searchFieldValues`                                                                            | *string*[]                                                                                     | FALSE                                                                             | N/A                                                                                            |
| `orderBy`                                                                                      | [components.AvailableTargetProperties](../../models/components/availabletargetproperties.md)   | FALSE                                                                             | N/A                                                                                            |
| `orderByDirection`                                                                             | [components.OrderByDirection](../../models/components/orderbydirection.md)                     | FALSE                                                                             | N/A                                                                                            |
| `fields`                                                                                       | [components.AvailableTargetProperties](../../models/components/availabletargetproperties.md)[] | FALSE                                                                             | N/A                                                                                            |
| `startDatetime`                                                                                | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `endDatetime`                                                                                  | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |