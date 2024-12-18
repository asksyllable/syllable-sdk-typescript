# DaoCustomMessageRule

## Example Usage

```typescript
import { DaoCustomMessageRule } from "syllable-sdk/models/components";

let value: DaoCustomMessageRule = {
  description: "aha well-to-do below outrun",
  invert: false,
  text: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `description`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The description of the rule                                                                           |
| `timeRangeStart`                                                                                      | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The start of the time range for the rule in 24-hour format hh:mm (should be null for "all day" cases) |
| `timeRangeEnd`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The end of the time range for the rule in 24-hour format hh:mm (should be null for "all day" cases)   |
| `date`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The date for the rule in YYYY-MM-DD format                                                            |
| `daysOfWeek`                                                                                          | [components.DayOfWeek](../../models/components/dayofweek.md)[]                                        | :heavy_minus_sign:                                                                                    | The days of the week for the rule                                                                     |
| `invert`                                                                                              | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the rule logic should be inverted (i.e. "not")                                                |
| `text`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Message text associated with the rule                                                                 |