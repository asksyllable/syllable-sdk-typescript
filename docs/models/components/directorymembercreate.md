# DirectoryMemberCreate

Request model to create a directory member.

## Example Usage

```typescript
import { DirectoryMemberCreate } from "syllable-sdk/models/components";

let value: DirectoryMemberCreate = {
  name: "Jane Doe",
  type: "contact",
  extensions: [
    {
      name: "work",
      numbers: [
        {},
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Name of the directory member                                                                               | Jane Doe                                                                                                   |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Type of the directory member                                                                               | contact                                                                                                    |
| `extensions`                                                                                               | [components.DirectoryExtension](../../models/components/directoryextension.md)[]                           | :heavy_minus_sign:                                                                                         | List of extensions for the directory member                                                                | [<br/>{<br/>"name": "work",<br/>"numbers": [<br/>{<br/>"number": "+1234567890",<br/>"rules": [<br/>{<br/>"language": "en"<br/>}<br/>]<br/>}<br/>]<br/>}<br/>] |
| `contactTags`                                                                                              | [components.DirectoryMemberCreateContactTags](../../models/components/directorymembercreatecontacttags.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `updatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `lastUpdatedBy`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |