# ListResponseChannel

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      name: "syllable-webchat",
      channelService: "twilio",
      supportedModes: "chat,voice",
      id: 976762,
      config: {
        telephony: {
          preInputTimeout: 1.2,
          overallInputTimeout: 20,
        },
      },
    },
  ],
  page: 0,
  pageSize: 25,
  totalPages: 4,
  totalCount: 100,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.Channel](../../models/components/channel.md)[]         | :heavy_check_mark:                                                 | List of items returned from the query                              |                                                                    |
| `page`                                                             | *number*                                                           | :heavy_check_mark:                                                 | The page number of the results (0-based)                           | 0                                                                  |
| `pageSize`                                                         | *number*                                                           | :heavy_check_mark:                                                 | The number of items returned per page                              | 25                                                                 |
| `totalPages`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of pages of results given the indicated page size | 4                                                                  |
| `totalCount`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of items returned from the query                  | 100                                                                |