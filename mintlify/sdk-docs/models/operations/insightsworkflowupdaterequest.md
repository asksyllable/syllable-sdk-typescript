---
title: 'InsightsWorkflowUpdateRequest'
---

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 244569,
  insightWorkflowInput: {
    name: "<value>",
    description: "fumigate duster laughter pastel solidly upwardly",
    insightToolIds: [
      638609,
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