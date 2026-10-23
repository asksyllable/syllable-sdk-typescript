# SupportedLlmReasoningParameterConstraint

Efforts compatible with a supplied provider parameter.

## Example Usage

```typescript
import { SupportedLlmReasoningParameterConstraint } from "syllable-sdk/models/components";

let value: SupportedLlmReasoningParameterConstraint = {
  endpoint: "responses",
  parameter: "<value>",
  allowedEfforts: [
    "low",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endpoint`                                                                                                                                                                                                             | [components.ReasoningEndpoint](../../models/components/reasoningendpoint.md)                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `parameter`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `allowedEfforts`                                                                                                                                                                                                       | [components.ReasoningEffort](../../models/components/reasoningeffort.md)[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                     | Provider-supported efforts compatible with this parameter. An empty list means the parameter is incompatible; a missing parameter rule means unknown compatibility. Endpoint/tool restrictions must also be satisfied. |