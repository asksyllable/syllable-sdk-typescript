# ChannelsListRequest

## Example Usage

```typescript
import { ChannelsListRequest } from "syllable-sdk/models/operations";

let value: ChannelsListRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page`                                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `searchFields`                                                                 | [components.ChannelProperties](../../models/components/channelproperties.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `searchFieldValues`                                                            | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.ChannelProperties](../../models/components/channelproperties.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `orderByDirection`                                                             | [components.OrderByDirection](../../models/components/orderbydirection.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `fields`                                                                       | [components.ChannelProperties](../../models/components/channelproperties.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `startDatetime`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endDatetime`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |