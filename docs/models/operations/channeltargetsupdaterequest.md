# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 845154,
  targetId: 382764,
  channelTargetUpdateRequest: {
    agentId: 24769,
    channelId: 831031,
    target: "<value>",
    targetMode: "sms",
    id: 152364,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](../../models/components/channeltargetupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |