# ToolDefinition

A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools.

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
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
    argumentLocation: "body",
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.Type](../../models/components/type.md)                                                 | :heavy_minus_sign:                                                                                 | The action to take when the LLM calls the tool.                                                    |
| `tool`                                                                                             | [components.InternalTool](../../models/components/internaltool.md)                                 | :heavy_check_mark:                                                                                 | A tool definition to be used by the OpenAI API.                                                    |
| `endpoint`                                                                                         | [components.ToolHttpEndpoint](../../models/components/toolhttpendpoint.md)                         | :heavy_minus_sign:                                                                                 | The configuration for an HTTP API call.                                                            |
| `defaults`                                                                                         | *components.Defaults*                                                                              | :heavy_minus_sign:                                                                                 | The default values for the parameters of the function/tool call.                                   |
| `staticParameters`                                                                                 | [components.StaticToolParameter](../../models/components/statictoolparameter.md)[]                 | :heavy_minus_sign:                                                                                 | Parameters for the tool whose values should be set at config time (i.e., not provided by the LLM). |
| `result`                                                                                           | *any*                                                                                              | :heavy_minus_sign:                                                                                 | The optional result of the tool call. Only used for `context` tools.                               |