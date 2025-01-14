# ToolFunction

A function available to the tool.

See:
- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling

## Example Usage

```typescript
import { ToolFunction } from "syllable-sdk/models/components";

let value: ToolFunction = {
  name: "<value>",
  description:
    "huge verbally knowledgeably knowledgeably upon hoot soggy contractor phooey",
  parameters: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the function/tool call.                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | The description of the tool.                                     |
| `parameters`                                                     | [components.ParametersT](../../models/components/parameterst.md) | :heavy_check_mark:                                               | The JSON Schema of parameters of the function/tool call.         |