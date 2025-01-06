---
title: 'AgentUpdate'
---

## Example Usage

```typescript
import { AgentUpdate } from "syllable-sdk/models/components";

let value: AgentUpdate = {
  name: "<value>",
  timezone: "America/Vancouver",
  type: "<value>",
  promptId: 568434,
  customMessageId: 18789,
  languages: [
    "<value>",
  ],
  id: 617636,
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
| `promptToolDefaults`                                                           | [components.AgentToolDefaults](/sdk-docs/models/components/agenttooldefaults)[] | FALSE                                                             | N/A                                                                            |
| `toolHeaders`                                                                  | Record                                                       | FALSE                                                             | N/A                                                                            |
| `variables`                                                                    | Record                                                       | FALSE                                                             | N/A                                                                            |
| `id`                                                                           | *number*                                                                       | TRUE                                                             | The Agent ID                                                                   |