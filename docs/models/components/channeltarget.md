# ChannelTarget

Class for all Channel Target responses

## Example Usage

```typescript
import { ChannelTarget } from "syllable-sdk/models/components";

let value: ChannelTarget = {
  id: 468651,
  channelId: 976762,
  channelName: "<value>",
  agentId: 604846,
  agent: {
    name: "<value>",
    type: "<value>",
    promptId: 739264,
    timezone: "Africa/Dakar",
    id: 282807,
    updatedAt: new Date("2023-05-12T17:39:01.246Z"),
    lastUpdatedBy: "<value>",
  },
  target: "<value>",
  targetMode: "<value>",
  updatedAt: new Date("2023-11-21T13:40:18.320Z"),
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `channelId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `channelName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agent`                                                                                       | [components.DaoChannelTargetAgent](../../models/components/daochanneltargetagent.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `target`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetMode`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fallbackTarget`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isTest`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |