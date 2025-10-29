# DirectoryExtension

## Example Usage

```typescript
import { DirectoryExtension } from "syllable-sdk/models/components";

let value: DirectoryExtension = {
  name: "work",
  numbers: [
    {
      number: "+1234567890",
      rules: [
        {
          "language": "en",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Directory extension name                                                                     | work                                                                                         |
| `numbers`                                                                                    | [components.DirectoryExtensionNumber](../../models/components/directoryextensionnumber.md)[] | :heavy_minus_sign:                                                                           | Directory extension numbers.                                                                 |                                                                                              |