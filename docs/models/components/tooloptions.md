# ToolOptions

The options for a tool call.

## Example Usage

```typescript
import { ToolOptions } from "syllable-sdk/models/components";

let value: ToolOptions = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `propagateToolResult`                                            | *boolean*                                                        | :heavy_minus_sign:                                               | Whether the tool call result should be propagated to the caller. |