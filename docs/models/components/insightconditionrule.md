# InsightConditionRule

## Example Usage

```typescript
import { InsightConditionRule } from "syllable-sdk/models/components";

let value: InsightConditionRule = {
  ruleId: "<id>",
  source: {
    kind: "session",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ruleId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `source`                                                   | *components.Source*                                        | :heavy_check_mark:                                         | N/A                                                        |
| `field`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `operator`                                                 | [components.Operator](../../models/components/operator.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `value`                                                    | *any*                                                      | :heavy_minus_sign:                                         | N/A                                                        |