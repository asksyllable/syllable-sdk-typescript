---
title: 'InsightsWorkflowListRequest'
---

## Example Usage

```typescript
import { InsightsWorkflowListRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowListRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `page`                                                                                         | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `searchFields`                                                                                 | [components.InsightWorkflowProperties](/sdk-docs/models/components/insightworkflowproperties)[] | FALSE                                                                             | N/A                                                                                            |
| `searchFieldValues`                                                                            | *string*[]                                                                                     | FALSE                                                                             | N/A                                                                                            |
| `orderBy`                                                                                      | [components.InsightWorkflowProperties](/sdk-docs/models/components/insightworkflowproperties)   | FALSE                                                                             | N/A                                                                                            |
| `orderByDirection`                                                                             | [components.OrderByDirection](/sdk-docs/models/components/orderbydirection)                     | FALSE                                                                             | N/A                                                                                            |
| `fields`                                                                                       | [components.InsightWorkflowProperties](/sdk-docs/models/components/insightworkflowproperties)[] | FALSE                                                                             | N/A                                                                                            |
| `startDatetime`                                                                                | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |
| `endDatetime`                                                                                  | *string*                                                                                       | FALSE                                                                             | N/A                                                                                            |