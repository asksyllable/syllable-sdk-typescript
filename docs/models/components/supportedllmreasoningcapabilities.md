# SupportedLlmReasoningCapabilities

Provider facts for this concrete model identity, independent of feature activation.

## Example Usage

```typescript
import { SupportedLlmReasoningCapabilities } from "syllable-sdk/models/components";
import { RFCDate } from "syllable-sdk/types";

let value: SupportedLlmReasoningCapabilities = {
  combinations: [
    {
      endpoint: "chat",
      toolMode: "function",
      allowedEfforts: [
        "low",
      ],
      unverifiedEfforts: [
        "low",
      ],
    },
  ],
  parameters: [
    {
      endpoint: "chat",
      parameter: "<value>",
      allowedEfforts: [
        "low",
      ],
    },
  ],
  reviewedOn: new RFCDate("2024-09-05"),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `combinations`                                                                                                               | [components.SupportedLlmReasoningCombination](../../models/components/supportedllmreasoningcombination.md)[]                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `parameters`                                                                                                                 | [components.SupportedLlmReasoningParameterConstraint](../../models/components/supportedllmreasoningparameterconstraint.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `reviewedOn`                                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                                            | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |