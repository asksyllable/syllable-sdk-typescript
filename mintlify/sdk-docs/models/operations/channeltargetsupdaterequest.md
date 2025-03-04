---
title: 'ChannelTargetsUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 280859,
  targetId: 947822,
  channelTargetUpdateRequest: {
    agentId: 728559,
    channelId: 329651,
    target: "<value>",
    targetMode: "email",
    id: 108165,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](/sdk-docs/models/components/channeltargetupdaterequest) | TRUE                                                                             | N/A                                                                                            |