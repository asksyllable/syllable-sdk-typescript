# InputParameter

## Example Usage

```typescript
import { InputParameter } from "syllable-sdk/models/components";

let value: InputParameter = {
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the property.                                                      |
| `type`                                                                         | [components.InputParameterType](../../models/components/inputparametertype.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `title`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `format`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `pattern`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `enum`                                                                         | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `examples`                                                                     | *any*[]                                                                        | :heavy_minus_sign:                                                             | N/A                                                                            |
| `required`                                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |