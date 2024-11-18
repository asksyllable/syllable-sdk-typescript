# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 574325,
  targetId: 653201,
  channelTarget: {
    id: 652103,
    channelId: 431418,
    channelName: "<value>",
    agentId: 896547,
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