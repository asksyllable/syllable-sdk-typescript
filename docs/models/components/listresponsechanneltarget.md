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
  totalPages: 437032,
  totalCount: 697631,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ChannelTarget](../../models/components/channeltarget.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |