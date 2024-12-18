# SDKToolDefinition

## Example Usage

```typescript
import { SDKToolDefinition } from "syllable-sdk/models/components";

let value: SDKToolDefinition = {
  tool: {
    function: {
      name: "<value>",
      description: "eek where kindly materialise antique failing hence",
      parameters: {},
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.Type](../../models/components/type.md)                       | :heavy_minus_sign:                                                       | The action to take when GPT calls the tool.                              |
| `tool`                                                                   | [components.SDKInternalTool](../../models/components/sdkinternaltool.md) | :heavy_check_mark:                                                       | A tool definition to be used by the OpenAI API.                          |
| `endpoint`                                                               | [components.HttpEndpoint](../../models/components/httpendpoint.md)       | :heavy_minus_sign:                                                       | The configuration for an HTTP API call.                                  |
| `defaults`                                                               | *components.Defaults*                                                    | :heavy_minus_sign:                                                       | The default values for the parameters of the function/tool call.         |
| `result`                                                                 | [components.Result](../../models/components/result.md)                   | :heavy_minus_sign:                                                       | The optional result of the tool call. Only used for `context` tools.     |