# ListResponseServiceResponse

## Example Usage

```typescript
import { ListResponseServiceResponse } from "syllable-sdk/models/components";

let value: ListResponseServiceResponse = {
  items: [
    {
      name: "<value>",
      description: "experience confiscate uniform from psst",
      id: 999809,
      lastUpdated: new Date("2023-08-05T04:42:47.563Z"),
      lastUpdatedBy: "<value>",
      tools: [
        "<value>",
      ],
    },
  ],
  page: 534908,
  pageSize: 290248,
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