# SDKInternalTool

A tool definition to be used by the OpenAI API.

## Example Usage

```typescript
import { SDKInternalTool } from "syllable-sdk/models/components";

let value: SDKInternalTool = {
  function: {
    name: "<value>",
    description:
      "platypus fund positively stylish barge card joshingly overload nor justly",
    parameters: {},
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Always `function`.                                                                                                                         |
| `function`                                                                                                                                 | [components.FunctionT](../../models/components/functiont.md)                                                                               | :heavy_check_mark:                                                                                                                         | A tool definition to be used by the OpenAI API.<br/><br/>See:<br/>- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling |