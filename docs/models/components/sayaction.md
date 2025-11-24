# SayAction

## Example Usage

```typescript
import { SayAction } from "syllable-sdk/models/components";

let value: SayAction = {
  text: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `if`                                                                   | *components.SayActionIf*                                               | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |
| `text`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Text to apply if the condition is true.                                |
| `action`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `role`                                                                 | [components.Role](../../models/components/role.md)                     | :heavy_minus_sign:                                                     | The role of the message.                                               |