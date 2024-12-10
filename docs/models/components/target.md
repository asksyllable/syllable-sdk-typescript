# Target

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
| `agentId`                                                        | *number*                                                         | :heavy_check_mark:                                               | The Agent ID                                                     |
| `target`                                                         | *string*                                                         | :heavy_check_mark:                                               | The Target                                                       |
| `targetMode`                                                     | [components.TargetModes](../../models/components/targetmodes.md) | :heavy_check_mark:                                               | The target mode                                                  |
| `channelId`                                                      | *number*                                                         | :heavy_check_mark:                                               | The Channel ID                                                   |
| `fallbackTarget`                                                 | *string*                                                         | :heavy_minus_sign:                                               | The Fallback Target                                              |
| `isTest`                                                         | *boolean*                                                        | :heavy_minus_sign:                                               | Whether the Target is for testing                                |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | The Target ID                                                    |
| `channelName`                                                    | *string*                                                         | :heavy_minus_sign:                                               | The Channel Name                                                 |