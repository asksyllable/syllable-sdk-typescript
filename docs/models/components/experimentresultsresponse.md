# ExperimentResultsResponse

What an experiment has collected so far.

## Example Usage

```typescript
import { ExperimentResultsResponse } from "syllable-sdk/models/components";

let value: ExperimentResultsResponse = {
  experimentId: 1,
  variants: [
    {
      variantId: 1,
      sessionCount: 1050,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                                                                                                    | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The internal ID of the experiment                                                                                                                                                 | 1                                                                                                                                                                                 |
| `variants`                                                                                                                                                                        | [components.ExperimentVariantResult](../../models/components/experimentvariantresult.md)[]                                                                                        | :heavy_check_mark:                                                                                                                                                                | Current variants in the same order as the experiment lists them, including variants with no sessions, followed by historical variants with recorded sessions sorted by variant ID |                                                                                                                                                                                   |