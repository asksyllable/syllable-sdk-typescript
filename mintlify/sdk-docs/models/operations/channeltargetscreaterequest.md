---
title: 'ChannelTargetsCreateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsCreateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsCreateRequest = {
  channelId: 41179,
  channelTargetCreateRequest: {
    agentId: 816421,
    channelId: 807564,
    target: "<value>",
    targetMode: "voice",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetCreateRequest`                                                                   | [components.ChannelTargetCreateRequest](/sdk-docs/models/components/channeltargetcreaterequest) | TRUE                                                                             | N/A                                                                                            |