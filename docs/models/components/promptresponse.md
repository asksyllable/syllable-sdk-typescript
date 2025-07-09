# PromptResponse

Response model for prompt operations.
A prompt defines the behavior of an agent by delivering instructions to the LLM about how the
agent should behave. A prompt can be linked to one or more agents. A prompt can also be linked to
tools to allow an agent using it to use those tools. For more information, see
[Console docs](https://docs.syllable.ai/Resources/Prompts).

## Example Usage

```typescript
import { PromptResponse } from "syllable-sdk/models/components";

let value: PromptResponse = {
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
          argumentLocation: "body",
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
      lastUpdated: new Date("2023-12-12T17:01:38.434Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | The prompt name                                                                                                                                                                                                                         | Weather Agent Prompt                                                                                                                                                                                                                    |
| `description`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The description of the prompt                                                                                                                                                                                                           | Prompt for a weather agent.                                                                                                                                                                                                             |
| `type`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | The type of the prompt                                                                                                                                                                                                                  | prompt_v1                                                                                                                                                                                                                               |
| `context`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The prompt text that will be sent to the LLM at the beginning of the conversation                                                                                                                                                       | You are a weather agent. Answer the user's questions about weather and nothing else.                                                                                                                                                    |
| ~~`tools`~~                                                                                                                                                                                                                             | *string*[]                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Names of the tools to which the prompt has access (DEPRECATED - use information from full tools field instead) | hangup                                                                                                                                                                                                                                  |
| `llmConfig`                                                                                                                                                                                                                             | [components.PromptLlmConfig](../../models/components/promptllmconfig.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | LLM configuration for a prompt.                                                                                                                                                                                                         |                                                                                                                                                                                                                                         |
| `id`                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | The internal ID of the prompt                                                                                                                                                                                                           | 1                                                                                                                                                                                                                                       |
| `editComments`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The comments for the most recent edit to the prompt                                                                                                                                                                                     | Updated prompt text to include requirement to not answer questions that aren't about weather.                                                                                                                                           |
| `lastUpdated`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | The last updated date of the prompt                                                                                                                                                                                                     | 2024-01-01T12:00:00Z                                                                                                                                                                                                                    |
| `lastUpdatedBy`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | Email address of the user who most recently updated the prompt                                                                                                                                                                          | user@email.com                                                                                                                                                                                                                          |
| `agentCount`                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | The number of agents using the prompt                                                                                                                                                                                                   | 5                                                                                                                                                                                                                                       |
| `toolsFull`                                                                                                                                                                                                                             | [components.ToolResponse](../../models/components/toolresponse.md)[]                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                      | Full definitions of tools to which the prompt has access                                                                                                                                                                                |                                                                                                                                                                                                                                         |