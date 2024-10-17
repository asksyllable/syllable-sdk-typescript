# AvailableTargetsListResponse

## Example Usage

```typescript
import { AvailableTargetsListResponse } from "syllable-sdk/models/components";

let value: AvailableTargetsListResponse = {
  targets: [
    {
      channelId: 87129,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 20218,
  pageSize: 832620,
  totalPages: 778157,
  totalCount: 870013,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `targets`                                                                  | [components.AvailableTarget](../../models/components/availabletarget.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |