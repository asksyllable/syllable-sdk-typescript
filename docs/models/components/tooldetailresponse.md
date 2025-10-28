# ToolDetailResponse

Response model for tool detail endpoint.
A tool is a function that an agent can call to perform actions like accessing databases,
making API calls, or processing data. For an agent to have access to a tool, the prompt
associated with that agent should be linked to the tool and include instructions to use it.
For more information, see [Console docs](https://docs.syllable.ai/Resources/Tools).

## Example Usage

```typescript
import { ToolDetailResponse } from "syllable-sdk/models/components";

let value: ToolDetailResponse = {
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
      method: "delete",
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
  lastUpdated: new Date("2024-09-11T09:25:15.031Z"),
  lastUpdatedBy: "user@email.com",
  fields: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the tool                                                                                         | Weather Fetcher                                                                                              |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Internal ID of the service to which the tool belongs                                                         | 1                                                                                                            |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The internal ID of the tool                                                                                  | 1                                                                                                            |
| `lastUpdatedComments`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Comments for the most recent edit to the tool.                                                               | Updated to use new API endpoint                                                                              |
| `serviceName`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The name of the service to which the tool belongs                                                            |                                                                                                              |
| `promptsInfo`                                                                                                | [components.ToolPromptInfo](../../models/components/toolpromptinfo.md)[]                                     | :heavy_minus_sign:                                                                                           | IDs and names of the prompts linked to the tool                                                              |                                                                                                              |
| `agentsInfo`                                                                                                 | [components.ToolAgentInfo](../../models/components/toolagentinfo.md)[]                                       | :heavy_minus_sign:                                                                                           | IDs and names of the agents linked to the tool via a prompt                                                  |                                                                                                              |
| `lastUpdated`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The timestamp of the most recent update to the tool                                                          |                                                                                                              |
| `lastUpdatedBy`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The email of the user who last updated the tool                                                              | user@email.com                                                                                               |
| `fields`                                                                                                     | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | Fields that the tool accepts as input                                                                        |                                                                                                              |