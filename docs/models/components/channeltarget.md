# ChannelTarget

Class for all Channel Target responses

## Example Usage

```typescript
import { ChannelTarget } from "syllable-sdk/models/components";

let value: ChannelTarget = {
  id: 739264,
  channelId: 39187,
  channelName: "<value>",
  agentId: 282807,
  agent: {
    name: "<value>",
    type: "<value>",
    promptId: 120196,
    timezone: "America/Inuvik",
    id: 118727,
    updatedAt: new Date("2022-12-15T12:13:46.383Z"),
    lastUpdatedBy: "<value>",
  },
  target: "<value>",
  targetMode: "<value>",
  fallbackTarget: "<value>",
  isTest: false,
  updatedAt: new Date("2023-03-31T00:46:25.708Z"),
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