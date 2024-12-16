# ChannelTargetsCreateRequest

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 869489,
  channelTargetCreateRequest: {
    channelId: 454162,
    agentId: 326701,
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