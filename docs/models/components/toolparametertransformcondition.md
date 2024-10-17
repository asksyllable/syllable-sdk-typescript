# ToolParameterTransformCondition

A condition to be met for a transform to be applied to the value of a parameter.

## Example Usage

```typescript
import { ToolParameterTransformCondition } from "syllable-sdk/models/components";

let value: ToolParameterTransformCondition = {
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `key`                                     | *string*                                  | :heavy_check_mark:                        | The name of the parameter to check.       |
| `value`                                   | *string*                                  | :heavy_check_mark:                        | The value to check against the parameter. |
| `operator`                                | *string*                                  | :heavy_minus_sign:                        | N/A                                       |