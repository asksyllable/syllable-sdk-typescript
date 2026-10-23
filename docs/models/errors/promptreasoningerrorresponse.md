# PromptReasoningErrorResponse

## Example Usage

```typescript
import { PromptReasoningErrorResponse } from "syllable-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `detail`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `validationIssues`                                                                                               | [components.ReasoningValidationIssue](../../models/components/reasoningvalidationissue.md)[]                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requestErrors`                                                                                                  | [components.PromptRequestValidationErrorDetail](../../models/components/promptrequestvalidationerrordetail.md)[] | :heavy_minus_sign:                                                                                               | Schema failures when invalid reasoning input prevents parsing the request.                                       |