# ListResponseService

## Example Usage

```typescript
import { ListResponseService } from "syllable-sdk/models/components";

let value: ListResponseService = {
  items: [
    {
      name: "<value>",
      description: "within phooey presume obedience finally less over",
      id: 453697,
      tools: [
        "<value>",
      ],
    },
  ],
  page: 536579,
  pageSize: 896672,
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