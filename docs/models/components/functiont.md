# FunctionT

A tool definition to be used by the OpenAI API.  See: - https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling

## Example Usage

```typescript
import { FunctionT } from "syllable-sdk/models/components";

let value: FunctionT = {
  name: "<value>",
  description: "overcharge general astride boohoo",
  parameters: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the function/tool call.                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | The description of the tool.                                     |
| `parameters`                                                     | [components.ParametersT](../../models/components/parameterst.md) | :heavy_check_mark:                                               | The JSON Schema of parameters of the function/tool call.         |