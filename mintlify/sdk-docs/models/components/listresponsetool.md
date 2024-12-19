---
title: 'ListResponseTool'
---

## Example Usage

```typescript
import { ListResponseTool } from "syllable-sdk/models/components";

let value: ListResponseTool = {
  items: [
    {
      name: "<value>",
      serviceId: 956406,
      id: 187131,
    },
  ],
  page: 903984,
  pageSize: 543806,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `items`                                              | [components.Tool](/sdk-docs/models/components/tool)[] | TRUE                                   | N/A                                                  |
| `page`                                               | *number*                                             | TRUE                                   | N/A                                                  |
| `pageSize`                                           | *number*                                             | TRUE                                   | N/A                                                  |
| `totalPages`                                         | *number*                                             | FALSE                                   | N/A                                                  |
| `totalCount`                                         | *number*                                             | FALSE                                   | N/A                                                  |