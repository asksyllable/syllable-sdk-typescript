# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2022-12-15T12:13:46.383Z"),
    },
  ],
  page: 414263,
  pageSize: 64147,
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