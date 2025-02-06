---
title: 'ChannelTargetsUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 715143,
  targetId: 558051,
  channelTargetUpdateRequest: {
    agentId: 704948,
    channelId: 418637,
    target: "<value>",
    targetMode: "voice",
    id: 11355,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](/sdk-docs/models/components/channeltargetupdaterequest) | TRUE                                                                             | N/A                                                                                            |