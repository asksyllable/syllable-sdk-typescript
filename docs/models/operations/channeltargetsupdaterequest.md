# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 76956,
  targetId: 518835,
  channelTarget: {
    id: 306810,
    channelId: 577543,
    channelName: "<value>",
    agentId: 959434,
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