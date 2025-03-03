---
title: 'ChannelTargetsCreateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 816421,
  channelTargetCreateRequest: {
    agentId: 807564,
    channelId: 51007,
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