# ListResponseChannelTarget

## Example Usage

```typescript
import { ListResponseChannelTarget } from "syllable-sdk/models/components";

let value: ListResponseChannelTarget = {
  items: [
    {
      id: 110375,
      channelId: 656330,
      channelName: "<value>",
      agentId: 138183,
      agent: {
        name: "<value>",
        type: "<value>",
        promptId: 196582,
        timezone: "America/Noronha",
        id: 820994,
        updatedAt: new Date("2022-04-17T10:09:07.050Z"),
        lastUpdatedBy: "<value>",
      },
      target: "<value>",
      targetMode: "<value>",
      updatedAt: new Date("2024-07-07T09:18:10.249Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 96098,
  pageSize: 976460,
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