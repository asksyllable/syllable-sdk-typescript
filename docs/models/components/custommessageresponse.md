# CustomMessageResponse

## Example Usage

```typescript
import { CustomMessageResponse } from "syllable-sdk/models/components";

let value: CustomMessageResponse = {
  name: "<value>",
  text: "<value>",
  id: 592042,
  updatedAt: new Date("2023-09-20T04:30:50.868Z"),
  lastUpdatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the custom message                                                                |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The text of the custom message                                                                |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The label of the custom message                                                               |
| `rules`                                                                                       | [components.DaoCustomMessageRule](../../models/components/daocustommessagerule.md)[]          | :heavy_minus_sign:                                                                            | Rules for time-specific message variants                                                      |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the custom message                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the most recent update to the custom message                                     |
| `agentCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of agents using the custom message                                                 |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the user who most recently updated the custom message                    |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |