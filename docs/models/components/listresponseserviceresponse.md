# ListResponseServiceResponse

## Example Usage

```typescript
import { ListResponseServiceResponse } from "syllable-sdk/models/components";

let value: ListResponseServiceResponse = {
  items: [
    {
      name: "<value>",
      description:
        "firm lieu limply decide seemingly almost recount venture bus questioningly",
      id: 886961,
      lastUpdated: new Date("2024-11-09T05:36:12.706Z"),
      lastUpdatedBy: "<value>",
      tools: [
        "<value>",
      ],
    },
  ],
  page: 133461,
  pageSize: 980581,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ServiceResponse](../../models/components/serviceresponse.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |