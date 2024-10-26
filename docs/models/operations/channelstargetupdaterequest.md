# ChannelsTargetUpdateRequest

## Example Usage

```typescript
import { ChannelsTargetUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelsTargetUpdateRequest = {
  channelId: 81101,
  targetId: 407241,
  channelTarget: {
    id: 232234,
    channelId: 132487,
    channelName: "<value>",
    agentId: 53427,
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