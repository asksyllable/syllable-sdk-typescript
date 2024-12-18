# ChannelTargetCreateRequest

## Example Usage

```typescript
import { ChannelTargetCreateRequest } from "syllable-sdk/models/components";

let value: ChannelTargetCreateRequest = {
  channelId: 575947,
  agentId: 929297,
  target: "<value>",
  targetMode: "<value>",
  fallbackTarget: "<value>",
  isTest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *number*           | TRUE | N/A                |
| `agentId`          | *number*           | TRUE | N/A                |
| `target`           | *string*           | TRUE | N/A                |
| `targetMode`       | *string*           | TRUE | N/A                |
| `fallbackTarget`   | *string*           | TRUE | N/A                |
| `isTest`           | *boolean*          | TRUE | N/A                |