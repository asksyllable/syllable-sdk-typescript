# JMESPathExpression

JMESPath expression object.

Use this object form to explicitly mark JMESPath syntax:
{"type": "jp", "expression": "inputs.can_sign_consent == `true`"}
See https://jmespath.org/specification.html#grammar

## Example Usage

```typescript
import { JMESPathExpression } from "syllable-sdk/models/components";

let value: JMESPathExpression = {
  expression: "inputs.provided_dob == patient_dob",
  type: "jmespath",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expression`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | JMESPath expression string.                                                                              | inputs.can_sign_consent == `true`                                                                        |
| `type`                                                                                                   | [components.JMESPathExpressionType](../../models/components/jmespathexpressiontype.md)                   | :heavy_minus_sign:                                                                                       | JMESPath expression language selector. Use with object form {"type":"jp"\|"jmespath","expression":"..."}. |                                                                                                          |