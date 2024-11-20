# ListResponseAvailableTarget

## Example Usage

```typescript
import { ListResponseAvailableTarget } from "syllable-sdk/models/components";

let value: ListResponseAvailableTarget = {
  items: [
    {
      organizationId: 521848,
      channelId: 414662,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 264555,
  pageSize: 774234,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.AvailableTarget](../../models/components/availabletarget.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |