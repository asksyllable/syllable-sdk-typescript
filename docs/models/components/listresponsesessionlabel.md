# ListResponseSessionLabel

## Example Usage

```typescript
import { ListResponseSessionLabel } from "syllable-sdk/models/components";

let value: ListResponseSessionLabel = {
  items: [
    {
      sessionId: 263767,
      type: "human-rating",
      code: "GOOD",
      userEmail: "<value>",
      issueCategories: [
        "Speech transcription (STT)",
      ],
      id: 925395,
      timestamp: "<value>",
    },
  ],
  page: 664666,
  pageSize: 423054,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.SessionLabel](../../models/components/sessionlabel.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `pageSize`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalPages`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |