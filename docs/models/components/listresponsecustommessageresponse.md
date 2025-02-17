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
          description:
            "apud testing phooey restfully circulate emphasize sarong in-joke oof behind",
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
      id: 128860,
      updatedAt: new Date("2024-03-06T08:56:27.585Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 956406,
  pageSize: 187131,
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