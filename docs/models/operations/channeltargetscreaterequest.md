# ChannelTargetsCreateRequest

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 428769,
  channelTargetCreateRequest: {
    channelId: 135474,
    agentId: 298282,
    target: "<value>",
    targetMode: "<value>",
    fallbackTarget: "<value>",
    isTest: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `channelTargetCreateRequest`                                                                   | [components.ChannelTargetCreateRequest](../../models/components/channeltargetcreaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |