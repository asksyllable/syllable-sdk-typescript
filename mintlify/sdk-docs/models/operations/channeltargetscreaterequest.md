---
title: 'ChannelTargetsCreateRequest'
---

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
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetCreateRequest`                                                                   | [components.ChannelTargetCreateRequest](/sdk-docs/models/components/channeltargetcreaterequest) | TRUE                                                                             | N/A                                                                                            |