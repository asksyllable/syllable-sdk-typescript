# DirectoryMemberTestExtensionRequest

## Example Usage

```typescript
import { DirectoryMemberTestExtensionRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberTestExtensionRequest = {
  memberId: 720397,
  timestamp: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `memberId`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `timestamp`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Timestamp for test in ISO 8601 format (e.g., 2025-12-04T14:29:39)  |
| `languageCode`                                                     | [components.LanguageCode](../../models/components/languagecode.md) | :heavy_minus_sign:                                                 | Optional language code for test                                    |