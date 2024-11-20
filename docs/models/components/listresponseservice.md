# ListResponseService

## Example Usage

```typescript
import { ListResponseService } from "syllable-sdk/models/components";

let value: ListResponseService = {
  items: [
    {
      name: "<value>",
      description: "furiously unless factorise",
      id: 667411,
      tools: [
        "<value>",
      ],
    },
  ],
  page: 131797,
  pageSize: 716327,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Service](../../models/components/service.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |