# ListResponseTool

## Example Usage

```typescript
import { ListResponseTool } from "syllable-sdk/models/components";

let value: ListResponseTool = {
  items: [
    {
      name: "<value>",
      serviceId: 97844,
      id: 862192,
    },
  ],
  page: 972920,
  pageSize: 960835,
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