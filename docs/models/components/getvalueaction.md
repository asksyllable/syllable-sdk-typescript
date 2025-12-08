# GetValueAction

## Example Usage

```typescript
import { GetValueAction } from "syllable-sdk/models/components";

let value: GetValueAction = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `value`                                                                    | *any*                                                                      | :heavy_minus_sign:                                                         | Initial value of the variable.                                             |
| `valueFrom`                                                                | *components.GetValueActionValueFrom*                                       | :heavy_minus_sign:                                                         | Expression to compute initial value (mutually exclusive with value).       |
| `if`                                                                       | *components.GetValueActionIf*                                              | :heavy_minus_sign:                                                         | An expression that must evaluate to true for the action to be applied.     |
| `action`                                                                   | [components.Action](../../models/components/action.md)                     | :heavy_minus_sign:                                                         | Populate default input values.                                             |
| `inputs`                                                                   | *string*[]                                                                 | :heavy_minus_sign:                                                         | Input field names to populate; None populates all step inputs.             |
| `overwrite`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | If False (default), only populate empty inputs. If True, always overwrite. |