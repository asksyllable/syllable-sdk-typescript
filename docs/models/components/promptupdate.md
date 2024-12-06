# PromptUpdate

## Example Usage

```typescript
import { PromptUpdate } from "syllable-sdk/models/components";

let value: PromptUpdate = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    provider: "azure_openai",
    model: "gpt-4o",
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
  id: 667411,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The Prompt name                                                  |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | The description of the prompt                                    |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | The type of the prompt                                           |
| `context`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The prompt text                                                  |
| `tools`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | The tools for the prompt                                         |
| `llmConfig`                                                      | [components.LlmConfig](../../models/components/llmconfig.md)     | :heavy_check_mark:                                               | The configuration for the language model used by the Cortex API. |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | The Prompt ID                                                    |
| `editComments`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The comments for the last edit                                   |