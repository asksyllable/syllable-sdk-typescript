# ChannelsListRequest

## Example Usage

```typescript
import { ChannelsListRequest } from "syllable-sdk/models/operations";

let value: ChannelsListRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page`                                                                         | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | FALSE                                                             | N/A                                                                            |
| `searchFields`                                                                 | [components.ChannelProperties](../../models/components/channelproperties.md)[] | FALSE                                                             | N/A                                                                            |
| `searchFieldValues`                                                            | *string*[]                                                                     | FALSE                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.ChannelProperties](../../models/components/channelproperties.md)   | FALSE                                                             | N/A                                                                            |
| `orderByDirection`                                                             | [components.OrderByDirection](../../models/components/orderbydirection.md)     | FALSE                                                             | N/A                                                                            |
| `fields`                                                                       | [components.ChannelProperties](../../models/components/channelproperties.md)[] | FALSE                                                             | N/A                                                                            |
| `startDatetime`                                                                | *string*                                                                       | FALSE                                                             | N/A                                                                            |
| `endDatetime`                                                                  | *string*                                                                       | FALSE                                                             | N/A                                                                            |