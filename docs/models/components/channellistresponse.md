# ChannelListResponse

## Example Usage

```typescript
import { ChannelListResponse } from "syllable-sdk/models/components";

let value: ChannelListResponse = {
  channels: [
    {
      id: "<id>",
      name: "<value>",
      channelService: "<value>",
      supportedModes: "<value>",
    },
  ],
  page: 963663,
  pageSize: 383441,
  totalPages: 791725,
  totalCount: 528895,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `channels`                                                 | [components.Channel](../../models/components/channel.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |