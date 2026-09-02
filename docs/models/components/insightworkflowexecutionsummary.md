# InsightWorkflowExecutionSummary

How many of a workflow's executions are in each status, optionally within a
created_at date range. Counts cover all matching rows, not just one page.

## Example Usage

```typescript
import { InsightWorkflowExecutionSummary } from "syllable-sdk/models/components";

let value: InsightWorkflowExecutionSummary = {
  pending: 5,
  processing: 2,
  completed: 100,
  failed: 3,
  total: 110,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `pending`                      | *number*                       | :heavy_minus_sign:             | Rows in PENDING status         | 5                              |
| `processing`                   | *number*                       | :heavy_minus_sign:             | Rows in PROCESSING status      | 2                              |
| `completed`                    | *number*                       | :heavy_minus_sign:             | Rows in COMPLETED status       | 100                            |
| `failed`                       | *number*                       | :heavy_minus_sign:             | Rows in FAILED status          | 3                              |
| `total`                        | *number*                       | :heavy_minus_sign:             | Total rows across all statuses | 110                            |