---
title: 'InsightsWorkflowUpdateRequest'
---

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 458212,
  insightWorkflowInput: {
    name: "<value>",
    description:
      "accentuate delightfully with close jeopardise probable than boo yum",
    insightToolIds: [
      946808,
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