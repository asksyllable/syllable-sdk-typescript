# ChannelTargetUpdateRequest

## Example Usage

```typescript
import { ChannelTargetUpdateRequest } from "syllable-sdk/models/components";

let value: ChannelTargetUpdateRequest = {
  id: 318569,
  channelId: 667411,
  agentId: 131797,
  target: "<value>",
  targetMode: "<value>",
  fallbackTarget: "<value>",
  isTest: false,
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
| `fallbackTarget`   | *string*           | TRUE | N/A                |
| `isTest`           | *boolean*          | TRUE | N/A                |