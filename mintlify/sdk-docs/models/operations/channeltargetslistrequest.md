# ChannelTargetsListRequest

## Example Usage

```typescript
import { ChannelTargetsListRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsListRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `page`                                                                                     | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `searchFields`                                                                             | [components.ChannelTargetProperties](../../models/components/channeltargetproperties.md)[] | FALSE                                                                         | N/A                                                                                        |
| `searchFieldValues`                                                                        | *string*[]                                                                                 | FALSE                                                                         | N/A                                                                                        |
| `orderBy`                                                                                  | [components.ChannelTargetProperties](../../models/components/channeltargetproperties.md)   | FALSE                                                                         | N/A                                                                                        |
| `orderByDirection`                                                                         | [components.OrderByDirection](../../models/components/orderbydirection.md)                 | FALSE                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [components.ChannelTargetProperties](../../models/components/channeltargetproperties.md)[] | FALSE                                                                         | N/A                                                                                        |
| `startDatetime`                                                                            | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `endDatetime`                                                                              | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |