# CustomMessageUpdateRequest

## Example Usage

```typescript
import { CustomMessageUpdateRequest } from "syllable-sdk/models/components";

let value: CustomMessageUpdateRequest = {
  name: "<value>",
  text: "<value>",
  rules: [
    {
      description:
        "sightseeing contravene jaggedly programme ecliptic make woot saw husband",
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
  id: 486410,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the custom message                                                 |
| `text`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The text of the custom message                                                 |
| `label`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The label of the custom message                                                |
| `rules`                                                                        | [components.CustomMessageRule](../../models/components/custommessagerule.md)[] | :heavy_minus_sign:                                                             | Rules for time-specific message variants                                       |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | The ID of the custom message                                                   |
| `type`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |