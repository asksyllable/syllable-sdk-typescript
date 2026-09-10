# ExperimentUpdateRequest

Request model to update an experiment.

## Example Usage

```typescript
import { ExperimentUpdateRequest } from "syllable-sdk/models/components";

let value: ExperimentUpdateRequest = {
  name: "Shorter greeting",
  variants: [
    {
      name: "b",
      weight: 10,
      agentId: 1,
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The name of the experiment                                                                                                  | Shorter greeting                                                                                                            |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The hypothesis under test                                                                                                   |                                                                                                                             |
| `variants`                                                                                                                  | [components.DaoExperimentVariantWrite](../../models/components/daoexperimentvariantwrite.md)[]                              | :heavy_minus_sign:                                                                                                          | The variants of the experiment, as a complete set. Two or more, each on a different agent, exactly one of them the control. |                                                                                                                             |