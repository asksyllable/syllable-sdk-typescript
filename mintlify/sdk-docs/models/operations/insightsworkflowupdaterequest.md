---
title: 'InsightsWorkflowUpdateRequest'
---

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 320326,
  insightWorkflowInput: {
    name: "<value>",
    description:
      "yak tune judgementally young vary down foolishly jaggedly orderly sans",
    insightToolIds: [
      287153,
    ],
    conditions: {},
    status: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowId`                                                                       | *number*                                                                           | TRUE                                                                 | N/A                                                                                |
| `insightWorkflowInput`                                                             | [components.InsightWorkflowInput](/sdk-docs/models/components/insightworkflowinput) | TRUE                                                                 | N/A                                                                                |