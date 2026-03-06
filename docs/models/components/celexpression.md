# CelExpression

Google CEL expression object.

Use this object form when you want CEL syntax:
{"type": "cel", "expression": "inputs.count + 1"}
See https://github.com/google/cel-spec/blob/master/doc/langdef.md

## Example Usage

```typescript
import { CelExpression } from "syllable-sdk/models/components";

let value: CelExpression = {
  expression: "inputs.provided_dob == patient_dob",
  type: "cel",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `expression`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | CEL expression string.                                                                    | inputs.can_sign_consent == true                                                           |
| `type`                                                                                    | *"cel"*                                                                                   | :heavy_check_mark:                                                                        | CEL expression language selector. Use with object form {"type":"cel","expression":"..."}. |                                                                                           |