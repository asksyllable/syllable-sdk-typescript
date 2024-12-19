---
title: 'Target'
---

## Example Usage

```typescript
import { Target } from "syllable-sdk/models/components";

let value: Target = {
  agentId: 870013,
  target: "<value>",
  targetMode: "email",
  channelId: 799159,
  id: 461479,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `agentId`                                                        | *number*                                                         | TRUE                                               | The Agent ID                                                     |
| `target`                                                         | *string*                                                         | TRUE                                               | The Target                                                       |
| `targetMode`                                                     | [components.TargetModes](/sdk-docs/models/components/targetmodes) | TRUE                                               | The target mode                                                  |
| `channelId`                                                      | *number*                                                         | TRUE                                               | The Channel ID                                                   |
| `fallbackTarget`                                                 | *string*                                                         | FALSE                                               | The Fallback Target                                              |
| `isTest`                                                         | *boolean*                                                        | FALSE                                               | Whether the Target is for testing                                |
| `id`                                                             | *number*                                                         | TRUE                                               | The Target ID                                                    |
| `channelName`                                                    | *string*                                                         | FALSE                                               | The Channel Name                                                 |