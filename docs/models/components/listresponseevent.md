# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2024-06-27T12:26:18.703Z"),
    },
  ],
  page: 4695,
  pageSize: 677817,
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