---
title: 'ToolFunction'
---

A function available to an agent.

See:
- https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling

## Example Usage

```typescript
import { ToolFunction } from "syllable-sdk/models/components";

let value: ToolFunction = {
  name: "<value>",
  description:
    "reasoning safely ick discourse besides forsaken coordinated married",
  parameters: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | TRUE                                       | The name of the function/tool call.                      |
| `description`                                            | *string*                                                 | TRUE                                       | The description of the tool.                             |
| `parameters`                                             | *any*                                                    | TRUE                                       | The JSON Schema of parameters of the function/tool call. |