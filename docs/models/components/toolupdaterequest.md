# ToolUpdateRequest

Request model to update an existing tool.

## Example Usage

```typescript
import { ToolUpdateRequest } from "syllable-sdk/models/components";

let value: ToolUpdateRequest = {
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