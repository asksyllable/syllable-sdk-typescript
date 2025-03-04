---
title: 'InsightToolListRequest'
---

## Example Usage

```typescript
import { InsightToolListRequest } from "syllable-sdk/models/operations";

let value: InsightToolListRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `page`                                                                                 | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `limit`                                                                                | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `searchFields`                                                                         | [components.InsightToolProperties](/sdk-docs/models/components/insighttoolproperties)[] | FALSE                                                                     | N/A                                                                                    |
| `searchFieldValues`                                                                    | *string*[]                                                                             | FALSE                                                                     | N/A                                                                                    |
| `orderBy`                                                                              | [components.InsightToolProperties](/sdk-docs/models/components/insighttoolproperties)   | FALSE                                                                     | N/A                                                                                    |
| `orderByDirection`                                                                     | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)             | FALSE                                                                     | N/A                                                                                    |
| `fields`                                                                               | [components.InsightToolProperties](/sdk-docs/models/components/insighttoolproperties)[] | FALSE                                                                     | N/A                                                                                    |
| `startDatetime`                                                                        | *string*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `endDatetime`                                                                          | *string*                                                                               | FALSE                                                                     | N/A                                                                                    |