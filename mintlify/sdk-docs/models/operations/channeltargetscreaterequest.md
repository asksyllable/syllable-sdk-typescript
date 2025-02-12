---
title: 'ChannelTargetsCreateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 405373,
  channelTargetCreateRequest: {
    agentId: 321043,
    channelId: 29950,
    target: "<value>",
    targetMode: "sms",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetCreateRequest`                                                                   | [components.ChannelTargetCreateRequest](/sdk-docs/models/components/channeltargetcreaterequest) | TRUE                                                                             | N/A                                                                                            |