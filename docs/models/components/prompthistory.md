# PromptHistory

Record of a change to a prompt. Values reflect post-change state.

## Example Usage

```typescript
import { PromptHistory } from "syllable-sdk/models/components";

let value: PromptHistory = {
  timestamp: new Date("2025-06-12T11:00:17.620Z"),
  promptId: "<id>",
  promptText: "<value>",
  promptName: "<value>",
  userEmail: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the change                                                                       |
| `promptId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the prompt                                                                              |
| `promptText`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Text of the prompt                                                                            |
| `promptDescription`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the prompt                                                                     |
| `promptName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the prompt                                                                            |
| `llmConfig`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | String representation of LLM config for the prompt                                            |
| `comments`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Comments describing the change                                                                |
| `userEmail`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user who made the change                                                 |