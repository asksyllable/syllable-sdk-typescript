# CustomMessageUpdateRequest

## Example Usage

```typescript
import { CustomMessageUpdateRequest } from "syllable-sdk/models/components";

let value: CustomMessageUpdateRequest = {
  name: "<value>",
  text: "<value>",
  id: 131797,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `name`                          | *string*                        | :heavy_check_mark:              | The name of the custom message  |
| `text`                          | *string*                        | :heavy_check_mark:              | The text of the custom message  |
| `label`                         | *string*                        | :heavy_minus_sign:              | The label of the custom message |
| `id`                            | *number*                        | :heavy_check_mark:              | The ID of the custom message    |
| `type`                          | *string*                        | :heavy_minus_sign:              | N/A                             |