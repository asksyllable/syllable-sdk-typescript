# CaseExpression

Conditional branch expression.

Note: CaseExpression is currently reserved and not yet executed at runtime.

## Example Usage

```typescript
import { CaseExpression } from "syllable-sdk/models/components";

let value: CaseExpression = {
  case: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `case`                                                                       | [components.ConditionalValue](../../models/components/conditionalvalue.md)[] | :heavy_check_mark:                                                           | Ordered conditional branches (reserved for future runtime support).          |