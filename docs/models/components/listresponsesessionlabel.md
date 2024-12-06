# ListResponseSessionLabel

## Example Usage

```typescript
import { ListResponseSessionLabel } from "syllable-sdk/models/components";

let value: ListResponseSessionLabel = {
  items: [
    {
      sessionId: 240829,
      type: "<value>",
      code: "<value>",
      userEmail: "<value>",
      id: 100294,
      timestamp: "<value>",
    },
  ],
  page: 16429,
  pageSize: 929530,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.SessionLabel](../../models/components/sessionlabel.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |