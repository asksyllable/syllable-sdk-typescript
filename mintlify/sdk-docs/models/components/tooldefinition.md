---
title: 'ToolDefinition'
---

A tool that can be called from an LLM during the conversation.

## Example Usage

```typescript
import { ToolDefinition } from "syllable-sdk/models/components";

let value: ToolDefinition = {
  tool: {
    function: {
      name: "<value>",
      description: "uselessly mostly aw quarrelsomely since hence",
      parameters: "<value>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.Type](/sdk-docs/models/components/type)                         | FALSE                                                         | The action to take when the LLM calls the tool.                            |
| `tool`                                                                     | [components.InternalTool](/sdk-docs/models/components/internaltool)         | TRUE                                                         | A tool definition to be used by the OpenAI API.                            |
| `endpoint`                                                                 | [components.ToolHttpEndpoint](/sdk-docs/models/components/toolhttpendpoint) | FALSE                                                         | The configuration for an HTTP API call.                                    |
| `defaults`                                                                 | *components.Defaults*                                                      | FALSE                                                         | The default values for the parameters of the function/tool call.           |
| `result`                                                                   | *any*                                                                      | FALSE                                                         | The optional result of the tool call. Only used for `context` tools.       |