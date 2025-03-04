---
title: 'InsightsWorkflowUpdateRequest'
---

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 102446,
  insightWorkflowInput: {
    name: "<value>",
    description: "at bah poorly so mmm onto",
    insightToolIds: [
      927977,
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