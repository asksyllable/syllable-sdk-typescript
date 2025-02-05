# ToolDefinition

A tool that can be called from an LLM during the conversation.

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
  tool: {
    function: {
      name: "<value>",
      description: "uselessly mostly aw quarrelsomely since hence",
      parameters: {},
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.Type](../../models/components/type.md)                         | :heavy_minus_sign:                                                         | The action to take when the LLM calls the tool.                            |
| `tool`                                                                     | [components.InternalTool](../../models/components/internaltool.md)         | :heavy_check_mark:                                                         | A tool definition to be used by the OpenAI API.                            |
| `endpoint`                                                                 | [components.ToolHttpEndpoint](../../models/components/toolhttpendpoint.md) | :heavy_minus_sign:                                                         | The configuration for an HTTP API call.                                    |
| `defaults`                                                                 | *components.Defaults*                                                      | :heavy_minus_sign:                                                         | The default values for the parameters of the function/tool call.           |
| `result`                                                                   | [components.Result](../../models/components/result.md)                     | :heavy_minus_sign:                                                         | The optional result of the tool call. Only used for `context` tools.       |