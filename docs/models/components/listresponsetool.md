# ListResponseTool

## Example Usage

```typescript
import { ListResponseTool } from "syllable-sdk/models/components";

let value: ListResponseTool = {
  items: [
    {
      name: "<value>",
      serviceId: 231701,
      id: 949319,
    },
  ],
  page: 941378,
  pageSize: 799203,
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