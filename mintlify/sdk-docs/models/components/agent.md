---
tiltle: 'Agent'
---

## Example Usage

```typescript
import { Agent } from "syllable-sdk/models/components";

let value: Agent = {
  name: "<value>",
  timezone: "America/Santarem",
  type: "<value>",
  promptId: 264555,
  customMessageId: 774234,
  languages: [
    "<value>",
  ],
  id: 456150,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `promptId`                                                                                    | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `customMessageId`                                                                             | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `languages`                                                                                   | *string*[]                                                                                    | TRUE                                                                            | N/A                                                                                           |
| `promptToolDefaults`                                                                          | [components.AgentToolDefaults](/sdk-docs/models/components/agenttooldefaults)[]                | FALSE                                                                            | N/A                                                                                           |
| `toolHeaders`                                                                                 | Record                                                                     | FALSE                                                                            | N/A                                                                                           |
| `variables`                                                                                   | Record                                                                     | FALSE                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | The Agent ID                                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | FALSE                                                                            | N/A                                                                                           |
| `channelTargets`                                                                              | [components.Target](/sdk-docs/models/components/target)[]                                      | FALSE                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |