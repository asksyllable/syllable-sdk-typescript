# ListResponseCustomMessage

## Example Usage

```typescript
import { ListResponseCustomMessage } from "syllable-sdk/models/components";

let value: ListResponseCustomMessage = {
  items: [
    {
      name: "<value>",
      text: "<value>",
      id: 929297,
    },
  ],
  page: 318569,
  pageSize: 667411,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomMessage](../../models/components/custommessage.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |