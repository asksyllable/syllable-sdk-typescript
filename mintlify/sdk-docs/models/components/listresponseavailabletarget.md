---
title: 'ListResponseAvailableTarget'
---

## Example Usage

```typescript
import { ListResponseAvailableTarget } from "syllable-sdk/models/components";

let value: ListResponseAvailableTarget = {
  items: [
    {
      organizationId: 185636,
      channelId: 952792,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 687488,
  pageSize: 215507,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.AvailableTarget](/sdk-docs/models/components/availabletarget)[] | TRUE                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `pageSize`                                                                 | *number*                                                                   | TRUE                                                         | N/A                                                                        |
| `totalPages`                                                               | *number*                                                                   | FALSE                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | FALSE                                                         | N/A                                                                        |