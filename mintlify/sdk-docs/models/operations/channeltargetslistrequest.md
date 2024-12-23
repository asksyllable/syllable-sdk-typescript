---
title: 'ChannelTargetsListRequest'
---

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
| `searchFields`                                                                             | [components.ChannelTargetProperties](sdk-docs/models/components/channeltargetproperties)[] | FALSE                                                                         | N/A                                                                                        |
| `searchFieldValues`                                                                        | *string*[]                                                                                 | FALSE                                                                         | N/A                                                                                        |
| `orderBy`                                                                                  | [components.ChannelTargetProperties](sdk-docs/models/components/channeltargetproperties)   | FALSE                                                                         | N/A                                                                                        |
| `orderByDirection`                                                                         | [components.OrderByDirection](sdk-docs/models/components/orderbydirection)                 | FALSE                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [components.ChannelTargetProperties](sdk-docs/models/components/channeltargetproperties)[] | FALSE                                                                         | N/A                                                                                        |
| `startDatetime`                                                                            | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `endDatetime`                                                                              | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |