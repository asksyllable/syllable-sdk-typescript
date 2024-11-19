# PromptCreate

## Example Usage

```typescript
import { PromptCreate } from "syllable-sdk/models/components";

let value: PromptCreate = {
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The Prompt name                                              |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | The type of the prompt                                       |
| `context`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The prompt text                                              |
| `tools`                                                      | *string*[]                                                   | :heavy_minus_sign:                                           | The tools for the prompt                                     |
| `llmConfig`                                                  | [components.LlmConfig](../../models/components/llmconfig.md) | :heavy_check_mark:                                           | N/A                                                          |