# CelExpression

See https://github.com/google/cel-spec/blob/master/doc/langdef.md

## Example Usage

```typescript
import { CelExpression } from "syllable-sdk/models/components";

let value: CelExpression = {
  expression: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `expression`                       | *string*                           | :heavy_check_mark:                 | The expression to evaluate.        |
| `type`                             | *string*                           | :heavy_minus_sign:                 | Google Common Expression Language. |