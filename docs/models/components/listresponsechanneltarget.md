# ListResponseChannelTarget

## Example Usage

```typescript
import { ListResponseChannelTarget } from "syllable-sdk/models/components";

let value: ListResponseChannelTarget = {
  items: [
    {
      id: 612096,
      channelId: 616934,
      channelName: "<value>",
      agentId: 943749,
      target: "<value>",
      targetMode: "<value>",
      fallbackTarget: "<value>",
      isTest: false,
    },
  ],
  page: 681820,
  pageSize: 359508,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ChannelTarget](../../models/components/channeltarget.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |