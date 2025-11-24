# SaveAction

## Example Usage

```typescript
import { SaveAction } from "syllable-sdk/models/components";

let value: SaveAction = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `if`                                                                   | *components.SaveActionIf*                                              | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |
| `action`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Target name to save (defaults to global variable).                     |
| `inputs`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | Input field names to persist; None saves all collected inputs.         |