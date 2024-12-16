# CustomMessageUpdateRequest

## Example Usage

```typescript
import { CustomMessageUpdateRequest } from "syllable-sdk/models/components";

let value: CustomMessageUpdateRequest = {
  name: "<value>",
  text: "<value>",
  id: 19193,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the custom message                                                       |
| `text`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The text of the custom message                                                       |
| `label`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The label of the custom message                                                      |
| `rules`                                                                              | [components.DaoCustomMessageRule](../../models/components/daocustommessagerule.md)[] | :heavy_minus_sign:                                                                   | Rules for time-specific message variants                                             |
| `id`                                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | The ID of the custom message                                                         |
| `type`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |