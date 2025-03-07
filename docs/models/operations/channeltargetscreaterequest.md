# ChannelTargetsCreateRequest

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 748023,
  channelTargetCreateRequest: {
    agentId: 793568,
    channelId: 300651,
    target: "<value>",
    targetMode: "email",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `channelTargetCreateRequest`                                                                   | [components.ChannelTargetCreateRequest](../../models/components/channeltargetcreaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |