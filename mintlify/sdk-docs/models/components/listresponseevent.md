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
| `items`                                                | [components.Event](/sdk-docs/models/components/event)[] | TRUE                                     | N/A                                                    |
| `page`                                                 | *number*                                               | TRUE                                     | N/A                                                    |
| `pageSize`                                             | *number*                                               | TRUE                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | FALSE                                     | N/A                                                    |
| `totalCount`                                           | *number*                                               | FALSE                                     | N/A                                                    |