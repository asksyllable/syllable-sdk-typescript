# ChannelsTargetUpdateRequest

## Example Usage

```typescript
import { ChannelsTargetUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelsTargetUpdateRequest = {
  channelId: 488056,
  targetId: 355613,
  channelTarget: {
    id: 940432,
    channelId: 765326,
    channelName: "<value>",
    agentId: 748664,
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