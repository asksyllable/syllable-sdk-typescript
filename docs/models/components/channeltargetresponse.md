# ChannelTargetResponse

Response model for channel target operations.
A channel target links a channel to an agent, allowing users to communicate with the agent
through that channel. For more information, see
[Console docs](https://docs.syllable.ai/Resources/Channels).

## Example Usage

```typescript
import { ChannelTargetResponse } from "syllable-sdk/models/components";

let value: ChannelTargetResponse = {
  agentId: 1,
  channelId: 1,
  target: "+19995551234",
  targetMode: "email",
  fallbackTarget: "+19995551235",
  id: 1,
  channelName: "+19995551234",
  updatedAt: new Date("2024-01-01T00:00:00Z"),
  lastUpdatedBy: "user@email.com",
  agent: {
    name: "Weather agent",
    description: "Agent for answering questions about weather.",
    labels: [
      "Information",
      "Weather",
    ],
    type: "ca_v1",
    promptId: 1,
    customMessageId: 1,
    languageGroupId: 1,
    timezone: "America/New_York",
    promptToolDefaults: [
      {
        toolName: "get_weather",
        defaultValues: [
          {
            fieldName: "temperature_unit",
            defaultValue: "fahrenheit",
          },
        ],
      },
    ],
    variables: {
      "vars.location_name": "Main Street Pizza",
    },
    toolHeaders: {
      "Authorization": "Basic sometoken",
    },
    sttProvider: "Google STT V2",
    waitSound: "No Sound",
    id: 1,
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    lastUpdatedBy: "user@email.com",
    prompt: {
      name: "Weather Agent Prompt",
      description: "Prompt for a weather agent.",
      type: "prompt_v1",
      context:
        "You are a weather agent. Answer the user's questions about weather and nothing else.",
      llmConfig: {
        version: "2024-05-13",
        apiVersion: "2024-06-01",
        temperature: 1,
        seed: 123,
      },
      id: 1,
      editComments:
        "Updated prompt text to include requirement to not answer questions that aren't about weather.",
      lastUpdated: "2024-01-01T12:00:00Z",
      lastUpdatedBy: "user@email.com",
      agentCount: 5,
      toolsFull: [
        {
          name: "Weather Fetcher",
          definition: {
            type: "endpoint",
            tool: {
              function: {
                name: "get_weather",
                description: "Get the weather for a city",
                parameters: {},
              },
            },
            endpoint: {
              url: "https://api.example.com",
              method: "post",
              argumentLocation: "path",
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
            staticParameters: [
              {
                name: "temperature_unit",
                description:
                  "Whether the temperature information should be fetched in Celsius or Fahrenheit",
                required: false,
                type: "string",
                default: "fahrenheit",
              },
            ],
          },
          serviceId: 1,
          id: 1,
          lastUpdatedComments: "Updated to use new API endpoint",
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
          lastUpdated: new Date("2025-10-31T08:20:58.047Z"),
          lastUpdatedBy: "user@email.com",
        },
      ],
    },
    customMessage: {
      name: "Customer service greeting",
      text:
        "Hello and thank you for calling customer service. How can I help you today?",
      label: "Customer service",
      rules: [
        {
          description: "Closed on New Year's Day",
          timeRangeStart: "09:00",
          timeRangeEnd: "17:00",
          date: "2025-01-01",
          invert: false,
          text: "Hello, thank you for calling. Sorry, we're closed today.",
        },
        {
          description: "Closed on weekends",
          timeRangeStart: "09:00",
          timeRangeEnd: "17:00",
          daysOfWeek: [
            "sa",
            "su",
          ],
          invert: false,
          text:
            "Hello, thank you for calling. Sorry, we're closed on weekends.",
        },
      ],
      id: 1,
      updatedAt: new Date("2024-01-01T00:00:00Z"),
      agentCount: 1,
      lastUpdatedBy: "user@email.com",
    },
    channelTargets: [],
    tools: [
      {
        name: "Weather Fetcher",
        definition: {
          type: "endpoint",
          tool: {
            function: {
              name: "get_weather",
              description: "Get the weather for a city",
              parameters: {},
            },
          },
          endpoint: {
            url: "https://api.example.com",
            method: "post",
            argumentLocation: "form",
          },
          defaults: "<value>",
          staticParameters: [
            {
              name: "temperature_unit",
              description:
                "Whether the temperature information should be fetched in Celsius or Fahrenheit",
              required: false,
              type: "string",
              default: "fahrenheit",
            },
          ],
        },
        serviceId: 1,
        id: 1,
        lastUpdatedComments: "Updated to use new API endpoint",
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
        lastUpdated: new Date("2025-02-03T14:29:27.520Z"),
        lastUpdatedBy: "user@email.com",
      },
    ],
    languageGroup: {
      name: "Call Center 1 Languages",
      description: "Languages spoken by operators at Call Center 1",
      languageConfigs: [
        {
          languageCode: "en-US",
          voiceProvider: "OpenAI",
          voiceDisplayName: "Alloy",
          dtmfCode: 1,
        },
        {
          languageCode: "es-US",
          voiceProvider: "Google",
          voiceDisplayName: "Alejandro",
          dtmfCode: 2,
        },
      ],
      skipCurrentLanguageInMessage: true,
      id: 1,
      editComments: "Added Spanish support.",
      agentsInfo: [
        {
          id: 1,
          name: "Test Agent",
        },
      ],
      updatedAt: new Date("2024-01-01T00:00:00Z"),
      lastUpdatedBy: "user@mail.com",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | The internal ID of the agent associated with the channel target                                                                                                                                                                                                      | 1                                                                                                                                                                                                                                                                    |
| `channelId`                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | The internal ID of the channel associated with the channel target                                                                                                                                                                                                    | 1                                                                                                                                                                                                                                                                    |
| `target`                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | The name of the channel target. Must correspond to an organization-level target (available targets can be fetched from `/channels/available-targets`).                                                                                                               | +19995551234                                                                                                                                                                                                                                                         |
| `targetMode`                                                                                                                                                                                                                                                         | [components.TargetModes](../../models/components/targetmodes.md)                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                   | Available modes (communication methods) for channel targets.                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                      |
| `fallbackTarget`                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | The fallback for the channel target (currently only supported for "voice" mode)                                                                                                                                                                                      | +19995551235                                                                                                                                                                                                                                                         |
| `isTest`                                                                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Whether the channel target is intended for testing. If true, any sessions created through this target will be labeled as a test session (i.e., will not be included in dashboard data and can easily be filtered out in the Sessions screen in the SyllableConsole). | true                                                                                                                                                                                                                                                                 |
| `id`                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | The internal ID of the channel target                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                    |
| `channelName`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | The name of the channel associated with the channel target                                                                                                                                                                                                           | +19995551234                                                                                                                                                                                                                                                         |
| `updatedAt`                                                                                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                   | Timestamp of the most recent update to the channel target                                                                                                                                                                                                            | 2024-01-01T00:00:00Z                                                                                                                                                                                                                                                 |
| `lastUpdatedBy`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | Email of the user who last updated the channel target                                                                                                                                                                                                                | user@email.com                                                                                                                                                                                                                                                       |
| `agent`                                                                                                                                                                                                                                                              | [components.AgentResponse](../../models/components/agentresponse.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Definition of the agent with which the channel target is associated.                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                      |