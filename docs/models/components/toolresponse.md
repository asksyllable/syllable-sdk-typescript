# ToolResponse

A tool is a function that an agent can call to perform actions like accessing databases, 
making API calls, or processing data. For an agent to have access to a tool, the prompt 
associated with that agent should be linked to the tool and include instructions to use it.

## Example Usage

```typescript
import { ToolResponse } from "syllable-sdk/models/components";

let value: ToolResponse = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "weary exactly tepid gratefully",
        parameters: {},
      },
    },
  },
  serviceId: 75359,
  id: 424663,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](../../models/components/tooldefinition.md) | :heavy_check_mark:                                                     | A tool that can be called from an LLM during the conversation.         |
| `serviceId`                                                            | *number*                                                               | :heavy_check_mark:                                                     | The service this tool belongs to                                       |
| `id`                                                                   | *number*                                                               | :heavy_check_mark:                                                     | The ID of the tool                                                     |
| `serviceName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The name of the service to which the tool belongs                      |