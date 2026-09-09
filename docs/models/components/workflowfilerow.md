# WorkflowFileRow

One uploaded file under a workflow: its execution status plus the insight
results, grouped by tool name and then by ``insight_key`` in the ``results``
dict.

A file that is still pending, processing, or failed has an empty ``results``
dict; ``status`` and ``error_message`` say why.

## Example Usage

```typescript
import { WorkflowFileRow } from "syllable-sdk/models/components";

let value: WorkflowFileRow = {
  uploadFileId: 88,
  analyzedAt: new Date("2026-09-09T00:00:00Z"),
  queuedAt: new Date("2026-09-09T00:00:00Z"),
  status: "PENDING",
  errorMessage: "LLM timeout",
  results: {
    "intent-v2": {
      "intents": [
        "Pharmacy/Refill",
        "Billing",
      ],
    },
    "summarizer-v1": {
      "summary": [
        "Caller left a voicemail about a prescription refill.",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `uploadFileId`                                                                                                                                               | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Upload file ID                                                                                                                                               | 88                                                                                                                                                           |
| `analyzedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_minus_sign:                                                                                                                                           | When the workflow execution started processing this file; null while the row is still PENDING                                                                | 2026-09-09T00:00:00Z                                                                                                                                         |
| `queuedAt`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | When the file was queued for this workflow                                                                                                                   | 2026-09-09T00:00:00Z                                                                                                                                         |
| `status`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Execution status of this file under the workflow                                                                                                             | **Example 1:** PENDING<br/>**Example 2:** PROCESSING<br/>**Example 3:** COMPLETED<br/>**Example 4:** FAILED                                                  |
| `errorMessage`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Error message from the last processing attempt, if any                                                                                                       | LLM timeout                                                                                                                                                  |
| `results`                                                                                                                                                    | Record<string, Record<string, *any*[]>>                                                                                                                      | :heavy_minus_sign:                                                                                                                                           | Results per tool, keyed by tool name then insight_key. Each insight_key holds a list of values: a single value comes back as a one-item list.                | {<br/>"intent-v2": {<br/>"intents": [<br/>"Pharmacy/Refill",<br/>"Billing"<br/>]<br/>},<br/>"summarizer-v1": {<br/>"summary": [<br/>"Caller left a voicemail about a prescription refill."<br/>]<br/>}<br/>} |