# ExperimentVariantResult

How much traffic one variant of an experiment handled.

## Example Usage

```typescript
import { ExperimentVariantResult } from "syllable-sdk/models/components";

let value: ExperimentVariantResult = {
  variantId: 1,
  sessionCount: 1050,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `variantId`                             | *number*                                | :heavy_check_mark:                      | The internal ID of the variant          | 1                                       |
| `sessionCount`                          | *number*                                | :heavy_check_mark:                      | How many sessions this variant answered | 1050                                    |