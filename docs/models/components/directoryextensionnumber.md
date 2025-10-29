# DirectoryExtensionNumber

## Example Usage

```typescript
import { DirectoryExtensionNumber } from "syllable-sdk/models/components";

let value: DirectoryExtensionNumber = {
  number: "+1234567890",
  rules: [
    {
      "language": "en",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `number`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Phone number                                                                                                 | +1234567890                                                                                                  |
| `rules`                                                                                                      | Record<string, *string*>[]                                                                                   | :heavy_minus_sign:                                                                                           | Directory extension number rules. To include a language rule, use key "language" with a language code value. | [<br/>{<br/>"language": "en"<br/>}<br/>]                                                                     |