---
title: 'ChannelTargetResponse'
---

A channel target links a channel to an agent, allowing users to communicate with the agent
through that channel.

## Example Usage

```typescript
import { ChannelTargetResponse } from "syllable-sdk/models/components";

let value: ChannelTargetResponse = {
  agentId: 248753,
  channelId: 576157,
  target: "<value>",
  targetMode: "sms",
  id: 572252,
  channelName: "<value>",
  updatedAt: new Date("2023-09-02T11:56:21.354Z"),
  lastUpdatedBy: "<value>",
  agent: {
    name: "<value>",
    type: "ca_v1",
    promptId: 952749,
    customMessageId: 447125,
    timezone: "America/Chicago",
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
    id: 699479,
    updatedAt: new Date("2023-11-22T23:46:53.599Z"),
    lastUpdatedBy: "<value>",
    prompt: {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 813798,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
    customMessage: {
      name: "<value>",
      text: "<value>",
      rules: [
        {
          description: "well-to-do below outrun swat come metal",
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
      id: 407183,
      updatedAt: new Date("2023-03-17T19:22:07.134Z"),
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
              parameters: "<value>",
            },
          },
          endpoint: {
            url: "https://api.example.com",
            method: "post",
            argumentLocation: "form",
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
        serviceId: 866383,
        id: 975522,
        lastUpdated: new Date("2025-07-26T23:03:04.026Z"),
        lastUpdatedBy: "user@email.com",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                      | *number*                                                                                                                       | TRUE                                                                                                             | The ID of the agent associated with the channel target                                                                         |
| `channelId`                                                                                                                    | *number*                                                                                                                       | TRUE                                                                                                             | The ID of the channel associated with the channel target                                                                       |
| `target`                                                                                                                       | *string*                                                                                                                       | TRUE                                                                                                             | The name of the channel target (must correspond to an organization-level target)                                               |
| `targetMode`                                                                                                                   | [components.TargetModes](/sdk-docs/models/components/targetmodes)                                                               | TRUE                                                                                                             | Available modes (communication methods) for channel targets.                                                                   |
| `fallbackTarget`                                                                                                               | *string*                                                                                                                       | FALSE                                                                                                             | The fallback for the channel target (currently only supported for "voice" mode)                                                |
| `isTest`                                                                                                                       | *boolean*                                                                                                                      | FALSE                                                                                                             | Whether the channel target is intended for testing. If true, any sessions created through this target will be labeled as test. |
| `id`                                                                                                                           | *number*                                                                                                                       | TRUE                                                                                                             | The ID of the channel target                                                                                                   |
| `channelName`                                                                                                                  | *string*                                                                                                                       | TRUE                                                                                                             | The name of the channel associated with the channel target                                                                     |
| `updatedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | TRUE                                                                                                             | Timestamp of the most recent update to the channel target                                                                      |
| `lastUpdatedBy`                                                                                                                | *string*                                                                                                                       | TRUE                                                                                                             | Email of the user who last updated the channel target                                                                          |
| `agent`                                                                                                                        | [components.AgentResponse](/sdk-docs/models/components/agentresponse)                                                           | FALSE                                                                                                             | Definition of the agent for the channel target                                                                                 |