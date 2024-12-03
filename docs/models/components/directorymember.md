# DirectoryMember

## Example Usage

```typescript
import { DirectoryMember } from "syllable-sdk/models/components";

let value: DirectoryMember = {
  name: "<value>",
  type: "<value>",
  id: 587600,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extensions`                                                                                  | [components.DirectoryExtension](../../models/components/directoryextension.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contactTags`                                                                                 | [components.ContactTags](../../models/components/contacttags.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |