# EventsListRequest

## Example Usage

```typescript
import { EventsListRequest } from "syllable-sdk/models/operations";

let value: EventsListRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `searchFields`                                                             | [components.EventProperties](../../models/components/eventproperties.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `searchFieldValues`                                                        | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.EventProperties](../../models/components/eventproperties.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [components.OrderByDirection](../../models/components/orderbydirection.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `fields`                                                                   | [components.EventProperties](../../models/components/eventproperties.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `startDatetime`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `endDatetime`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |