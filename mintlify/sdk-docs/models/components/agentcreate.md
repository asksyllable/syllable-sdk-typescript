# AgentCreate

## Example Usage

```typescript
import { AgentCreate } from "syllable-sdk/models/components";

let value: AgentCreate = {
  name: "<value>",
  timezone: "Asia/Irkutsk",
  type: "<value>",
  promptId: 18789,
  customMessageId: 617636,
  languages: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | TRUE                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `label`                                                                        | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `timezone`                                                                     | *string*                                                                       | TRUE                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | TRUE                                                             | N/A                                                                            |
| `promptId`                                                                     | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `customMessageId`                                                              | *number*                                                                       | TRUE                                                             | N/A                                                                            |
| `languages`                                                                    | *string*[]                                                                     | TRUE                                                             | N/A                                                                            |
| `promptToolDefaults`                                                           | [components.AgentToolDefaults](../../models/components/agenttooldefaults.md)[] | FALSE                                                             | N/A                                                                            |
| `toolHeaders`                                                                  | Record                                                      | FALSE                                                             | N/A                                                                            |
| `variables`                                                                    | Record                                                      | FALSE                                                             | N/A                                                                            |