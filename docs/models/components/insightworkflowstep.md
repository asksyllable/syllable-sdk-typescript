# InsightWorkflowStep

## Example Usage

```typescript
import { InsightWorkflowStep } from "syllable-sdk/models/components";

let value: InsightWorkflowStep = {
  stepId: "<id>",
  insightToolId: 41905,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `stepId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `insightToolId`                                                                              | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `conditions`                                                                                 | [components.InsightToolConditionGroup](../../models/components/insighttoolconditiongroup.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `transcriptSourceStepId`                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |