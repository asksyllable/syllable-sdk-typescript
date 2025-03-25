# PromptLlmConfig

LLM configuration for a prompt.

## Example Usage

```typescript
import { PromptLlmConfig } from "syllable-sdk/models/components";

let value: PromptLlmConfig = {
  version: "2024-05-13",
  apiVersion: "2024-06-01",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [components.PromptLlmProvider](../../models/components/promptllmprovider.md) | :heavy_minus_sign:                                                           | LLM API provider.                                                            |                                                                              |
| `model`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | Name of the model. Must match the deployment name in Azure AI Studio.        | gpt-4o                                                                       |
| `version`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Optional model version.                                                      | 2024-05-13                                                                   |
| `apiVersion`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Version of the API. (Currently only used for Azure OpenAI.)                  | 2024-06-01                                                                   |