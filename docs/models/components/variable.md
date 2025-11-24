# Variable

## Example Usage

```typescript
import { Variable } from "syllable-sdk/models/components";

let value: Variable = {
  name: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `value`                                                              | *any*                                                                | :heavy_minus_sign:                                                   | Initial value of the variable.                                       |
| `valueFrom`                                                          | *components.VariableValueFrom*                                       | :heavy_minus_sign:                                                   | Expression to compute initial value (mutually exclusive with value). |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The name of the property.                                            |
| `type`                                                               | [components.VariableType](../../models/components/variabletype.md)   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `format`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pattern`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `enum`                                                               | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `examples`                                                           | *any*[]                                                              | :heavy_minus_sign:                                                   | N/A                                                                  |