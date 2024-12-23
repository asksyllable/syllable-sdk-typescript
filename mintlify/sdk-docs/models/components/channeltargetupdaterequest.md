---
title: 'ChannelTargetUpdateRequest'
---

## Example Usage

```typescript
import { ChannelTargetUpdateRequest } from "syllable-sdk/models/components";

let value: ChannelTargetUpdateRequest = {
  id: 523248,
  channelId: 93940,
  agentId: 575947,
  target: "<value>",
  targetMode: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | TRUE | N/A                |
| `channelId`        | *number*           | TRUE | N/A                |
| `agentId`          | *number*           | TRUE | N/A                |
| `target`           | *string*           | TRUE | N/A                |
| `targetMode`       | *string*           | TRUE | N/A                |
| `fallbackTarget`   | *string*           | FALSE | N/A                |
| `isTest`           | *boolean*          | FALSE | N/A                |