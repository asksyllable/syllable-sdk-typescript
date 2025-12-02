# CelExpression

See https://github.com/google/cel-spec/blob/master/doc/langdef.md

## Example Usage

```typescript
import { CelExpression } from "syllable-sdk/models/components";

let value: CelExpression = {
  expression: "<value>",
  type: "cel",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `expression`                       | *string*                           | :heavy_check_mark:                 | The expression to evaluate.        |
| `type`                             | *"cel"*                            | :heavy_check_mark:                 | Google Common Expression Language. |