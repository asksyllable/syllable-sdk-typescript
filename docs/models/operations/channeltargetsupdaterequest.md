# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 197054,
  targetId: 459856,
  channelTarget: {
    id: 44612,
    channelId: 799796,
    channelName: "<value>",
    agentId: 76956,
    target: "<value>",
    targetMode: "<value>",
    fallbackTarget: "<value>",
    isTest: false,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `channelId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `targetId`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `channelTarget`                                                      | [components.ChannelTarget](../../models/components/channeltarget.md) | :heavy_check_mark:                                                   | N/A                                                                  |