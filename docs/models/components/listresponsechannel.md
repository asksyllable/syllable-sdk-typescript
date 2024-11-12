# ListResponseChannel

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      name: "<value>",
      channelService: "webchat",
      id: 870013,
    },
  ],
  page: 978619,
  pageSize: 799159,
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