# AgentResponse

## Example Usage

```typescript
import { AgentResponse } from "syllable-sdk/models/components";

let value: AgentResponse = {
  name: "<value>",
  type: "ca_v1",
  promptId: 602763,
  customMessageId: 544883,
  timezone: "America/New_York",
  languages: [
    "en-US",
    "es-MX",
  ],
  variables: {
    "vars.hospital": "Weill Cornell Medical Center",
  },
  toolHeaders: {
    "key": "<value>",
  },
  id: 645894,
  updatedAt: new Date("2024-04-24T14:17:38.418Z"),
  lastUpdatedBy: "<value>",
  prompt: {
    name: "<value>",
    type: "<value>",
    llmConfig: {
      model: "gpt-4o",
      version: "2024-05-13",
      apiVersion: "2024-06-01",
    },
    id: 891773,
    lastUpdated: "<value>",
    lastUpdatedBy: "user@email.com",
  },
  customMessage: {
    name: "<value>",
    text: "<value>",
    rules: [
      {
        description:
          "busily jive hawk gee basic minus hence for know gleefully",
        timeRangeStart: "09:00",
        timeRangeEnd: "17:00",
        date: "2025-01-01",
        daysOfWeek: [
          "mo",
          "tu",
          "we",
          "th",
          "fr",
        ],
        invert: false,
        text: "Sorry, we're closed today",
      },
    ],
    id: 118727,
    updatedAt: new Date("2023-12-15T12:13:46.383Z"),
    lastUpdatedBy: "user@email.com",
  },
  channelTargets: [],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The agent name                                                                                                    |                                                                                                                   |
| `description`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The agent description                                                                                             |                                                                                                                   |
| `label`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The agent label                                                                                                   |                                                                                                                   |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The agent type. Can be an arbitrary string                                                                        | ca_v1                                                                                                             |
| `promptId`                                                                                                        | *number*                                                                                                          | :heavy_check_mark:                                                                                                | ID of the prompt associated with the agent                                                                        |                                                                                                                   |
| `customMessageId`                                                                                                 | *number*                                                                                                          | :heavy_check_mark:                                                                                                | ID of the custom message that should be delivered at the beginning of a conversation with the agent               |                                                                                                                   |
| `timezone`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The time zone in which the agent operates                                                                         | America/New_York                                                                                                  |
| `promptToolDefaults`                                                                                              | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                                    | :heavy_minus_sign:                                                                                                | The prompt tool defaults                                                                                          |                                                                                                                   |
| `languages`                                                                                                       | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | BCP 47 codes of languages the agent supports                                                                      | [<br/>"en-US",<br/>"es-MX"<br/>]                                                                                  |
| `variables`                                                                                                       | Record<string, *string*>                                                                                          | :heavy_check_mark:                                                                                                | Custom context variables for the conversation session. Should be prefixed with "vars.".                           | {<br/>"vars.hospital": "Weill Cornell Medical Center"<br/>}                                                       |
| `toolHeaders`                                                                                                     | Record<string, *string*>                                                                                          | :heavy_check_mark:                                                                                                | Optional headers to include in tool calls for agent.                                                              |                                                                                                                   |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The agent ID                                                                                                      |                                                                                                                   |
| `updatedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | Timestamp of most recent update                                                                                   |                                                                                                                   |
| `lastUpdatedBy`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Email of the user who last updated the agent                                                                      |                                                                                                                   |
| `prompt`                                                                                                          | [components.PromptResponse](../../models/components/promptresponse.md)                                            | :heavy_minus_sign:                                                                                                | The prompt associated with the agent.                                                                             |                                                                                                                   |
| `customMessage`                                                                                                   | [components.CustomMessageResponse](../../models/components/custommessageresponse.md)                              | :heavy_minus_sign:                                                                                                | The custom message associated with the agent. Will be delivered as a greeting at the beginning of a conversation. |                                                                                                                   |
| `channelTargets`                                                                                                  | [components.ChannelTargetResponse](../../models/components/channeltargetresponse.md)[]                            | :heavy_minus_sign:                                                                                                | Channel targets associated with the agent                                                                         |                                                                                                                   |