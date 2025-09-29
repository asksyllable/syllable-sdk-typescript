# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2023-05-06T22:39:20.772Z"),
      source: "tool-call",
      category: "automation",
      type: "phone-transfer",
      userId: "+18042221111",
      description: "Transfer to phone number +18042221111",
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
| `items`                                                            | [components.Event](../../models/components/event.md)[]             | :heavy_check_mark:                                                 | List of items returned from the query                              |                                                                    |
| `page`                                                             | *number*                                                           | :heavy_check_mark:                                                 | The page number of the results (0-based)                           | 0                                                                  |
| `pageSize`                                                         | *number*                                                           | :heavy_check_mark:                                                 | The number of items returned per page                              | 25                                                                 |
| `totalPages`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of pages of results given the indicated page size | 4                                                                  |
| `totalCount`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of items returned from the query                  | 100                                                                |