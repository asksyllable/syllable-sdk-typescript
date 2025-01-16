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
        description: "educated or fedora compromise if made-up deer rightfully",
        parameters: {},
      },
    },
  },
  serviceId: 592880,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | TRUE                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](/sdk-docs/models/components/tooldefinition) | TRUE                                                     | A tool that can be called from an LLM during the conversation.         |
| `serviceId`                                                            | *number*                                                               | TRUE                                                     | The service this tool belongs to                                       |