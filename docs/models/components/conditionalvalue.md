# ConditionalValue

## Example Usage

```typescript
import { ConditionalValue } from "syllable-sdk/models/components";

let value: ConditionalValue = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *any*                                                                  | :heavy_minus_sign:                                                     | Initial value of the variable.                                         |
| `valueFrom`                                                            | *components.Valuefrom*                                                 | :heavy_minus_sign:                                                     | Expression to compute initial value (mutually exclusive with value).   |
| `if`                                                                   | *components.If*                                                        | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |