# ListResponseAvailableTarget

## Example Usage

```typescript
import { ListResponseAvailableTarget } from "syllable-sdk/models/components";

let value: ListResponseAvailableTarget = {
  items: [
    {
      subOrganizationId: 944669,
      channelId: 521848,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 414662,
  pageSize: 264555,
  totalPages: 774234,
  totalCount: 456150,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.AvailableTarget](../../models/components/availabletarget.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |