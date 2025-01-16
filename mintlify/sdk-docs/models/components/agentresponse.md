---
title: 'AgentResponse'
---

When a user interacts with the Syllable system, they do so by communicating with an agent.
An agent is linked to a prompt, a custom message, and one or more channel targets to define its
behavior and capabilities.

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
    "es-US",
  ],
  variables: {
    "key": "<value>",
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
| `name`                                                                                                            | *string*                                                                                                          | TRUE                                                                                                | The agent name                                                                                                    |                                                                                                                   |
| `description`                                                                                                     | *string*                                                                                                          | FALSE                                                                                                | The agent description                                                                                             |                                                                                                                   |
| `label`                                                                                                           | *string*                                                                                                          | FALSE                                                                                                | The agent label                                                                                                   |                                                                                                                   |
| `type`                                                                                                            | *string*                                                                                                          | TRUE                                                                                                | The agent type. Can be an arbitrary string                                                                        | ca_v1                                                                                                             |
| `promptId`                                                                                                        | *number*                                                                                                          | TRUE                                                                                                | ID of the prompt associated with the agent                                                                        |                                                                                                                   |
| `customMessageId`                                                                                                 | *number*                                                                                                          | TRUE                                                                                                | ID of the custom message that should be delivered at the beginning of a conversation with the agent               |                                                                                                                   |
| `timezone`                                                                                                        | *string*                                                                                                          | TRUE                                                                                                | The time zone in which the agent operates                                                                         | America/New_York                                                                                                  |
| `promptToolDefaults`                                                                                              | [components.AgentToolDefaults](/sdk-docs/models/components/agenttooldefaults)[]                                    | FALSE                                                                                                | The prompt tool defaults                                                                                          |                                                                                                                   |
| `languages`                                                                                                       | *string*[]                                                                                                        | FALSE                                                                                                | BCP 47 codes of languages the agent supports                                                                      | [<br/>"en-US",<br/>"es-US"<br/>]                                                                                  |
| `variables`                                                                                                       | Record                                                                                          | TRUE                                                                                                | Custom context variables for the conversation session. Keys should be prefixed with "vars.".                      |                                                                                                                   |
| `toolHeaders`                                                                                                     | Record                                                                                          | TRUE                                                                                                | Optional headers to include in tool calls for agent.                                                              |                                                                                                                   |
| `id`                                                                                                              | *number*                                                                                                          | TRUE                                                                                                | The agent ID                                                                                                      |                                                                                                                   |
| `updatedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | TRUE                                                                                                | Timestamp of most recent update                                                                                   |                                                                                                                   |
| `lastUpdatedBy`                                                                                                   | *string*                                                                                                          | TRUE                                                                                                | Email of the user who last updated the agent                                                                      |                                                                                                                   |
| `prompt`                                                                                                          | [components.PromptResponse](/sdk-docs/models/components/promptresponse)                                            | FALSE                                                                                                | The prompt associated with the agent.                                                                             |                                                                                                                   |
| `customMessage`                                                                                                   | [components.CustomMessageResponse](/sdk-docs/models/components/custommessageresponse)                              | FALSE                                                                                                | The custom message associated with the agent. Will be delivered as a greeting at the beginning of a conversation. |                                                                                                                   |
| `channelTargets`                                                                                                  | [components.ChannelTargetResponse](/sdk-docs/models/components/channeltargetresponse)[]                            | FALSE                                                                                                | Channel targets associated with the agent                                                                         |                                                                                                                   |