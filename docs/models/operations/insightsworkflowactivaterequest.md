# InsightsWorkflowActivateRequest

## Example Usage

```typescript
import { InsightsWorkflowActivateRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowActivateRequest = {
  workflowId: 281730,
  insightWorkflowActivate: {
    isAcknowledged: true,
    estimate: {
      backfillCount: 100,
      backfillDuration: 1000,
      estimatedDailyCount: 10,
      estimatedDailyDuration: 3674.11,
      estimatedDailyCost: 45.25,
      estimatedBackfillCost: 4561.00,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `workflowId`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `insightWorkflowActivate`                                                                | [components.InsightWorkflowActivate](../../models/components/insightworkflowactivate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |