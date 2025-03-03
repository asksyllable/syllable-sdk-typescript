# ChannelTargetResponse

A channel target links a channel to an agent, allowing users to communicate with the agent
through that channel.

## Example Usage

```typescript
import { ChannelTargetResponse } from "syllable-sdk/models/components";

let value: ChannelTargetResponse = {
  agentId: 881104,
  channelId: 581273,
  target: "<value>",
  targetMode: "email",
  id: 692532,
  channelName: "<value>",
  updatedAt: new Date("2025-03-05T21:05:18.875Z"),
  lastUpdatedBy: "<value>",
  agent: {
    name: "<value>",
    type: "ca_v1",
    promptId: 501324,
    customMessageId: 956084,
    timezone: "America/Chicago",
    variables: {
      "key": "<value>",
    },
    toolHeaders: {
      "key": "<value>",
    },
    id: 423855,
    updatedAt: new Date("2024-10-26T14:34:01.576Z"),
    lastUpdatedBy: "<value>",
    prompt: {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 19193,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
    customMessage: {
      name: "<value>",
      text: "<value>",
      rules: [
        {
          description: "outfit hidden remand whether seriously",
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
      id: 866383,
      updatedAt: new Date("2025-12-05T04:07:03.604Z"),
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
            method: "post",
            argumentLocation: "body",
          },
          defaults: "<value>",
        },
        serviceId: 729991,
        id: 171629,
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
        lastUpdated: new Date("2024-07-25T01:20:48.803Z"),
        lastUpdatedBy: "user@email.com",
      },
    ],
    languageGroup: {
      name: "Call Center 1 Languages",
      description: "Languages spoken by operators at Call Center 1",
      languageConfigs: [
        {
          languageCode: "yue-HK",
          voiceProvider: "OpenAI",
          voiceDisplayName: "Alejandro",
          dtmfCode: 1,
        },
      ],
      skipCurrentLanguageInMessage: false,
      id: 1,
      editComments: "Added Spanish support.",
      agentCount: 1,
      lastUpdatedBy: "user@mail.com",
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                      | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the agent associated with the channel target                                                                         |
| `channelId`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the channel associated with the channel target                                                                       |
| `target`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The name of the channel target (must correspond to an organization-level target)                                               |
| `targetMode`                                                                                                                   | [components.TargetModes](../../models/components/targetmodes.md)                                                               | :heavy_check_mark:                                                                                                             | Available modes (communication methods) for channel targets.                                                                   |
| `fallbackTarget`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The fallback for the channel target (currently only supported for "voice" mode)                                                |
| `isTest`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether the channel target is intended for testing. If true, any sessions created through this target will be labeled as test. |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the channel target                                                                                                   |
| `channelName`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The name of the channel associated with the channel target                                                                     |
| `updatedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | Timestamp of the most recent update to the channel target                                                                      |
| `lastUpdatedBy`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Email of the user who last updated the channel target                                                                          |
| `agent`                                                                                                                        | [components.AgentResponse](../../models/components/agentresponse.md)                                                           | :heavy_minus_sign:                                                                                                             | Definition of the agent for the channel target                                                                                 |