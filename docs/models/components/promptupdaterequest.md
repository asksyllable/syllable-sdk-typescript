# PromptUpdateRequest

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
  id: 727772,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The prompt name                                                          |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The description of the prompt                                            |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The type of the prompt                                                   |
| `context`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | The prompt text                                                          |
| `tools`                                                                  | *string*[]                                                               | :heavy_minus_sign:                                                       | Names of tools to which the prompt has access                            |
| `llmConfig`                                                              | [components.PromptLlmConfig](../../models/components/promptllmconfig.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | The prompt ID                                                            |
| `editComments`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The comments for the most recent edit to the prompt                      |