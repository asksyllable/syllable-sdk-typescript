---
title: 'ListResponseAvailableTarget'
---

## Example Usage

```typescript
import { ListResponseAvailableTarget } from "syllable-sdk/models/components";

let value: ListResponseAvailableTarget = {
  items: [
    {
      organizationId: 748664,
      channelId: 903720,
      channelName: "<value>",
      target: "<value>",
    },
  ],
  page: 83422,
  pageSize: 552193,
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