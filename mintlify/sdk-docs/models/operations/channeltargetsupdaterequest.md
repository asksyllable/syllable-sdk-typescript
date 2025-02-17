---
title: 'ChannelTargetsUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 300403,
  targetId: 549501,
  channelTargetUpdateRequest: {
    agentId: 930819,
    channelId: 520761,
    target: "<value>",
    targetMode: "chat",
    id: 877399,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](/sdk-docs/models/components/channeltargetupdaterequest) | TRUE                                                                             | N/A                                                                                            |