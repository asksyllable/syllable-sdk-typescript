# ListResponseChannel

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      name: "<value>",
      channelService: "twilio",
      id: 798047,
    },
  ],
  page: 185636,
  pageSize: 952792,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Channel](../../models/components/channel.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |