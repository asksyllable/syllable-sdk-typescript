# DaoChannelTargetAgent

## Example Usage

```typescript
import { DaoChannelTargetAgent } from "syllable-sdk/models/components";

let value: DaoChannelTargetAgent = {
  name: "<value>",
  type: "<value>",
  promptId: 692472,
  timezone: "Asia/Hovd",
  id: 265389,
  updatedAt: new Date("2023-07-28T11:31:00.474Z"),
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `promptId`                                                                                    | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `customMessageId`                                                                             | *number*                                                                                      | FALSE                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | N/A                                                                                           |