# AgentResponse

## Example Usage

```typescript
import { AgentResponse } from "syllable-sdk/models/components";

let value: AgentResponse = {
  name: "<value>",
  type: "<value>",
  promptId: 891773,
  timezone: "Pacific/Nauru",
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
  id: 383441,
  updatedAt: new Date("2024-05-17T17:32:07.447Z"),
  lastUpdatedBy: "<value>",
  prompt: {
    name: "<value>",
    type: "<value>",
    llmConfig: {
      model: "gpt-4o",
      version: "2024-05-13",
      apiVersion: "2024-06-01",
    },
    id: 528895,
    lastUpdated: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The Agent name                                                                                |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Agent description                                                                         |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Agent label                                                                               |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The Agent type                                                                                |
| `promptId`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The Agent's prompt id                                                                         |
| `customMessageId`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | The Agent's custom message id                                                                 |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The time zone the bot operates in                                                             |
| `promptToolDefaults`                                                                          | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `languages`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `variables`                                                                                   | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolHeaders`                                                                                 | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Optional headers to include in tool calls.                                                    |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The Agent ID                                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of most recent update                                                               |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Email of the user who last updated the agent                                                  |
| `channelTargets`                                                                              | [components.Target](../../models/components/target.md)[]                                      | :heavy_minus_sign:                                                                            | Channel targets associated with the agent                                                     |
| `prompt`                                                                                      | [components.Prompt](../../models/components/prompt.md)                                        | :heavy_minus_sign:                                                                            | The prompt associated with the agent                                                          |
| `customMessage`                                                                               | [components.CustomMessage](../../models/components/custommessage.md)                          | :heavy_minus_sign:                                                                            | The custom message associated with the agent                                                  |