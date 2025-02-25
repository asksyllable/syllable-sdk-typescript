# InsightsWorkflowUpdateRequest

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 706872,
  insightWorkflowInput: {
    name: "<value>",
    description:
      "joshingly whose buttery once worth yippee gadzooks commemorate",
    insightToolIds: [
      805463,
    ],
    conditions: {},
    status: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowId`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `insightWorkflowInput`                                                             | [components.InsightWorkflowInput](../../models/components/insightworkflowinput.md) | :heavy_check_mark:                                                                 | N/A                                                                                |