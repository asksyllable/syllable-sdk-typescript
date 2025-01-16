# ListResponseService

## Example Usage

```typescript
import { ListResponseService } from "syllable-sdk/models/components";

let value: ListResponseService = {
  items: [
    {
      name: "<value>",
      description: "jaggedly hence runny knavishly",
      id: 131289,
      tools: [
        "<value>",
      ],
    },
  ],
  page: 604118,
  pageSize: 382808,
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