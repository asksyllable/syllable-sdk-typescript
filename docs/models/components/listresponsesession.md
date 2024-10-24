# ListResponseSession

## Example Usage

```typescript
import { ListResponseSession } from "syllable-sdk/models/components";

let value: ListResponseSession = {
  items: [
    {
      timestamp: new Date("2022-05-12T17:39:01.246Z"),
    },
  ],
  page: 296140,
  pageSize: 118727,
  totalPages: 317983,
  totalCount: 414263,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Session](../../models/components/session.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |