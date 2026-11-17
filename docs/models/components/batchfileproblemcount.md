# BatchFileProblemCount

How many rows of a batch file have one problem, and what happens to those rows.

## Example Usage

```typescript
import { BatchFileProblemCount } from "syllable-sdk/models/components";

let value: BatchFileProblemCount = {
  problem: "duplicate_reference_id",
  count: 3,
  called: false,
  outcome:
    "The phone number is not valid. These rows are marked Invalid and not called.",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `problem`                                                                    | [components.BatchFileProblem](../../models/components/batchfileproblem.md)   | :heavy_check_mark:                                                           | A problem found in one row of a batch file.                                  |                                                                              |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Number of rows with this problem                                             | 3                                                                            |
| `called`                                                                     | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether rows with this problem are called                                    | false                                                                        |
| `outcome`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | What the problem is and what happens to the rows that have it                | The phone number is not valid. These rows are marked Invalid and not called. |