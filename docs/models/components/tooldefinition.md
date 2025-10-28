# ToolDefinition

A tool that can be called from an LLM during the conversation. See https://docs.syllable.ai/Resources/Tools.

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
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
  defaults: {
    "key": {
      "transform": {
        "action": "default",
        "when": {
          "key": "key",
          "value": "value",
          "operator": "eq",
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
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       | Example                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                            | [components.Type](../../models/components/type.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                | The action to take when the LLM calls the tool.                                                                                                                                                   | endpoint                                                                                                                                                                                          |
| `tool`                                                                                                                                                                                            | [components.InternalTool](../../models/components/internaltool.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                | A tool definition to be used by the OpenAI API.                                                                                                                                                   |                                                                                                                                                                                                   |
| `endpoint`                                                                                                                                                                                        | [components.ToolHttpEndpoint](../../models/components/toolhttpendpoint.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                | The configuration for an HTTP API call.                                                                                                                                                           |                                                                                                                                                                                                   |
| `defaults`                                                                                                                                                                                        | *components.Defaults*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                | The default values for the parameters of the function/tool call.                                                                                                                                  |                                                                                                                                                                                                   |
| `staticParameters`                                                                                                                                                                                | [components.StaticToolParameter](../../models/components/statictoolparameter.md)[]                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                | Parameters for the tool whose values should be set at config time (i.e., not provided by the LLM).                                                                                                | [<br/>{<br/>"default": "fahrenheit",<br/>"description": "Whether the temperature information should be fetched in Celsius or Fahrenheit",<br/>"name": "temperature_unit",<br/>"required": false,<br/>"type": "string"<br/>}<br/>] |
| `result`                                                                                                                                                                                          | *any*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                | The optional result of the tool call.                                                                                                                                                             |                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                         | [components.ToolOptions](../../models/components/tooloptions.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                | The options for the tool. Ie allows to propagate the tool result to the caller via propagate_tool_result flag.                                                                                    |                                                                                                                                                                                                   |