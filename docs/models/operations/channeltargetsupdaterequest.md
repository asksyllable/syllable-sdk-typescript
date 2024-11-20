# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 862192,
  targetId: 972920,
  channelTarget: {
    id: 960835,
    channelId: 906556,
    channelName: "<value>",
    agentId: 774048,
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