# ListResponseService

## Example Usage

```typescript
import { ListResponseService } from "syllable-sdk/models/components";

let value: ListResponseService = {
  items: [
    {
      name: "<value>",
      description: "afore octave wombat though fuss um",
      id: 968972,
      tools: [
        "<value>",
      ],
    },
  ],
  page: 904949,
  pageSize: 296556,
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