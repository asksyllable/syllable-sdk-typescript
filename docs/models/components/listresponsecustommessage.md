# ListResponseCustomMessage

## Example Usage

```typescript
import { ListResponseCustomMessage } from "syllable-sdk/models/components";

let value: ListResponseCustomMessage = {
  items: [
    {
      name: "<value>",
      text: "<value>",
      id: 656330,
    },
  ],
  page: 138183,
  pageSize: 196582,
  totalPages: 368725,
  totalCount: 820994,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomMessage](../../models/components/custommessage.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalCount`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |