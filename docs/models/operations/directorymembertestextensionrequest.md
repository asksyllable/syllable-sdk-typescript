# DirectoryMemberTestExtensionRequest

## Example Usage

```typescript
import { DirectoryMemberTestExtensionRequest } from "syllable-sdk/models/operations";

let value: DirectoryMemberTestExtensionRequest = {
  memberId: 720397,
  timestamp: new Date("2024-04-16T12:45:11.747Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `memberId`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp for test                                                                            |
| `languageCode`                                                                                | [components.LanguageCode](../../models/components/languagecode.md)                            | :heavy_minus_sign:                                                                            | Optional language code for test                                                               |