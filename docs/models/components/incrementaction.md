# IncrementAction

## Example Usage

```typescript
import { IncrementAction } from "syllable-sdk/models/components";

let value: IncrementAction = {
  action: "inc",
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `if`                                                                   | *components.IncrementActionIf*                                         | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |
| `action`                                                               | *"inc"*                                                                | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Numeric destination path to increment.                                 |
| `by`                                                                   | *number*                                                               | :heavy_minus_sign:                                                     | Increment amount (defaults to 1).                                      |