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
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `channelId`                                                                                   | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `channelName`                                                                                 | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `agent`                                                                                       | [components.DaoChannelTargetAgent](/sdk-docs/models/components/daochanneltargetagent)          | TRUE                                                                            | N/A                                                                                           |
| `target`                                                                                      | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `targetMode`                                                                                  | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `fallbackTarget`                                                                              | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `isTest`                                                                                      | *boolean*                                                                                     | TRUE                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |