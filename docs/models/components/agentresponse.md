# AgentResponse

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
  tools: [
    {
      name: "Weather Fetcher",
      definition: {
        tool: {
          function: {
            name: "weather_fetcher",
            description: "Fetches weather data",
            parameters: {},
          },
        },
        endpoint: {
          url: "https://api.example.com",
          method: "get",
          argumentLocation: "body",
        },
        defaults: {
          "key": {
            transform: {
              action: "default",
              when: {
                key: "key",
                value: "value",
              },
            },
          },
        },
      },
      serviceId: 566602,
      id: 265389,
      promptsInfo: [
        {
          id: 1,
          name: "Test Prompt",
        },
      ],
      agentsInfo: [
        {
          id: 1,
          name: "Test Agent",
        },
      ],
      lastUpdated: new Date("2024-07-27T11:31:00.474Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  languageGroup: {
    name: "Call Center 1 Languages",
    description: "Languages spoken by operators at Call Center 1",
    languageConfigs: [
      {
        languageCode: "yue-HK",
        voiceProvider: "ElevenLabs",
        voiceDisplayName: "Sienna",
        dtmfCode: 1,
      },
    ],
    skipCurrentLanguageInMessage: false,
    id: 1,
    editComments: "Added Spanish support.",
    agentsInfo: [
      {
        id: 1,
        name: "Test Agent",
      },
    ],
    lastUpdatedBy: "user@mail.com",
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The agent name                                                                                                                                                        |                                                                                                                                                                       |
| `description`                                                                                                                                                         | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The agent description                                                                                                                                                 |                                                                                                                                                                       |
| `label`                                                                                                                                                               | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | The agent label                                                                                                                                                       |                                                                                                                                                                       |
| `type`                                                                                                                                                                | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The agent type. Can be an arbitrary string                                                                                                                            | ca_v1                                                                                                                                                                 |
| `promptId`                                                                                                                                                            | *number*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | ID of the prompt associated with the agent                                                                                                                            |                                                                                                                                                                       |
| `customMessageId`                                                                                                                                                     | *number*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | ID of the custom message that should be delivered at the beginning of a conversation with the agent                                                                   |                                                                                                                                                                       |
| `languageGroupId`                                                                                                                                                     | *number*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | ID of the language group associated with the agent                                                                                                                    |                                                                                                                                                                       |
| `timezone`                                                                                                                                                            | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The time zone in which the agent operates                                                                                                                             | America/New_York                                                                                                                                                      |
| `promptToolDefaults`                                                                                                                                                  | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                                                    | User-configured parameter values for the agent's tools                                                                                                                |                                                                                                                                                                       |
| ~~`languages`~~                                                                                                                                                       | *string*[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>BCP 47 codes of languages the agent supports | [<br/>"en-US",<br/>"es-US"<br/>]                                                                                                                                      |
| `variables`                                                                                                                                                           | Record<string, *string*>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Custom context variables for the conversation session. Keys should be prefixed with "vars.".                                                                          |                                                                                                                                                                       |
| `toolHeaders`                                                                                                                                                         | Record<string, *string*>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Optional headers to include in tool calls for agent.                                                                                                                  |                                                                                                                                                                       |
| `agentInitiated`                                                                                                                                                      | *boolean*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                    | Whether the agent initiates conversation with a user after the custom_message is delivered                                                                            |                                                                                                                                                                       |
| `id`                                                                                                                                                                  | *number*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The agent ID                                                                                                                                                          |                                                                                                                                                                       |
| `updatedAt`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                         | :heavy_check_mark:                                                                                                                                                    | Timestamp of most recent update                                                                                                                                       |                                                                                                                                                                       |
| `lastUpdatedBy`                                                                                                                                                       | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Email of the user who last updated the agent                                                                                                                          |                                                                                                                                                                       |
| `prompt`                                                                                                                                                              | [components.PromptResponse](../../models/components/promptresponse.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                    | The prompt associated with the agent.                                                                                                                                 |                                                                                                                                                                       |
| `customMessage`                                                                                                                                                       | [components.CustomMessageResponse](../../models/components/custommessageresponse.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                    | The custom message associated with the agent. Will be delivered as a greeting at the beginning of a conversation.                                                     |                                                                                                                                                                       |
| `channelTargets`                                                                                                                                                      | [components.ChannelTargetResponse](../../models/components/channeltargetresponse.md)[]                                                                                | :heavy_minus_sign:                                                                                                                                                    | Channel targets associated with the agent                                                                                                                             |                                                                                                                                                                       |
| `tools`                                                                                                                                                               | [components.ToolResponse](../../models/components/toolresponse.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                                    | Tools associated with the agent                                                                                                                                       |                                                                                                                                                                       |
| `languageGroup`                                                                                                                                                       | [components.LanguageGroupResponse](../../models/components/languagegroupresponse.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                    | The language group associated with the agent                                                                                                                          |                                                                                                                                                                       |