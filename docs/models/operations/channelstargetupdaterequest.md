# ChannelsTargetUpdateRequest

## Example Usage

```typescript
import { ChannelsTargetUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelsTargetUpdateRequest = {
  channelId: 333145,
  targetId: 81101,
  channelTarget: {
    id: 407241,
    channelId: 232234,
    channelName: "<value>",
    agentId: 132487,
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