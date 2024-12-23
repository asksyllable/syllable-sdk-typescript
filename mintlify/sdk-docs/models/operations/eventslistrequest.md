---
title: 'EventsListRequest'
---

## Example Usage

```typescript
import { EventsListRequest } from "syllable-sdk/models/operations";

let value: EventsListRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `page`                                                                     | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `searchFields`                                                             | [components.EventProperties](/sdk-docs/models/components/eventproperties)[] | FALSE                                                         | N/A                                                                        |
| `searchFieldValues`                                                        | *string*[]                                                                 | FALSE                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.EventProperties](/sdk-docs/models/components/eventproperties)   | FALSE                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection) | FALSE                                                         | N/A                                                                        |
| `fields`                                                                   | [components.EventProperties](/sdk-docs/models/components/eventproperties)[] | FALSE                                                         | N/A                                                                        |
| `startDatetime`                                                            | *string*                                                                   | FALSE                                                         | N/A                                                                        |
| `endDatetime`                                                              | *string*                                                                   | FALSE                                                         | N/A                                                                        |