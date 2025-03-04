# ChannelTargetResponse

A channel target links a channel to an agent, allowing users to communicate with the agent
through that channel.

## Example Usage

```typescript
import { ChannelTargetResponse } from "syllable-sdk/models/components";

let value: ChannelTargetResponse = {
  agentId: 846409,
  channelId: 699479,
  target: "<value>",
  targetMode: "chat",
  id: 813798,
  channelName: "<value>",
  updatedAt: new Date("2024-03-10T13:41:13.226Z"),
  lastUpdatedBy: "<value>",
  agent: {
    name: "<value>",
    type: "ca_v1",
    promptId: 881104,
    customMessageId: 581273,
    timezone: "America/Chicago",
    variables: {
      "key": "<value>",
    },
    toolHeaders: {
      "key": "<value>",
    },
    sttProvider: "Deepgram Nova 2",
    waitSound: "Call Center",
    id: 501324,
    updatedAt: new Date("2025-11-13T20:49:26.140Z"),
    lastUpdatedBy: "<value>",
    prompt: {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 643990,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
    customMessage: {
      name: "<value>",
      text: "<value>",
      rules: [
        {
          description: "woot purse salty even as advanced",
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
      id: 359978,
      updatedAt: new Date("2025-03-11T01:40:18.315Z"),
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
            argumentLocation: "path",
          },
          defaults: "<value>",
        },
        serviceId: 199996,
        id: 18521,
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
        lastUpdated: new Date("2025-05-19T21:25:27.801Z"),
        lastUpdatedBy: "user@email.com",
      },
    ],
    languageGroup: {
      name: "Call Center 1 Languages",
      description: "Languages spoken by operators at Call Center 1",
      languageConfigs: [
        {
          languageCode: "en-US",
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