# DaoExperimentVariantWrite

One variant of an experiment as it is written.

Variants are always written as a complete set, because a weight only means anything next to the
other weights, so there is no model for writing one on its own. The fields are checked by
`ExperimentsDao._validate_variants` and not by the model, so that every rule about a variant
reads in one place.

## Example Usage

```typescript
import { DaoExperimentVariantWrite } from "syllable-sdk/models/components";

let value: DaoExperimentVariantWrite = {
  name: "b",
  weight: 10,
  agentId: 1,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                          | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The name of the variant, unique within the experiment                                                                                           | b                                                                                                                                               |
| `weight`                                                                                                                                        | *number*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The relative weight of the variant, not a percentage. (E.g., if two variants both have a weight of 10, they are equally likely to be selected.) | 10                                                                                                                                              |
| `isControl`                                                                                                                                     | *boolean*                                                                                                                                       | :heavy_minus_sign:                                                                                                                              | Whether this is the reference variant the others are measured against                                                                           |                                                                                                                                                 |
| `agentId`                                                                                                                                       | *number*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The agent this variant runs                                                                                                                     | 1                                                                                                                                               |