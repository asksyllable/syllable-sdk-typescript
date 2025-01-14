# ListResponseToolResponse

## Example Usage

```typescript
import { ListResponseToolResponse } from "syllable-sdk/models/components";

let value: ListResponseToolResponse = {
  items: [
    {
      name: "<value>",
      definition: {
        tool: {
          function: {
            name: "<value>",
            description:
              "great vice without brace instruction ew impish loyalty",
            parameters: {},
          },
        },
      },
      serviceId: 110477,
      id: 405036,
    },
  ],
  page: 405373,
  pageSize: 321043,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.ToolResponse](../../models/components/toolresponse.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |