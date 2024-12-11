# ListResponseService

## Example Usage

```typescript
import { ListResponseService } from "syllable-sdk/models/components";

let value: ListResponseService = {
  items: [
    {
      name: "<value>",
      description: "dishearten unaccountably unconscious",
      id: 692532,
      tools: [
        "<value>",
      ],
    },
  ],
  page: 725255,
  pageSize: 501324,
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