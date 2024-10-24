# SchemasCortexV1ToolsTool

A tool definition to be used by the OpenAI API.

## Example Usage

```typescript
import { SchemasCortexV1ToolsTool } from "syllable-sdk/models/components";

let value: SchemasCortexV1ToolsTool = {
  function: {
    name: "<value>",
    description: "but intrepid calculating queasily ha intensely settle",
    parameters: {},
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Always `function`.                                               |
| `function`                                                       | [components.FunctionT](../../models/components/functiont.md)     | :heavy_check_mark:                                               | The tool definition including the JSON Schema of its parameters. |