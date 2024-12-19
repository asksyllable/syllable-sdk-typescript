# ListResponseChannel

## Example Usage

```typescript
import { ListResponseChannel } from "syllable-sdk/models/components";

let value: ListResponseChannel = {
  items: [
    {
      name: "<value>",
      channelService: "email",
      id: 438601,
    },
  ],
  page: 988374,
  pageSize: 102044,
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