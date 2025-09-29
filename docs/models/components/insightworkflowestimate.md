# InsightWorkflowEstimate

Response model for an insight workflow.

## Example Usage

```typescript
import { InsightWorkflowEstimate } from "syllable-sdk/models/components";

let value: InsightWorkflowEstimate = {
  backfillCount: 100,
  backfillDuration: 1000,
  estimatedDailyCount: 10,
  estimatedDailyDuration: 3674.11,
  estimatedDailyCost: 45.25,
  estimatedBackfillCost: 4561,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `backfillCount`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | Number of extant calls that will be processed by the workflow                      | 100                                                                                |
| `backfillDuration`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | Estimated duration of the calls that will be processed by the workflow             | 1000                                                                               |
| `estimatedDailyCount`                                                              | *number*                                                                           | :heavy_check_mark:                                                                 | Estimated number of calls that will be processed by the workflow daily             | 10                                                                                 |
| `estimatedDailyDuration`                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | Estimated duration of the calls that will be processed by the workflow daily       | 3674.11                                                                            |
| `estimatedDailyCost`                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Estimated cost of the calls that will be processed by the workflow daily           | 45.25                                                                              |
| `estimatedBackfillCost`                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Estimated cost of the backfill of the calls that will be processed by the workflow | 4561.00                                                                            |