# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2023-09-13T23:53:04.745Z"),
    },
  ],
  page: 265389,
  pageSize: 523248,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [components.Event](../../models/components/event.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `page`                                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |