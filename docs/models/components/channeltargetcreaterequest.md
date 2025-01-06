# ChannelTargetCreateRequest

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
| `channelId`        | *number*           | :heavy_check_mark: | N/A                |
| `agentId`          | *number*           | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_check_mark: | N/A                |
| `targetMode`       | *string*           | :heavy_check_mark: | N/A                |
| `fallbackTarget`   | *string*           | :heavy_minus_sign: | N/A                |
| `isTest`           | *boolean*          | :heavy_minus_sign: | N/A                |