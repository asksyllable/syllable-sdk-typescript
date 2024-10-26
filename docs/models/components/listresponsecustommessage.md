# ListResponseCustomMessage

## Example Usage

```typescript
import { ListResponseCustomMessage } from "syllable-sdk/models/components";

let value: ListResponseCustomMessage = {
  items: [
    {
      name: "<value>",
      text: "<value>",
      id: 196582,
    },
  ],
  page: 368725,
  pageSize: 820994,
  totalPages: 97101,
  totalCount: 837945,
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