# ToolUpdateRequest

## Example Usage

```typescript
import { ToolUpdateRequest } from "syllable-sdk/models/components";

let value: ToolUpdateRequest = {
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
      argumentLocation: "query",
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
  serviceId: 316550,
  id: 826806,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the tool                                                                                         | Weather Fetcher                                                                                              |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The service to which this tool belongs                                                                       |                                                                                                              |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the tool                                                                                           |                                                                                                              |
| `lastUpdatedComments`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Update comments                                                                                              |                                                                                                              |