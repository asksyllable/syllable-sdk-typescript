# PromptRequestValidationErrorDetail

Schema error location/message without echoing request input or validator context.

## Example Usage

```typescript
import { PromptRequestValidationErrorDetail } from "syllable-sdk/models/components";

let value: PromptRequestValidationErrorDetail = {
  loc: [
    "<value>",
  ],
  type: "<value>",
  msg: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `loc`                                                | *components.PromptRequestValidationErrorDetailLoc*[] | :heavy_check_mark:                                   | N/A                                                  |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `msg`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |