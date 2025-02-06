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
            description: "burgeon pupil great vice",
            parameters: {},
          },
        },
      },
      serviceId: 117320,
      id: 107004,
      lastUpdated: new Date("2024-10-08T07:19:47.979Z"),
      lastUpdatedBy: "<value>",
    },
  ],
  page: 745398,
  pageSize: 848151,
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