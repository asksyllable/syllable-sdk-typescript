# ToolParameterTransformCondition

A condition to be met for a transform to be applied to the value of a tool parameter.

## Example Usage

```typescript
import { ToolParameterTransformCondition } from "syllable-sdk/models/components";

let value: ToolParameterTransformCondition = {
  key: "key",
  value: "value",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `key`                                                                | *string*                                                             | :heavy_check_mark:                                                   | The name of the parameter to check.                                  | key                                                                  |
| `value`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The value to check against the parameter.                            | value                                                                |
| `operator`                                                           | *"eq"*                                                               | :heavy_minus_sign:                                                   | The operator to use for the comparison. Currently only supports "eq" | eq                                                                   |