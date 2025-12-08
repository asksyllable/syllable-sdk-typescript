# ToolParameterTransformAction

The action to perform on the tool parameter value: `default` means only set the value (using the `format` field) if the parameter doesn't exist or is empty, `override` means always set the value," and `remove` means "remove the parameter value."

## Example Usage

```typescript
import { ToolParameterTransformAction } from "syllable-sdk/models/components";

let value: ToolParameterTransformAction = "override";
```

## Values

```typescript
"default" | "override" | "remove"
```