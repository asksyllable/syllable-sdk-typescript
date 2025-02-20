# ListResponseEvent

## Example Usage

```typescript
import { ListResponseEvent } from "syllable-sdk/models/components";

let value: ListResponseEvent = {
  items: [
    {
      timestamp: new Date("2025-01-06T13:32:43.889Z"),
      source: "tool-call",
      category: "automation",
      type: "phone-transfer",
      userId: "+18042221111",
      description: "Transfer to phone number +18042221111",
    },
  ],
  page: 245367,
  pageSize: 420539,
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