---
title: 'PromptCreateRequest'
---

## Example Usage

```typescript
import { PromptCreateRequest } from "syllable-sdk/models/components";

let value: PromptCreateRequest = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    model: "gpt-4o",
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
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