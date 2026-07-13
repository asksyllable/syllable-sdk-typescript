# TargetFilters

Generic target filter for an outbound campaign: a flat list of rules over request enrichment.

A request is *dialable* when it matches the ruleset (``match='all'`` -> every rule; ``'any'`` ->
at least one rule); non-matching requests are skipped. ``on_unknown`` decides the fate of
requests whose enrichment never resolved (no lookup / lookup failed). An empty ``rules`` list
means no filter (all numbers dialed), matching the pre-filter behavior.

## Example Usage

```typescript
import { TargetFilters } from "syllable-sdk/models/components";

let value: TargetFilters = {
  match: "any",
  rules: [
    {
      field: "line_type",
      op: "in",
      values: [
        "landline",
        "fixedVoip",
        "nonFixedVoip",
      ],
    },
    {
      field: "carrier_name",
      op: "in",
      values: [
        "Onvoy, LLC - Sinch",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`                                                                                                                                                                      | [components.Match](../../models/components/match.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                           | How to combine rules: 'all' (AND) or 'any' (OR).                                                                                                                             | **Example 1:** all<br/>**Example 2:** any                                                                                                                                    |
| `onUnknown`                                                                                                                                                                  | [components.OnUnknown](../../models/components/onunknown.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Whether to dial requests whose enrichment is unresolved (no lookup data).                                                                                                    | **Example 1:** include<br/>**Example 2:** exclude                                                                                                                            |
| `rules`                                                                                                                                                                      | [components.TargetFilterRule](../../models/components/targetfilterrule.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Predicates over request enrichment attributes. Empty means no filter.                                                                                                        | [<br/>{<br/>"field": "line_type",<br/>"op": "in",<br/>"values": [<br/>"landline",<br/>"fixedVoip",<br/>"nonFixedVoip"<br/>]<br/>},<br/>{<br/>"field": "carrier_name",<br/>"op": "in",<br/>"values": [<br/>"Onvoy, LLC - Sinch"<br/>]<br/>}<br/>] |