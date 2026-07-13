# TargetFilterRule

A single predicate over one enrichment attribute of an outbound request.

``field`` names a key in the request's enrichment payload (e.g. ``line_type``, ``carrier_name``,
``mcc``, ``mnc``). Any attribute captured at lookup time can be filtered on with no code change.

## Example Usage

```typescript
import { TargetFilterRule } from "syllable-sdk/models/components";

let value: TargetFilterRule = {
  field: "line_type",
  op: "neq",
  values: [
    "landline",
    "fixedVoip",
    "nonFixedVoip",
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `field`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | Enrichment attribute to match on (a key in the request enrichment payload).     | **Example 1:** line_type<br/>**Example 2:** carrier_name<br/>**Example 3:** mnc |
| `op`                                                                            | [components.FilterOp](../../models/components/filterop.md)                      | :heavy_check_mark:                                                              | Comparison operator for a single target-filter rule.                            |                                                                                 |
| `values`                                                                        | *string*[]                                                                      | :heavy_minus_sign:                                                              | Values to compare against. Ignored for exists / not_exists.                     | [<br/>"landline",<br/>"fixedVoip",<br/>"nonFixedVoip"<br/>]                     |