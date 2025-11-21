# ContextTask

Metadata describing a context task driven by a tool call.

## Example Usage

```typescript
import { ContextTask } from "syllable-sdk/models/components";

let value: ContextTask = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `type`                            | *string*                          | :heavy_minus_sign:                | The type of the task.             |
| `id`                              | *string*                          | :heavy_minus_sign:                | A unique identifier for the task. |
| `additionalProperties`            | Record<string, *any*>             | :heavy_minus_sign:                | N/A                               |