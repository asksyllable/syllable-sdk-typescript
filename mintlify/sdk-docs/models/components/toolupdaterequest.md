---
title: 'ToolUpdateRequest'
---

## Example Usage

```typescript
import { ToolUpdateRequest } from "syllable-sdk/models/components";

let value: ToolUpdateRequest = {
  name: "<value>",
  definition: {
    tool: {
      function: {
        name: "<value>",
        description: "before substantiate mosh noted abaft",
        parameters: "<value>",
      },
    },
  },
  serviceId: 322829,
  id: 229567,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | TRUE                                                     | The name of the tool                                                   |
| `definition`                                                           | [components.ToolDefinition](/sdk-docs/models/components/tooldefinition) | TRUE                                                     | A tool that can be called from an LLM during the conversation.         |
| `serviceId`                                                            | *number*                                                               | TRUE                                                     | The service this tool belongs to                                       |
| `id`                                                                   | *number*                                                               | TRUE                                                     | The ID of the tool                                                     |
| `lastUpdatedComments`                                                  | *string*                                                               | FALSE                                                     | Update comments                                                        |