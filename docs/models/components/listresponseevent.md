# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2022-06-26T19:05:08.010Z"),
    },
  ],
  page: 653108,
  pageSize: 253291,
  totalPages: 466311,
  totalCount: 244425,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [components.Event](../../models/components/event.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `page`                                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |