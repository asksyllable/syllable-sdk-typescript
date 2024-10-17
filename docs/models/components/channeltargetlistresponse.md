# ChannelTargetListResponse

## Example Usage

```typescript
import { ChannelTargetListResponse } from "syllable-sdk/models/components";

let value: ChannelTargetListResponse = {
  targets: [
    {
      id: 799159,
      channelId: 461479,
      channelName: "<value>",
      agentId: 780529,
      target: "<value>",
      targetMode: "<value>",
      fallbackTarget: "<value>",
      isTest: false,
    },
  ],
  page: 118274,
  pageSize: 639921,
  totalPages: 143353,
  totalCount: 944669,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `targets`                                                              | [components.ChannelTarget](../../models/components/channeltarget.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |