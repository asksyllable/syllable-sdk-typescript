# ListResponseSession

## Example Usage

```typescript
import { ListResponseSession } from "syllable-sdk/models/components";

let value: ListResponseSession = {
  items: [
    {
      timestamp: new Date("2025-02-03T09:09:59.216Z"),
      channelManagerService: "hedy",
      channelManagerType: "web_chat_v1",
      source: "user@email.com",
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
| `items`                                                            | [components.Session](../../models/components/session.md)[]         | :heavy_check_mark:                                                 | List of items returned from the query                              |                                                                    |
| `page`                                                             | *number*                                                           | :heavy_check_mark:                                                 | The page number of the results (0-based)                           | 0                                                                  |
| `pageSize`                                                         | *number*                                                           | :heavy_check_mark:                                                 | The number of items returned per page                              | 25                                                                 |
| `totalPages`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of pages of results given the indicated page size | 4                                                                  |
| `totalCount`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of items returned from the query                  | 100                                                                |