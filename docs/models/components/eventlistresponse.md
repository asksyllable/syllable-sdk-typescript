# EventListResponse

## Example Usage

```typescript
import { EventListResponse } from "syllable-sdk/models/components";

let value: EventListResponse = {
  events: [
    {
      timestamp: new Date("2023-01-30T00:29:44.940Z"),
    },
  ],
  page: 437032,
  pageSize: 697631,
  totalPages: 60225,
  totalCount: 666767,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `events`                                               | [components.Event](../../models/components/event.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `page`                                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |