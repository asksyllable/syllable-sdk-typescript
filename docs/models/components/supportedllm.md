# SupportedLlm

LLM config option that can be used on a prompt.

## Example Usage

```typescript
import { SupportedLlm } from "syllable-sdk/models/components";

let value: SupportedLlm = {
  displayName: "GPT-4o",
  version: "2024-05-13",
  apiVersion: "2024-06-01",
  deprecated: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `provider`                                                                      | [components.PromptLlmProvider](../../models/components/promptllmprovider.md)    | :heavy_minus_sign:                                                              | LLM API provider.                                                               |                                                                                 |
| `model`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the model. Must match the deployment name in Azure AI Studio.           | gpt-4o                                                                          |
| `displayName`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Display name of the model. This is used for display purposes in the Console UI. | GPT-4o                                                                          |
| `version`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Model version.                                                                  | 2024-05-13                                                                      |
| `apiVersion`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | Version of the provider's API.                                                  | 2024-06-01                                                                      |
| `deprecated`                                                                    | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether the LLM config is deprecated and should not be used.                    | false                                                                           |