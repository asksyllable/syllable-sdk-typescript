# CustomMessageResponse

## Example Usage

```typescript
import { CustomMessageResponse } from "syllable-sdk/models/components";

let value: CustomMessageResponse = {
  name: "<value>",
  text: "<value>",
  rules: [
    {
      description: "woot purse salty even as advanced",
      timeRangeStart: "09:00",
      timeRangeEnd: "17:00",
      date: "2025-01-01",
      daysOfWeek: [
        "mo",
        "tu",
        "we",
        "th",
        "fr",
      ],
      invert: false,
      text: "Sorry, we're closed today",
    },
  ],
  id: 359978,
  updatedAt: new Date("2025-03-11T01:40:18.315Z"),
  lastUpdatedBy: "user@email.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the custom message                                                                |                                                                                               |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The text of the custom message                                                                |                                                                                               |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The label of the custom message                                                               |                                                                                               |
| `rules`                                                                                       | [components.CustomMessageRule](../../models/components/custommessagerule.md)[]                | :heavy_minus_sign:                                                                            | Rules for time-specific message variants                                                      |                                                                                               |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The ID of the custom message                                                                  |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the most recent update to the custom message                                     |                                                                                               |
| `agentCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of agents using the custom message                                                 |                                                                                               |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the user who most recently updated the custom message                    | user@email.com                                                                                |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |