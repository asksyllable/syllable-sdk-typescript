# ListResponseCustomMessageResponse

## Example Usage

```typescript
import { ListResponseCustomMessageResponse } from "syllable-sdk/models/components";

let value: ListResponseCustomMessageResponse = {
  items: [
    {
      name: "<value>",
      text: "<value>",
      rules: [
        {
          description: "flawless doubtfully beneath abscond which",
          timeRangeStart: "09:00",
          timeRangeEnd: "17:00",
          date: "2025-01-01",
          daysOfWeek: [
            "mo",
            "tu",
            "we",
            "th",
            "fr",
          ],
          invert: false,
          text: "Sorry, we're closed today",
        },
      ],
      id: 945027,
      updatedAt: new Date("2025-12-23T02:40:59.586Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 376741,
  pageSize: 966148,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CustomMessageResponse](../../models/components/custommessageresponse.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |