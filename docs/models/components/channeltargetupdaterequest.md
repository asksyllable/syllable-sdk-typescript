# ChannelTargetUpdateRequest

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
| `id`               | *number*           | :heavy_check_mark: | N/A                |
| `channelId`        | *number*           | :heavy_check_mark: | N/A                |
| `agentId`          | *number*           | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_check_mark: | N/A                |
| `targetMode`       | *string*           | :heavy_check_mark: | N/A                |
| `fallbackTarget`   | *string*           | :heavy_minus_sign: | N/A                |
| `isTest`           | *boolean*          | :heavy_minus_sign: | N/A                |