# ListResponseTool

## Example Usage

```typescript
import { ListResponseTool } from "syllable-sdk/models/components";

let value: ListResponseTool = {
  items: [
    {
      name: "<value>",
      definition: {
        tool: {
          function: {
            name: "<value>",
            description:
              "gee fondly handful electronics mid athletic frequent and everlasting versus",
            parameters: {},
          },
        },
      },
      serviceId: 633998,
      id: 867290,
    },
  ],
  page: 940210,
  pageSize: 750765,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `items`                                              | [components.Tool](../../models/components/tool.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `page`                                               | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `pageSize`                                           | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `totalPages`                                         | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `totalCount`                                         | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |