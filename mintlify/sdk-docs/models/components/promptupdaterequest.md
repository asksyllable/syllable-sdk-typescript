---
title: 'PromptUpdateRequest'
---

## Example Usage

```typescript
import { PromptUpdateRequest } from "syllable-sdk/models/components";

let value: PromptUpdateRequest = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
  id: 382808,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | TRUE                                                       | The prompt name                                                          |
| `description`                                                            | *string*                                                                 | FALSE                                                       | The description of the prompt                                            |
| `type`                                                                   | *string*                                                                 | TRUE                                                       | The type of the prompt                                                   |
| `context`                                                                | *string*                                                                 | FALSE                                                       | The prompt text                                                          |
| `tools`                                                                  | *string*[]                                                               | FALSE                                                       | Names of tools to which the prompt has access                            |
| `llmConfig`                                                              | [components.PromptLlmConfig](/sdk-docs/models/components/promptllmconfig) | TRUE                                                       | N/A                                                                      |
| `id`                                                                     | *number*                                                                 | TRUE                                                       | The prompt ID                                                            |
| `editComments`                                                           | *string*                                                                 | FALSE                                                       | The comments for the most recent edit to the prompt                      |