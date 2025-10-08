# PronunciationOverride

A single text replacement rule.

## Example Usage

```typescript
import { PronunciationOverride } from "syllable-sdk/models/components";

let value: PronunciationOverride = {
  text: "<value>",
  replacement: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `text`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `replacement`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `language`                                                   | *components.Language*                                        | :heavy_minus_sign:                                           | N/A                                                          |
| `provider`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `voice`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `matchType`                                                  | [components.MatchType](../../models/components/matchtype.md) | :heavy_minus_sign:                                           | Matching strategy for override text.                         |
| `matchOptions`                                               | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |
| `enabled`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `notes`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |