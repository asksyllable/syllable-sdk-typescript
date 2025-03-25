# InternalTool

A tool definition to be used by the OpenAI API.

## Example Usage

```typescript
import { InternalTool } from "syllable-sdk/models/components";

let value: InternalTool = {
  function: {
    name: "get_weather",
    description: "Get the weather for a city",
    parameters: {},
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Always `function`.                                                                                                           | function                                                                                                                     |
| `function`                                                                                                                   | [components.ToolFunction](../../models/components/toolfunction.md)                                                           | :heavy_check_mark:                                                                                                           | A function available to an agent.<br/><br/>See:<br/>- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling |                                                                                                                              |