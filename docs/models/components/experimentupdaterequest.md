# ExperimentUpdateRequest

Replace an experiment's name, hypothesis, and complete variant set.

Include at least two variants that use distinct agents. Mark exactly one as the control and use
positive whole-number weights that total 100.

## Example Usage

```typescript
import { ExperimentUpdateRequest } from "syllable-sdk/models/components";

let value: ExperimentUpdateRequest = {
  name: "Shorter greeting",
  description: "Test whether a shorter greeting reduces call duration.",
  variants: [
    {
      name: "control",
      weight: 50,
      isControl: true,
      agentId: 10,
    },
    {
      name: "short greeting",
      weight: 50,
      agentId: 11,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               | Example                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                        | The name of the experiment                                                                                                                                                                                | Shorter greeting                                                                                                                                                                                          |
| `description`                                                                                                                                                                                             | *string*                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                        | The hypothesis under test                                                                                                                                                                                 |                                                                                                                                                                                                           |
| `variants`                                                                                                                                                                                                | [components.DaoExperimentVariantWrite](../../models/components/daoexperimentvariantwrite.md)[]                                                                                                            | :heavy_check_mark:                                                                                                                                                                                        | The complete set of variants for this experiment. Include at least 2 variants that use distinct agents, mark exactly one variant as the control, and assign positive whole number weights that total 100. |                                                                                                                                                                                                           |