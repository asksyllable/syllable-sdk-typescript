---
title: 'LanguageGroupsListRequest'
---

## Example Usage

```typescript
import { LanguageGroupsListRequest } from "syllable-sdk/models/operations";

let value: LanguageGroupsListRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `page`                                                                                     | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `searchFields`                                                                             | [components.LanguageGroupProperties](/sdk-docs/models/components/languagegroupproperties)[] | FALSE                                                                         | N/A                                                                                        |
| `searchFieldValues`                                                                        | *string*[]                                                                                 | FALSE                                                                         | N/A                                                                                        |
| `orderBy`                                                                                  | [components.LanguageGroupProperties](/sdk-docs/models/components/languagegroupproperties)   | FALSE                                                                         | N/A                                                                                        |
| `orderByDirection`                                                                         | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)                 | FALSE                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [components.LanguageGroupProperties](/sdk-docs/models/components/languagegroupproperties)[] | FALSE                                                                         | N/A                                                                                        |
| `startDatetime`                                                                            | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |
| `endDatetime`                                                                              | *string*                                                                                   | FALSE                                                                         | N/A                                                                                        |