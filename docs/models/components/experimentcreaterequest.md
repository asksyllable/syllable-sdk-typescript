# ExperimentCreateRequest

Request model to create an experiment.

## Example Usage

```typescript
import { ExperimentCreateRequest } from "syllable-sdk/models/components";

let value: ExperimentCreateRequest = {
  name: "Shorter greeting",
  variants: [
    {
      name: "b",
      weight: 10,
      agentId: 1,
    },
  ],
  targetId: 1,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The name of the experiment                                                                                                  | Shorter greeting                                                                                                            |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The hypothesis under test                                                                                                   |                                                                                                                             |
| `variants`                                                                                                                  | [components.DaoExperimentVariantWrite](../../models/components/daoexperimentvariantwrite.md)[]                              | :heavy_minus_sign:                                                                                                          | The variants of the experiment, as a complete set. Two or more, each on a different agent, exactly one of them the control. |                                                                                                                             |
| `targetId`                                                                                                                  | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The channel target being split                                                                                              | 1                                                                                                                           |