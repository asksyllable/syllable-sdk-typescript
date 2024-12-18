# ChannelTarget

Class for all Channel Target responses

## Example Usage

```typescript
import { ChannelTarget } from "syllable-sdk/models/components";

let value: ChannelTarget = {
  id: 39187,
  channelId: 282807,
  channelName: "<value>",
  agentId: 120196,
  agent: {
    name: "<value>",
    type: "<value>",
    promptId: 296140,
    timezone: "Africa/Tripoli",
    id: 317983,
    updatedAt: new Date("2023-03-31T00:46:25.708Z"),
    lastUpdatedBy: "<value>",
  },
  target: "<value>",
  targetMode: "<value>",
  fallbackTarget: "<value>",
  isTest: false,
  updatedAt: new Date("2022-03-12T07:20:08.678Z"),
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
| `fallbackTarget`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isTest`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |