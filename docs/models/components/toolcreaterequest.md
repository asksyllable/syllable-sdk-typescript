# ToolCreateRequest

## Example Usage

```typescript
import { ToolCreateRequest } from "syllable-sdk/models/components";

let value: ToolCreateRequest = {
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
      argumentLocation: "query",
    },
    defaults: "<value>",
  },
  serviceId: 501063,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the tool                                                                                         | Weather Fetcher                                                                                              |
| `definition`                                                                                                 | [components.ToolDefinition](../../models/components/tooldefinition.md)                                       | :heavy_check_mark:                                                                                           | A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools. |                                                                                                              |
| `serviceId`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The service to which this tool belongs                                                                       |                                                                                                              |