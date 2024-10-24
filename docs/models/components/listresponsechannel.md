# ListResponseChannel

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      channelService: "<value>",
      supportedModes: "<value>",
    },
  ],
  page: 870013,
  pageSize: 978619,
  totalPages: 799159,
  totalCount: 461479,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Channel](../../models/components/channel.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |