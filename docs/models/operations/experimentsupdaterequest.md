# ExperimentsUpdateRequest

## Example Usage

```typescript
import { ExperimentsUpdateRequest } from "syllable-sdk/models/operations";

let value: ExperimentsUpdateRequest = {
  experimentId: 961804,
  experimentUpdateRequest: {
    name: "Shorter greeting",
    variants: [
      {
        name: "b",
        weight: 10,
        agentId: 1,
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `experimentId`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `experimentUpdateRequest`                                                                | [components.ExperimentUpdateRequest](../../models/components/experimentupdaterequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |