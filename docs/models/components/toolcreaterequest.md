# ToolCreateRequest

Request model to create a tool.

## Example Usage

```typescript
import { ToolCreateRequest } from "syllable-sdk/models/components";

let value: ToolCreateRequest = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the tool                                                                                         | Weather Fetcher                                                                                              |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Internal ID of the service to which the tool belongs                                                         | 1                                                                                                            |