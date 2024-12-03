# DirectoryMemberCreate

## Example Usage

```typescript
import { DirectoryMemberCreate } from "syllable-sdk/models/components";

let value: DirectoryMemberCreate = {
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `extensions`                                                                                               | [components.DirectoryExtension](../../models/components/directoryextension.md)[]                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `contactTags`                                                                                              | [components.DirectoryMemberCreateContactTags](../../models/components/directorymembercreatecontacttags.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |