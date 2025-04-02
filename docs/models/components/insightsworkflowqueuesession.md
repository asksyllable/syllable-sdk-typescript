# InsightsWorkflowQueueSession

Session identifier for workflow queue.

## Example Usage

```typescript
import { InsightsWorkflowQueueSession } from "syllable-sdk/models/components";

let value: InsightsWorkflowQueueSession = {
  workflowName: "summary-workflow",
  sessionIdList: [
    [12334, 23445, 34556],
  ],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `workflowName`              | *string*                    | :heavy_check_mark:          | Unique name for workflow    | summary-workflow            |
| `sessionIdList`             | *number*[]                  | :heavy_check_mark:          | List of session identifiers | [12334,23445,34556]         |