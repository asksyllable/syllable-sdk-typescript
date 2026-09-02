# InsightsWorkflowExecutionsSummaryRequest

## Example Usage

```typescript
import { InsightsWorkflowExecutionsSummaryRequest } from "syllable-sdk/models/operations";

let value: InsightsWorkflowExecutionsSummaryRequest = {
  workflowId: 279336,
  startDatetime: "2026-08-27T13:57:00.123456+00:00",
  endDatetime: "2026-08-28T00:00:00Z",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workflowId`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `startDatetime`                                              | *string*                                                     | :heavy_minus_sign:                                           | ISO 8601 start datetime (inclusive) for created_at filtering | 2026-08-27T13:57:00.123456+00:00                             |
| `endDatetime`                                                | *string*                                                     | :heavy_minus_sign:                                           | ISO 8601 end datetime (exclusive) for created_at filtering   | 2026-08-28T00:00:00Z                                         |