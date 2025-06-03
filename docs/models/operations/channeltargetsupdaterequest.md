# ChannelTargetsUpdateRequest

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 903720,
  targetId: 83422,
  channelTargetUpdateRequest: {
    agentId: 1,
    channelId: 1,
    target: "+19995551234",
    targetMode: "sms",
    fallbackTarget: "+19995551235",
    id: 1,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](../../models/components/channeltargetupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |