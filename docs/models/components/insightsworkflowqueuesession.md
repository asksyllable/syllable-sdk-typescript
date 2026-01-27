# InsightsWorkflowQueueSession

Session identifier for workflow queue.

## Example Usage

```typescript
import { InsightsWorkflowQueueSession } from "syllable-sdk/models/components";

let value: InsightsWorkflowQueueSession = {
  workflowName: "summary-workflow",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workflowName`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | Unique name for workflow                                                     | summary-workflow                                                             |
| `sessionIdList`                                                              | *number*[]                                                                   | :heavy_minus_sign:                                                           | List of session identifiers                                                  |                                                                              |
| `fileIdList`                                                                 | *number*[]                                                                   | :heavy_minus_sign:                                                           | List of file IDs to be processed. This is only applicable for upload folders |                                                                              |