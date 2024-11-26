# ListResponseTool

## Example Usage

```typescript
import { ListResponseTool } from "syllable-sdk/models/components";

let value: ListResponseTool = {
  items: [
    {
      name: "<value>",
      serviceId: 224317,
      id: 97844,
    },
  ],
  page: 862192,
  pageSize: 972920,
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