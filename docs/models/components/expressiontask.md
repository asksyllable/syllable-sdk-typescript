# ExpressionTask

## Example Usage

```typescript
import { ExpressionTask } from "syllable-sdk/models/components";

let value: ExpressionTask = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | A unique identifier for the task.                                                  |
| `config`                                                                           | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `variables`                                                                        | [components.Variable](../../models/components/variable.md)[]                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [components.ContextTaskMetadata](../../models/components/contexttaskmetadata.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `tool`                                                                             | [components.ContextToolInfo](../../models/components/contexttoolinfo.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `version`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `inputs`                                                                           | [components.InputParameter](../../models/components/inputparameter.md)[]           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `expression`                                                                       | *components.Expression*                                                            | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `output`                                                                           | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `on`                                                                               | [components.ExpressionTaskEvents](../../models/components/expressiontaskevents.md) | :heavy_minus_sign:                                                                 | Actions to perform when events occur (enter, submit).                              |