# CustomMessageCreateRequest

## Example Usage

```typescript
import { CustomMessageCreateRequest } from "syllable-sdk/models/components";

let value: CustomMessageCreateRequest = {
  name: "<value>",
  text: "<value>",
  rules: [
    {
      description: "given brochure hence hence per formal aw cutover",
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the custom message                                                 |
| `text`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The text of the custom message                                                 |
| `label`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The label of the custom message                                                |
| `rules`                                                                        | [components.CustomMessageRule](../../models/components/custommessagerule.md)[] | :heavy_minus_sign:                                                             | Rules for time-specific message variants                                       |
| `type`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |