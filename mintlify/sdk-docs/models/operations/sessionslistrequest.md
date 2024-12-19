---
title: 'SessionsListRequest'
---

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
| `searchFields`                                                                 | [components.SessionProperties](/sdk-docs/models/components/sessionproperties)[] | FALSE                                                             | N/A                                                                            |
| `searchFieldValues`                                                            | *string*[]                                                                     | FALSE                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.SessionProperties](/sdk-docs/models/components/sessionproperties)   | FALSE                                                             | N/A                                                                            |
| `orderByDirection`                                                             | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)     | FALSE                                                             | N/A                                                                            |
| `fields`                                                                       | [components.SessionProperties](/sdk-docs/models/components/sessionproperties)[] | FALSE                                                             | N/A                                                                            |
| `startDatetime`                                                                | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `endDatetime`                                                                  | *string*                                                                       | FALSE                                                             | N/A                                                                            |