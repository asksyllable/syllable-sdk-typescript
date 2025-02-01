# PromptCreateRequest

## Example Usage

```typescript
import { PromptCreateRequest } from "syllable-sdk/models/components";

let value: PromptCreateRequest = {
  name: "<value>",
  type: "<value>",
  llmConfig: {
    version: "2024-05-13",
    apiVersion: "2024-06-01",
  },
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