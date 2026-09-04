# WorkflowSessionRow

One session under a workflow: its execution status plus the insight results,
grouped by tool name and then by ``insight_key`` in the ``results`` dict.

A session that is still pending, processing, or failed has an empty
``results`` dict; ``status`` and ``error_message`` say why.

## Example Usage

```typescript
import { WorkflowSessionRow } from "syllable-sdk/models/components";

let value: WorkflowSessionRow = {
  sessionId: 15702,
  analyzedAt: new Date("2026-09-04T00:00:00Z"),
  queuedAt: new Date("2026-09-04T00:00:00Z"),
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
        "Caller returned a call about lab results.",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                                                                       | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | Session ID                                                                                                                                        | 15702                                                                                                                                             |
| `analyzedAt`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                     | :heavy_minus_sign:                                                                                                                                | When the workflow execution started processing this session; null while the row is still PENDING                                                  | 2026-09-04T00:00:00Z                                                                                                                              |
| `queuedAt`                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                     | :heavy_check_mark:                                                                                                                                | When the session was queued for this workflow                                                                                                     | 2026-09-04T00:00:00Z                                                                                                                              |
| `status`                                                                                                                                          | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | Execution status of this session under the workflow                                                                                               | **Example 1:** PENDING<br/>**Example 2:** PROCESSING<br/>**Example 3:** COMPLETED<br/>**Example 4:** FAILED                                       |
| `errorMessage`                                                                                                                                    | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Error message from the last processing attempt, if any                                                                                            | LLM timeout                                                                                                                                       |
| `results`                                                                                                                                         | Record<string, Record<string, *any*[]>>                                                                                                           | :heavy_minus_sign:                                                                                                                                | Results per tool, keyed by tool name then insight_key. Each insight_key holds a list of values: a single value comes back as a one-item list.     | {<br/>"intent-v2": {<br/>"intents": [<br/>"Pharmacy/Refill",<br/>"Billing"<br/>]<br/>},<br/>"summarizer-v1": {<br/>"summary": [<br/>"Caller returned a call about lab results."<br/>]<br/>}<br/>} |