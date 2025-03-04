---
title: 'ListResponseChannel'
---

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      name: "<value>",
      channelService: "sip",
      supportedModes: "[\"chat\",\"voice\"]",
      id: 511319,
    },
  ],
  page: 224317,
  pageSize: 97844,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `items`                                                    | [components.Channel](/sdk-docs/models/components/channel)[] | TRUE                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | TRUE                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | TRUE                                         | N/A                                                        |
| `totalPages`                                               | *number*                                                   | FALSE                                         | N/A                                                        |
| `totalCount`                                               | *number*                                                   | FALSE                                         | N/A                                                        |