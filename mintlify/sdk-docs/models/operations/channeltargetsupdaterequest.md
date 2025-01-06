---
title: 'ChannelTargetsUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 316542,
  targetId: 446877,
  channelTargetUpdateRequest: {
    id: 433077,
    channelId: 357347,
    agentId: 914971,
    target: "<value>",
    targetMode: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](/sdk-docs/models/components/channeltargetupdaterequest) | TRUE                                                                             | N/A                                                                                            |