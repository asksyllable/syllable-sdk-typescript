# ListResponseChannelTarget

## Example Usage

```typescript
import { ListResponseChannelTarget } from "syllable-sdk/models/components";

let value: ListResponseChannelTarget = {
  items: [
    {
      id: 368725,
      channelId: 820994,
      channelName: "<value>",
      agentId: 97101,
      agent: {
        name: "<value>",
        type: "<value>",
        promptId: 837945,
        timezone: "Africa/Mogadishu",
        id: 976460,
        updatedAt: new Date("2023-05-29T15:24:04.349Z"),
        lastUpdatedBy: "<value>",
      },
      target: "<value>",
      targetMode: "<value>",
      fallbackTarget: "<value>",
      isTest: false,
      updatedAt: new Date("2024-12-06T12:43:25.190Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 604846,
  pageSize: 739264,
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