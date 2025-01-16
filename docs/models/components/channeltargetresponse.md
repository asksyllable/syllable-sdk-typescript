# ChannelTargetResponse

A channel target links a channel to an agent, allowing users to communicate with the agent
through that channel.

## Example Usage

```typescript
import { ChannelTargetResponse } from "syllable-sdk/models/components";

let value: ChannelTargetResponse = {
  agentId: 414263,
  channelId: 64147,
  target: "<value>",
  targetMode: "sms",
  id: 566602,
  channelName: "<value>",
  updatedAt: new Date("2023-10-18T20:48:18.611Z"),
  lastUpdatedBy: "<value>",
  agent: {
    name: "<value>",
    type: "ca_v1",
    promptId: 523248,
    customMessageId: 93940,
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
    id: 929297,
    updatedAt: new Date("2023-12-16T03:38:15.811Z"),
    lastUpdatedBy: "<value>",
    prompt: {
      name: "<value>",
      type: "<value>",
      llmConfig: {
        model: "gpt-4o",
        version: "2024-05-13",
        apiVersion: "2024-06-01",
      },
      id: 667411,
      lastUpdated: "<value>",
      lastUpdatedBy: "user@email.com",
    },
    customMessage: {
      name: "<value>",
      text: "<value>",
      rules: [
        {
          description: "yuck supposing friendly serpentine",
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
      id: 501324,
      updatedAt: new Date("2025-11-13T20:49:26.140Z"),
      lastUpdatedBy: "user@email.com",
    },
    channelTargets: [],
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