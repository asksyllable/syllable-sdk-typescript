# AgentResponse

Response model for agent operations.
When a user interacts with the Syllable system, they do so by communicating with an agent.
An agent is linked to a prompt, a custom message, and one or more channel targets to define its
behavior and capabilities. For more information, see
[Console docs](https://docs.syllable.ai/workspaces/Agents).

## Example Usage

```typescript
import { AgentResponse } from "syllable-sdk/models/components";

let value: AgentResponse = {
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
    "some-header": "some-value",
  },
  sttProvider: "Google STT V2 (Chirp 2)",
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
    editComments:
      "Updated prompt text to include requirement to not answer questions that aren't about weather.",
    id: 1,
    lastUpdated: "2024-01-01T12:00:00Z",
    lastUpdatedBy: "user@email.com",
    agentCount: 5,
    versionNumber: 1,
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
            argumentLocation: "form",
          },
          defaults: {},
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
        lastUpdated: new Date("2025-12-18T09:18:28.600Z"),
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
        text: "Hello, thank you for calling. Sorry, we're closed on weekends.",
      },
    ],
    id: 1,
    updatedAt: new Date("2024-01-01T00:00:00Z"),
    agentCount: 1,
    lastUpdatedBy: "user@email.com",
  },
  channelTargets: [
    {
      agentId: 1,
      channelId: 1,
      target: "+19995551234",
      targetMode: "sms",
      fallbackTarget: "+19995551235",
      isTest: true,
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
          "some-header": "some-value",
        },
        sttProvider: "Google STT V2 (Chirp 2)",
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
          editComments:
            "Updated prompt text to include requirement to not answer questions that aren't about weather.",
          id: 1,
          lastUpdated: "2024-01-01T12:00:00Z",
          lastUpdatedBy: "user@email.com",
          agentCount: 5,
          versionNumber: 1,
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
                  argumentLocation: "form",
                },
                defaults: {},
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
              lastUpdated: new Date("2025-12-18T09:18:28.600Z"),
              lastUpdatedBy: "user@email.com",
            },
          ],
        },
        customMessage: null,
        tools: null,
        languageGroup: null,
      },
    },
  ],
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
        defaults: {},
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
      lastUpdated: new Date("2025-04-26T21:36:54.796Z"),
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
        voiceDisplayName: "es-US-Neural2-B",
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | The agent name                                                                                                                                                                                                                                                                                                                                                        | Weather agent                                                                                                                                                                                                                                                                                                                                                         |
| `description`                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | The agent description                                                                                                                                                                                                                                                                                                                                                 | Agent for answering questions about weather.                                                                                                                                                                                                                                                                                                                          |
| ~~`label`~~                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The agent label (DEPRECATED - use labels instead.)                                                                                                                                                                                   | Information                                                                                                                                                                                                                                                                                                                                                           |
| `labels`                                                                                                                                                                                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | The agent labels                                                                                                                                                                                                                                                                                                                                                      | [<br/>"Information",<br/>"Weather"<br/>]                                                                                                                                                                                                                                                                                                                              |
| `type`                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | The agent type. Must be "ca_v1" currently.                                                                                                                                                                                                                                                                                                                            | ca_v1                                                                                                                                                                                                                                                                                                                                                                 |
| `promptId`                                                                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | ID of the prompt associated with the agent                                                                                                                                                                                                                                                                                                                            | 1                                                                                                                                                                                                                                                                                                                                                                     |
| `customMessageId`                                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Internal ID of the custom message that should be delivered at the beginning of a conversation with the agent                                                                                                                                                                                                                                                          | 1                                                                                                                                                                                                                                                                                                                                                                     |
| `languageGroupId`                                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Internal ID of the language group associated with the agent                                                                                                                                                                                                                                                                                                           | 1                                                                                                                                                                                                                                                                                                                                                                     |
| `timezone`                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | The time zone in which the agent operates                                                                                                                                                                                                                                                                                                                             | America/New_York                                                                                                                                                                                                                                                                                                                                                      |
| `promptToolDefaults`                                                                                                                                                                                                                                                                                                                                                  | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[]                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Agent-level static parameter values for the agent's tools, overriding any tool-level defaults                                                                                                                                                                                                                                                                         | [<br/>{<br/>"default_values": [<br/>{<br/>"default_value": "fahrenheit",<br/>"field_name": "temperature_unit"<br/>}<br/>],<br/>"tool_name": "get_weather"<br/>}<br/>]                                                                                                                                                                                                 |
| ~~`languages`~~                                                                                                                                                                                                                                                                                                                                                       | *string*[]                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>BCP 47 codes of languages the agent supports. (DEPRECATED - pass an empty list here and use language group ID to link agent to a language group instead.)                                                                            | [<br/>"en-US",<br/>"es-US"<br/>]                                                                                                                                                                                                                                                                                                                                      |
| `variables`                                                                                                                                                                                                                                                                                                                                                           | Record<string, *string*>                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Custom context variables for the conversation session. Keys should be prefixed with "vars.".                                                                                                                                                                                                                                                                          | {<br/>"vars.location_name": "Main Street Pizza"<br/>}                                                                                                                                                                                                                                                                                                                 |
| `toolHeaders`                                                                                                                                                                                                                                                                                                                                                         | Record<string, *string*>                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Optional headers to include in tool calls for agent. (It is discouraged to use this field for "Authorization" headers, as values here are not encrypted. Instead, set up a service with either basic, bearer, or custom header auth; attach the appropriate tools to that service, and the attached tools will automatically use the auth configured on the service.) | {<br/>"some-header": "some-value"<br/>}                                                                                                                                                                                                                                                                                                                               |
| `agentInitiated`                                                                                                                                                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Whether the agent initiates conversation with a user after the custom_message is delivered                                                                                                                                                                                                                                                                            | false                                                                                                                                                                                                                                                                                                                                                                 |
| `sttProvider`                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Speech-to-text provider for the agent.                                                                                                                                                                                                                                                                                                                                | Google STT V2 (Chirp 2)                                                                                                                                                                                                                                                                                                                                               |
| `waitSound`                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Sound to play while waiting for a response from the LLM.                                                                                                                                                                                                                                                                                                              | No Sound                                                                                                                                                                                                                                                                                                                                                              |
| `id`                                                                                                                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Internal ID of the agent                                                                                                                                                                                                                                                                                                                                              | 1                                                                                                                                                                                                                                                                                                                                                                     |
| `updatedAt`                                                                                                                                                                                                                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Timestamp of most recent update                                                                                                                                                                                                                                                                                                                                       | 2024-01-01T00:00:00Z                                                                                                                                                                                                                                                                                                                                                  |
| `lastUpdatedBy`                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                    | Email of the user who last updated the agent                                                                                                                                                                                                                                                                                                                          | user@email.com                                                                                                                                                                                                                                                                                                                                                        |
| `prompt`                                                                                                                                                                                                                                                                                                                                                              | [components.PromptResponse](../../models/components/promptresponse.md)                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | The prompt associated with the agent.                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                       |
| `customMessage`                                                                                                                                                                                                                                                                                                                                                       | [components.CustomMessageResponse](../../models/components/custommessageresponse.md)                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | The message associated with the agent. Will be delivered as a greeting at the beginning of a conversation.                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                       |
| `channelTargets`                                                                                                                                                                                                                                                                                                                                                      | [components.ChannelTargetResponse](../../models/components/channeltargetresponse.md)[]                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Channel targets associated with the agent                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                       |
| `tools`                                                                                                                                                                                                                                                                                                                                                               | [components.ToolResponse](../../models/components/toolresponse.md)[]                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | Tools associated with the agent                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                       |
| `languageGroup`                                                                                                                                                                                                                                                                                                                                                       | [components.LanguageGroupResponse](../../models/components/languagegroupresponse.md)                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                    | The language group associated with the agent                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                       |