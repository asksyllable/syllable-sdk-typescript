# BatchFileProblemRow

One problem found in one row of a batch file.

## Example Usage

```typescript
import { BatchFileProblemRow } from "syllable-sdk/models/components";

let value: BatchFileProblemRow = {
  rowNumber: 7,
  referenceId: "12345",
  problem: "missing_op_id",
  reason: "The phone number \"555-0100\" is not valid.",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `rowNumber`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | Row number in the file, as a spreadsheet shows it. The column names are row 1. | 7                                                                              |
| `referenceId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The reference_id of the row, if it has one                                     | 12345                                                                          |
| `problem`                                                                      | [components.BatchFileProblem](../../models/components/batchfileproblem.md)     | :heavy_check_mark:                                                             | A problem found in one row of a batch file.                                    |                                                                                |
| `reason`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | What is wrong with the row                                                     | The phone number "555-0100" is not valid.                                      |