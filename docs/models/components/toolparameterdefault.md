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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `transform`                                                                            | [components.ToolParameterTransform](../../models/components/toolparametertransform.md) | :heavy_check_mark:                                                                     | The transform to apply to the value before using it as the default.                    |