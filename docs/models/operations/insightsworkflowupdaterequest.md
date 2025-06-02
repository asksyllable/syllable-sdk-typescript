# InsightsWorkflowUpdateRequest

## Example Usage

```typescript
import { InsightsWorkflowUpdateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowUpdateRequest = {
  workflowId: 292147,
  insightWorkflowInput: {
    name: "summary-workflow",
    source: "agent",
    description: "Default workflow - generates a summary of the call",
    insightToolIds: [
      1,
    ],
    conditions: {
      minDuration: 120,
      maxDuration: 600,
      sampleRate: 2,
      agentList: [
        866324,
        826325,
      ],
      promptList: [
        "123324",
      ],
      folderList: [
        16754,
        67535,
      ],
    },
    startDatetime: new Date("2025-06-01T00:00:00Z"),
    endDatetime: new Date("2025-06-02T00:00:00Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowId`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `insightWorkflowInput`                                                             | [components.InsightWorkflowInput](../../models/components/insightworkflowinput.md) | :heavy_check_mark:                                                                 | N/A                                                                                |