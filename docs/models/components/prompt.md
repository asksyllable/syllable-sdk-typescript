# Prompt

## Example Usage

```typescript
import { Prompt } from "syllable-sdk/models/components";

let value: Prompt = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    provider: "azure_openai",
    model: "gpt-4o",
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
  id: 20218,
  lastUpdated: "<value>",
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
| `lastUpdated`                                                    | *string*                                                         | :heavy_check_mark:                                               | The last updated date of the prompt                              |
| `lastUpdatedBy`                                                  | *string*                                                         | :heavy_minus_sign:                                               | The last updated user who last updated of the prompt             |
| `agentCount`                                                     | *number*                                                         | :heavy_minus_sign:                                               | The number of agents using the prompt                            |