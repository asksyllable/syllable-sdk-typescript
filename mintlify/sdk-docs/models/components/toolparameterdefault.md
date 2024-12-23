---
title: 'ToolParameterDefault'
---

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
| `transform`                                                                            | [components.ToolParameterTransform](/sdk-docs/models/components/toolparametertransform) | TRUE                                                                     | A transform to be applied to the value of a parameter.                                 |