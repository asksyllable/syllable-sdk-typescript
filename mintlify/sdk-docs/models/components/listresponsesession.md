---
title: 'ListResponseSession'
---

## Example Usage

```typescript
import { ListResponseSession } from "syllable-sdk/models/components";

let value: ListResponseSession = {
  items: [
    {
      timestamp: new Date("2022-10-11T12:25:32.503Z"),
    },
  ],
  page: 849039,
  pageSize: 33304,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Session](sdk-docs/models/components/session)[] | TRUE                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | TRUE                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | TRUE                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | FALSE                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | FALSE                                         | N/A                                                        |