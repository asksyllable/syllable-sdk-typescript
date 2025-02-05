---
title: 'DataSourcesListRequest'
---

## Example Usage

```typescript
import { DataSourcesListRequest } from "syllable-sdk/models/operations";

let value: DataSourcesListRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `page`                                                                               | *number*                                                                             | FALSE                                                                   | N/A                                                                                  |
| `limit`                                                                              | *number*                                                                             | FALSE                                                                   | N/A                                                                                  |
| `searchFields`                                                                       | [components.DataSourceProperties](/sdk-docs/models/components/datasourceproperties)[] | FALSE                                                                   | N/A                                                                                  |
| `searchFieldValues`                                                                  | *string*[]                                                                           | FALSE                                                                   | N/A                                                                                  |
| `orderBy`                                                                            | [components.DataSourceProperties](/sdk-docs/models/components/datasourceproperties)   | FALSE                                                                   | N/A                                                                                  |
| `orderByDirection`                                                                   | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)           | FALSE                                                                   | N/A                                                                                  |
| `fields`                                                                             | [components.DataSourceProperties](/sdk-docs/models/components/datasourceproperties)[] | FALSE                                                                   | N/A                                                                                  |
| `startDatetime`                                                                      | *string*                                                                             | FALSE                                                                   | N/A                                                                                  |
| `endDatetime`                                                                        | *string*                                                                             | FALSE                                                                   | N/A                                                                                  |