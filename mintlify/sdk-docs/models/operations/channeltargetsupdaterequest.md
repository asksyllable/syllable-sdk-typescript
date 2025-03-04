---
title: 'ChannelTargetsUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetsUpdateRequest } from "syllable-sdk/models/operations";

let value: ChannelTargetsUpdateRequest = {
  channelId: 169819,
  targetId: 148379,
  channelTargetUpdateRequest: {
    agentId: 773259,
    channelId: 567693,
    target: "<value>",
    targetMode: "email",
    id: 982248,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `targetId`                                                                                     | *number*                                                                                       | TRUE                                                                             | N/A                                                                                            |
| `channelTargetUpdateRequest`                                                                   | [components.ChannelTargetUpdateRequest](/sdk-docs/models/components/channeltargetupdaterequest) | TRUE                                                                             | N/A                                                                                            |