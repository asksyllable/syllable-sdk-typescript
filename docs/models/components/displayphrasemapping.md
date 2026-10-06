# DisplayPhraseMapping

A producer-owned localized phrase with per-item dynamic values.

## Example Usage

```typescript
import { DisplayPhraseMapping } from "syllable-sdk/models/components";

let value: DisplayPhraseMapping = {
  template: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `template`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `params`                                                                                       | Record<string, *components.Params*>                                                            | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `prose`                                                                                        | Record<string, *components.Prose*>                                                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `dates`                                                                                        | Record<string, [components.DisplayDateMapping](../../models/components/displaydatemapping.md)> | :heavy_minus_sign:                                                                             | N/A                                                                                            |