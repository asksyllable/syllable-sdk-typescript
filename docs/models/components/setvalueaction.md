# SetValueAction

## Example Usage

```typescript
import { SetValueAction } from "syllable-sdk/models/components";

let value: SetValueAction = {
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *any*                                                                  | :heavy_minus_sign:                                                     | Initial value of the variable.                                         |
| `valueFrom`                                                            | *components.SetValueActionValueFrom*                                   | :heavy_minus_sign:                                                     | Expression to compute initial value (mutually exclusive with value).   |
| `if`                                                                   | *components.SetValueActionIf*                                          | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |
| `action`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Destination path to mutate (e.g. output.foo).                          |