---
title: 'ChannelTargetCreateRequest'
---

## Example Usage

```typescript
import { ChannelTargetCreateRequest } from "syllable-sdk/models/components";

let value: ChannelTargetCreateRequest = {
  channelId: 566602,
  agentId: 265389,
  target: "<value>",
  targetMode: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *number*           | TRUE | N/A                |
| `agentId`          | *number*           | TRUE | N/A                |
| `target`           | *string*           | TRUE | N/A                |
| `targetMode`       | *string*           | TRUE | N/A                |
| `fallbackTarget`   | *string*           | FALSE | N/A                |
| `isTest`           | *boolean*          | FALSE | N/A                |