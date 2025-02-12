# ToolFunction

A function available to an agent.

See:
- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling

## Example Usage

```typescript
import { ToolFunction } from "syllable-sdk/models/components";

let value: ToolFunction = {
  name: "weather_fetcher",
  description: "Fetches weather data",
  parameters: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | The name of the function/tool call.                      | weather_fetcher                                          |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | The description of the tool.                             | Fetches weather data                                     |
| `parameters`                                             | *any*                                                    | :heavy_check_mark:                                       | The JSON Schema of parameters of the function/tool call. |                                                          |