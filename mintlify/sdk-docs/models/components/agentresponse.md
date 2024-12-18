# AgentResponse

## Example Usage

```typescript
import { AgentResponse } from "syllable-sdk/models/components";

let value: AgentResponse = {
  name: "<value>",
  type: "<value>",
  promptId: 963663,
  timezone: "America/Panama",
  promptToolDefaults: [
    {
      toolName: "<value>",
      defaultValues: [
        {
          fieldName: "<value>",
          defaultValue: "<value>",
        },
      ],
    },
  ],
  languages: [
    "<value>",
  ],
  variables: {
    "key": "<value>",
  },
  toolHeaders: {
    "key": "<value>",
  },
  id: 791725,
  updatedAt: new Date("2023-08-03T16:03:07.089Z"),
  lastUpdatedBy: "<value>",
  prompt: {
    name: "<value>",
    type: "<value>",
    llmConfig: {
      provider: "openai",
      model: "gpt-4o",
      version: "2024-05-13",
      apiVersion: "2024-06-01",
    },
    id: 925597,
    lastUpdated: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | The Agent name                                                                                |
| `description`                                                                                 | *string*                                                                                      | FALSE                                                                            | The Agent description                                                                         |
| `label`                                                                                       | *string*                                                                                      | FALSE                                                                            | The Agent label                                                                               |
| `type`                                                                                        | *string*                                                                                      | TRUE                                                                            | The Agent type                                                                                |
| `promptId`                                                                                    | *number*                                                                                      | TRUE                                                                            | The Agent's prompt id                                                                         |
| `customMessageId`                                                                             | *number*                                                                                      | FALSE                                                                            | The Agent's custom message id                                                                 |
| `timezone`                                                                                    | *string*                                                                                      | TRUE                                                                            | The time zone the bot operates in                                                             |
| `promptToolDefaults`                                                                          | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                | TRUE                                                                            | N/A                                                                                           |
| `languages`                                                                                   | *string*[]                                                                                    | TRUE                                                                            | N/A                                                                                           |
| `variables`                                                                                   | Record                                                                     | TRUE                                                                            | N/A                                                                                           |
| `toolHeaders`                                                                                 | Record                                                                     | TRUE                                                                            | Optional headers to include in tool calls.                                                    |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | The Agent ID                                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | Timestamp of most recent update                                                               |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | Email of the user who last updated the agent                                                  |
| `channelTargets`                                                                              | [components.Target](../../models/components/target.md)[]                                      | FALSE                                                                            | Channel targets associated with the agent                                                     |
| `prompt`                                                                                      | [components.Prompt](../../models/components/prompt.md)                                        | FALSE                                                                            | The prompt associated with the agent                                                          |
| `customMessage`                                                                               | [components.CustomMessage](../../models/components/custommessage.md)                          | FALSE                                                                            | The custom message associated with the agent                                                  |