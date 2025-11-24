# JMESPathExpression

See https://jmespath.org/specification.html#grammar

## Example Usage

```typescript
import { JMESPathExpression } from "syllable-sdk/models/components";

let value: JMESPathExpression = {
  expression: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `expression`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The expression to evaluate.                                                            |
| `type`                                                                                 | [components.JMESPathExpressionType](../../models/components/jmespathexpressiontype.md) | :heavy_minus_sign:                                                                     | JMESPath expression.                                                                   |