# ConditionalText

## Example Usage

```typescript
import { ConditionalText } from "syllable-sdk/models/components";

let value: ConditionalText = {
  text: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `if`                                                                   | *components.ConditionalTextIf*                                         | :heavy_minus_sign:                                                     | An expression that must evaluate to true for the action to be applied. |
| `text`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Text to apply if the condition is true.                                |