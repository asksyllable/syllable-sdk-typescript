---
title: 'CustomMessageResponse'
---

## Example Usage

```typescript
import { CustomMessageResponse } from "syllable-sdk/models/components";

let value: CustomMessageResponse = {
  name: "<value>",
  text: "<value>",
  id: 572252,
  updatedAt: new Date("2022-09-02T11:56:21.354Z"),
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | TRUE                                                                            | The name of the custom message                                                                |
| `text`                                                                                        | *string*                                                                                      | TRUE                                                                            | The text of the custom message                                                                |
| `label`                                                                                       | *string*                                                                                      | FALSE                                                                            | The label of the custom message                                                               |
| `rules`                                                                                       | [components.DaoCustomMessageRule](/sdk-docs/models/components/daocustommessagerule)[]          | FALSE                                                                            | Rules for time-specific message variants                                                      |
| `id`                                                                                          | *number*                                                                                      | TRUE                                                                            | The ID of the custom message                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | TRUE                                                                            | Timestamp of the most recent update to the custom message                                     |
| `agentCount`                                                                                  | *number*                                                                                      | FALSE                                                                            | The number of agents using the custom message                                                 |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | TRUE                                                                            | The email address of the user who most recently updated the custom message                    |
| `type`                                                                                        | *string*                                                                                      | FALSE                                                                            | N/A                                                                                           |