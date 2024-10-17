# LlmConfig

LlmConfig

## Example Usage

```typescript
import { LlmConfig } from "syllable-sdk/models/components";

let value: LlmConfig = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `provider`                                                            | [components.Provider](../../models/components/provider.md)            | :heavy_minus_sign:                                                    | Provider of the LLM model.                                            |
| `model`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Name of the model. Must match the deployment name in Azure AI Studio. |
| `version`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `apiVersion`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |