# ListResponseAvailableTarget

## Example Usage

```typescript
import { ListResponseAvailableTarget } from "syllable-sdk/models/components";

let value: ListResponseAvailableTarget = {
  items: [
    {
      organizationId: 466311,
      channelId: 244425,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 158969,
  pageSize: 110375,
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