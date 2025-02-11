---
title: 'ToolCreateRequest'
---

## Example Usage

```typescript
import { ToolCreateRequest } from "syllable-sdk/models/components";

let value: ToolCreateRequest = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "pish and ouch supportive honestly uh-huh mmm gently",
        parameters: "<value>",
      },
    },
  },
  serviceId: 179795,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | TRUE                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](/sdk-docs/models/components/tooldefinition) | TRUE                                                     | A tool that can be called from an LLM during the conversation.         |
| `serviceId`                                                            | *number*                                                               | TRUE                                                     | The service this tool belongs to                                       |