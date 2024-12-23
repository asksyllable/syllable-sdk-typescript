---
title: 'PromptHistory'
---

## Example Usage

```typescript
import { PromptHistory } from "syllable-sdk/models/components";

let value: PromptHistory = {
  timestamp: new Date("2024-08-07T13:19:14.525Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | N/A                                                                                           |
| `promptId`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptText`                                                                                  | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptDescription`                                                                           | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptName`                                                                                  | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `llmConfig`                                                                                   | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `comments`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `userEmail`                                                                                   | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |