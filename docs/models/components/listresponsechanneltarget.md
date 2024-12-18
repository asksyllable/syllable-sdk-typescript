# ListResponseChannelTarget

## Example Usage

```typescript
import { ListResponseChannelTarget } from "syllable-sdk/models/components";

let value: ListResponseChannelTarget = {
  items: [
    {
      id: 196582,
      channelId: 368725,
      channelName: "<value>",
      agentId: 820994,
      agent: {
        name: "<value>",
        type: "<value>",
        promptId: 97101,
        timezone: "Europe/Samara",
        id: 96098,
        updatedAt: new Date("2024-12-06T04:47:23.164Z"),
        lastUpdatedBy: "<value>",
      },
      target: "<value>",
      targetMode: "<value>",
      fallbackTarget: "<value>",
      isTest: false,
      updatedAt: new Date("2023-05-29T15:24:04.349Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 976762,
  pageSize: 604846,
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