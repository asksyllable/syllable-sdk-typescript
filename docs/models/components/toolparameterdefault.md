# ToolParameterDefault

The default value for a parameter of the tool call.

## Example Usage

```typescript
import { ToolParameterDefault } from "syllable-sdk/models/components";

let value: ToolParameterDefault = {
  transform: {},
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transform`                                                                                                                                                                                                                             | [components.ToolParameterTransform](../../models/components/toolparametertransform.md)                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                      | A transform to be applied to the value of a parameter.<br/><br/>Either `value` or `format` must be set:<br/>- `value` is any arbitrary value: string, list or dictionary.<br/>- `format` is a string composed of other parameters or context variables. |