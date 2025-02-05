---
title: 'ListResponseCustomMessageResponse'
---

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
          description: "as unfreeze than",
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
      id: 13236,
      updatedAt: new Date("2024-01-16T13:37:49.640Z"),
      lastUpdatedBy: "user@email.com",
    },
  ],
  page: 148141,
  pageSize: 981830,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CustomMessageResponse](/sdk-docs/models/components/custommessageresponse)[] | TRUE                                                                     | N/A                                                                                    |
| `page`                                                                                 | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | TRUE                                                                     | N/A                                                                                    |
| `totalPages`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | FALSE                                                                     | N/A                                                                                    |