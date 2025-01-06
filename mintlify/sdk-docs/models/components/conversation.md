---
title: 'Conversation'
---

## Example Usage

```typescript
import { Conversation } from "syllable-sdk/models/components";

let value: Conversation = {
  timestamp: new Date("2022-05-25T10:48:39.501Z"),
  conversationId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `agentName`                                                                                   | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `agentType`                                                                                   | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptId`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptName`                                                                                  | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `promptVersion`                                                                               | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `llmProvider`                                                                                 | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `llmModel`                                                                                    | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `llmVersion`                                                                                  | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `isLegacy`                                                                                    | *boolean*                                                                                     | FALSE                                                                            | N/A                                                                                           |