# PromptHistory

Record of a change to a prompt. Values reflect post-change state.

## Example Usage

```typescript
import { PromptHistory } from "syllable-sdk/models/components";

let value: PromptHistory = {
  timestamp: new Date("2024-01-01T12:00:00Z"),
  promptId: "1",
  promptText:
    "You are a weather agent. Answer the user's questions about weather and nothing else.",
  promptDescription: "Prompt for a weather agent.",
  promptName: "Weather Agent Prompt",
  comments:
    "Updated prompt text to include requirement to not answer questions that aren't about weather.",
  userEmail: "user@email.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the change                                                                       | 2024-01-01T12:00:00Z                                                                          |
| `promptId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the prompt                                                                              | 1                                                                                             |
| `promptText`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Text of the prompt                                                                            | You are a weather agent. Answer the user's questions about weather and nothing else.          |
| `promptDescription`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the prompt                                                                     | Prompt for a weather agent.                                                                   |
| `promptName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the prompt                                                                            | Weather Agent Prompt                                                                          |
| `llmConfig`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | String representation of LLM config for the prompt                                            |                                                                                               |
| `comments`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Comments describing the change                                                                | Updated prompt text to include requirement to not answer questions that aren't about weather. |
| `userEmail`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user who made the change                                                 | user@email.com                                                                                |