# LlmConfig

## Example Usage

```typescript
import { LlmConfig } from "syllable-sdk/models/components";

let value: LlmConfig = {
  provider: "openai",
  model: "gpt-4o",
  version: "2024-05-13",
  apiVersion: "2024-06-01",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `provider`                                                            | [components.Provider](../../models/components/provider.md)            | :heavy_minus_sign:                                                    | Provider of the LLM model.                                            | azure_openai                                                          |
| `model`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Name of the model. Must match the deployment name in Azure AI Studio. | gpt-4o                                                                |
| `version`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Optional model version.                                               | 2024-05-13                                                            |
| `apiVersion`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | Version of the API. (Currently only used for Azure OpenAI.)           | 2024-06-01                                                            |