# InsightWorkflowActivate

Request model to activate an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowActivate } from "syllable-sdk/models/components";

let value: InsightWorkflowActivate = {
  isAcknowledged: true,
  estimate: {
    backfillCount: 100,
    backfillDuration: 1000,
    estimatedDailyCount: 10,
    estimatedDailyDuration: 3674.11,
    estimatedDailyCost: 45.25,
    estimatedBackfillCost: 4561,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `isAcknowledged`                                                                         | *boolean*                                                                                | :heavy_check_mark:                                                                       | Flag to indicate if the user has acknowledged the estimate                               | true                                                                                     |
| `estimate`                                                                               | [components.InsightWorkflowEstimate](../../models/components/insightworkflowestimate.md) | :heavy_check_mark:                                                                       | Response model for an insight workflow.                                                  |                                                                                          |