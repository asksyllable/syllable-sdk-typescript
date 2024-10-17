# Prompt

Prompt

## Example Usage

```typescript
import { Prompt } from "syllable-sdk/models/components";

let value: Prompt = {
  name: "<value>",
  llmConfig: {},
  id: 208876,
  lastUpdated: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The Prompt name                                                  |
| `context`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `tools`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | The tools for the prompt                                         |
| `llmConfig`                                                      | [components.LlmConfig](../../models/components/llmconfig.md)     | :heavy_check_mark:                                               | The configuration for the language model used by the Cortex API. |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | The Prompt ID                                                    |
| `lastUpdated`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |