# PromptHistory

Record of a specific version of a prompt.

## Example Usage

```typescript
import { PromptHistory } from "syllable-sdk/models/components";

let value: PromptHistory = {
  timestamp: new Date("2024-01-01T12:00:00Z"),
  promptId: "1",
  versionNumber: 1,
  promptText:
    "You are a weather agent. Answer the user's questions about weather and nothing else.",
  promptDescription: "Prompt for a weather agent.",
  promptName: "Weather Agent Prompt",
  llmConfig: {
    version: "2024-05-13",
    apiVersion: "2024-06-01",
    temperature: 1,
    seed: 123,
  },
  comments:
    "Updated prompt text to include requirement to not answer questions that aren't about weather.",
  userEmail: "user@email.com",
  linkedTools: [
    {
      toolId: 1,
      currentToolName: "hangup",
      outOfDate: false,
      deleted: false,
    },
  ],
  sessionEndTool: {
    toolId: 1,
    currentToolName: "hangup",
    outOfDate: false,
    deleted: false,
  },
  isPreEnhancements: true,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | Timestamp of the change resulting in this version                                                   | 2024-01-01T12:00:00Z                                                                                |
| `promptId`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | ID of the prompt                                                                                    | 1                                                                                                   |
| `versionNumber`                                                                                     | *number*                                                                                            | :heavy_check_mark:                                                                                  | Version number of this version. Starts at 1 when prompt is created, and incremented on each change. | 1                                                                                                   |
| `promptText`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | Text of the prompt at this version                                                                  | You are a weather agent. Answer the user's questions about weather and nothing else.                |
| `promptDescription`                                                                                 | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Description of the prompt at this version                                                           | Prompt for a weather agent.                                                                         |
| `promptName`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | Name of the prompt at this version                                                                  | Weather Agent Prompt                                                                                |
| `llmConfig`                                                                                         | [components.PromptLlmConfig](../../models/components/promptllmconfig.md)                            | :heavy_minus_sign:                                                                                  | String representation of LLM config for the prompt at this version                                  |                                                                                                     |
| `comments`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Comments describing the change that resulted in this version                                        | Updated prompt text to include requirement to not answer questions that aren't about weather.       |
| `userEmail`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | Email address of the user who made the change that resulted in this version                         | user@email.com                                                                                      |
| `linkedTools`                                                                                       | [components.PromptHistoryLinkedTool](../../models/components/prompthistorylinkedtool.md)[]          | :heavy_minus_sign:                                                                                  | Tools that were linked to this version of the prompt                                                |                                                                                                     |
| `sessionEndTool`                                                                                    | [components.PromptHistoryLinkedTool](../../models/components/prompthistorylinkedtool.md)            | :heavy_minus_sign:                                                                                  | Session end tool that was configured on this version of the prompt, if any                          |                                                                                                     |
| `isPreEnhancements`                                                                                 | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether this version of the prompt was created before history of tool-prompt linking was tracked    | true                                                                                                |